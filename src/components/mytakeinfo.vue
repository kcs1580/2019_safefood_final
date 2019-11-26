<template>
    <div class="container">
        <div class="">
            <div class="title" align="center">총 섭취 데이터
            </div>
            <canvas id="myChart" class=""></canvas>
            <div class="col-xs-12" style="text-align: right; margin-bottom: 15px;"></div>
        </div>

        <div class="panel panel-info">
            <div class="title" align="center" style="height:200px;">나의 섭취 리스트<br>
                    <br>
                        <form action="##" class="form-inline">
                            <div class="form-group"></div>
                            <div class="form-group">
                                <input v-model="keyword"
                                    type="text"
                                    class="form-control"
                                    name="keyword"
                                    placeholder="상품 이름을 입력하세요."
                                    size="80px;"></div>
                                <div id="searchintake" class="btn btn-flat btn-info" @click="searchintake()">
                                    검색</div>
                            </form>
                        </div>
                        <div class="panel-body productPanel">
                            <!-- 아이템 영역 -->

                            <span v-for="item in list" :key="item.code">
                                <h1>
                                    <span style="float: left">
                                        <img
                                            :src="require('../' + item.img)"
                                            alt="item.name"
                                            width="300"
                                            @click="show_detail(item.code)">
                                            <td class="productName" v-html="item.name + '&nbsp;'" style="font-size:20px;"></td>
                                            <td class="productName" v-html="item.icount + '개'" style="font-size:20px;"></td>
                                            <div style="width:300px;"></div>
                                        </span>
                                    </h1>
                                    <div
                                        id="insertintake"
                                        class="btn btn-flat btn-info"
                                        role="button"
                                        @click="deleteintake(item.code)">
                                        <i class="glyphicon glyphicon-tag"></i>
                                        삭제
                                    </div>
                                </span>
                                <div style="height:1000px; background-color: rgba( 255, 255, 255,0.5 );"></div>
                            </div>
                        </div>

                    </div>

                </template>
                <script>
                    import http from "../http-common";
                    import Chart from 'chart.js';
                    export default {
                        name: "intake-list",
                        data() {
                            return {upHere: false, list: [], sum: [], loading: true, errored: false};
                        },
                        methods: {
                            searchintake() {
                                
                                http
                                    .get("/searchintake/"+this.keyword+"/"+localStorage.getItem("id"))

                                    .then(response => (this.list = response.data.list))
                                    .catch(() => {
                                        this.errored = true;
                                    })
                                    . finally(() => (this.loading = false));

                            },
                            deleteintake(dcode) {
                                alert(dcode);
                                http
                                    .delete("/deleteintake/" + localStorage.getItem("id") + "/" + dcode)
                                    .then(response => {
                                        if (response.data.state == "succ") {
                                            alert(response.data.resmsg);
                                            alert("삭제 하였습니다.");

                                        } else {
                                            alert(response.data.resmsg);
                                            alert("삭제 하지 못했습니다.");
                                        }
                                    })
                                    .catch(() => {
                                        this.errored = true;
                                    })
                                    . finally(() => (this.loading = false));

                            },
                            dynamicColors() {
                                var r = Math.floor(Math.random() * 255);
                                var g = Math.floor(Math.random() * 255);
                                var b = Math.floor(Math.random() * 255);
                                return "rgba(" + r + "," + g + "," + b + ",0.8)";
                            },
                            retrieveIntake() {
                                http
                                    .get("/searchallintake/" + localStorage.getItem("id"))
                                    .then((response) => {
                                        this.list = response.data['list'];
                                        this.sum = response.data['sum'];
                                        // alert(this.list); alert(this.sum);
                                        const myChart = new Chart("myChart", {
                                            type: 'doughnut',
                                            data: {
                                                labels: [
                                                    "칼로리",
                                                    "탄수화물",
                                                    "단백질",
                                                    "지방",
                                                    "당류",
                                                    "나트륨",
                                                    "콜레스테롤",
                                                    "포화 지방산",
                                                    "트랜스지방"
                                                ],
                                                datasets: [
                                                    {
                                                        label: '# of Votes',
                                                        data: [
                                                            this.sum.calory,
                                                            this.sum.carbo,
                                                            this.sum.protein,
                                                            this.sum.fat,
                                                            this.sum.sugar,
                                                            this.sum.natrium,
                                                            this.sum.chole,
                                                            this.sum.fattyacid,
                                                            this.sum.transfat
                                                        ],
                                                        backgroundColor: [
                                                            this.dynamicColors(),
                                                            this.dynamicColors(),
                                                            this.dynamicColors(),
                                                            this.dynamicColors(),
                                                            this.dynamicColors(),
                                                            this.dynamicColors(),
                                                            this.dynamicColors(),
                                                            this.dynamicColors(),
                                                            this.dynamicColors()
                                                        ]
                                                    }
                                                ]
                                            },
                                            options: {
                                                maintainAspectRatio: true,
                                                scales: {
                                                    yAxes: [
                                                        {
                                                            ticks: {
                                                                beginAtZero: true
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        });
                                        myChart;
                                    })
                                    .catch(() => {
                                        this.errored = true;
                                    })
                                    . finally(() => (this.loading = false));
                            }
                        },
                        filters: {},
                        mounted() {
                            this.retrieveIntake();
                        }
                    };
                </script>

                <style>
                    .panel-heading {
                        text-align: center;
                        font-size: 40px;
                    }
                    .title {
                        text-align: center;
                        font-size: 40px;
                    }
                    .form-inline {
                        float: right;

                    }
                </style>