<template>
    <div class="container">
        <h1 style="text-align: center; font-size: 3em; margin-bottom:">제품 정보</h1>
        <hr style="margin-bottom: 40px;">

            <div class="row productRow">
                <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                    <img
                        class="media-object"
                        :src="require('../' + food.img)"
                        alt="food.name"
                        width="250"
                        style="margin: 0 auto;"></div>

                    <div class="col-xs-12 col-sm-7 col-md-8 col-lg-9">
                        <table class="table table-hover">
                            <tr>
                                <th>제품명</th>
                                <td id="product_name">{{food.name }}</td>
                            </tr>
                            <tr>
                                <th>제조사</th>
                                <td id="product_maker">{{food.maker }}</td>
                            </tr>
                            <tr>
                                <th>원재료</th>
                                <td>
                                    <p id="product_material">{{food.material }}</p>
                                </td>
                            </tr>
                        </table>

                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">검색 빈도수</span>
                            <input type="text" class="form-control" placeholder="food.searchCount">
                                <span class="input-group-btn">
                                    <a href="" id="insertintake" class="btn btn-flat btn-info" role="button">
                                        <i class="glyphicon glyphicon-tag"></i>
                                        추가
                                    </a>
                                    <a href="#" class="btn btn-flat btn-info" role="button">
                                        <i class="glyphicon glyphicon-tag"></i>
                                        찜
                                    </a>
                                </span>
                            </div>
                            <div class="btn-group" role="group"></div>
                        </div>
                    </div>

                    <h1 style="text-align: center; font-size: 3em;">영양 정보</h1>

                    <hr style="margin-bottom: 40px;">
                        <div class="row">
                            <div class="col-sm-8"></div>

                            <div class="col-sm-4">
                                <table class="table">
                                    <tr>
                                        <td>일일 제공량</td>
                                        <td id="SERVING_WT">{{food.supportpereat }}</td>
                                    </tr>

                                    <tr>
                                        <td>칼로리</td>
                                        <td id="NUTR_CONT1">{{food.calory }}</td>
                                    </tr>

                                    <tr>
                                        <td>탄수화물</td>
                                        <td id="NUTR_CONT2">{{food.carbo }}</td>
                                    </tr>

                                    <tr>
                                        <td>단백질</td>
                                        <td id="NUTR_CONT3">{{food.protein }}</td>
                                    </tr>

                                    <tr>
                                        <td>지방</td>
                                        <td id="NUTR_CONT4">{{food.fat }}</td>
                                    </tr>

                                    <tr>
                                        <td>당류</td>
                                        <td id="NUTR_CONT5">{{food.sugar }}</td>
                                    </tr>

                                    <tr>
                                        <td>나트륨</td>
                                        <td id="NUTR_CONT6">{{food.natrium }}</td>
                                    </tr>

                                    <tr>
                                        <td>콜레스테롤</td>
                                        <td id="NUTR_CONT7">{{food.chole }}</td>
                                    </tr>

                                    <tr>
                                        <td>포화 지방산</td>
                                        <td id="NUTR_CONT8">{{food.fattyacid }}</td>
                                    </tr>

                                    <tr>
                                        <td>트렌스지방</td>
                                        <td id="NUTR_CONT9">{{food.transfat }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </template>

                <script>
                    import http from "../http-common";
                    import App from "../App.vue";
                    export default {
                        name: "productdetail",
                        data() {
                            return {upHere: false, food: [], loading: true, errored: false};
                        },
                        methods: {
                            infofood() {
                                http
                                    .get("/infofood/" + App.code)
                                    .then(response => {
                                        this.food = response.data.food;
                                    })
                                    .catch(() => {
                                        alert("fail"+App.code);
                                        this.errored = true;
                                    })
                                    . finally(() => (this.loading = false));
                            }
                        },
                        filters: {},
                        mounted() {
                            this.infofood();
                        }
                    };
                </script>
                <style></style>