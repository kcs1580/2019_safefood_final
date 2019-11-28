<template>

    <div>
        <div
            class="panel-heading"
            style="text-align:center; font-weight: bold;  padding: 20px;background:#b6b9bb ">실시간 채팅</div>
        <br>
            <div id="send">
                <span class="form-group">
                    <span style="float: left; width:70px;"></span>
                    <span style="float: left;">
                        <input
                            data-msg="내용"
                            type="text"
                            v-model="iccontent"
                            class="form-control"
                            style=" width:500px; margin-left:20px;"
                            placeholder=" 내용을 입력해주세요."></span>

                    </span>
                    <span class="row">
                        <div class="col-sm-12 text-right">
                            <div style="float:left;">
                                <div class="btn btn-primary" style="width:80px;" @click="insertchat()">보내기</div>
                            </div>

                        </div>
                    </span>

                </div>
                <hr>
                    <div
                        v-for="com in list"
                        class="row productRow"
                        :key="com.cnum"
                        style="display:block;  margin: 50px;">
                        <div class="container" style="display:block;">
                            <div class="row">
                                <div class="content" style="border:none; float:left; font-size:15px; ">

                                    {{com.user_name}}
                                    :
                                    {{com.ccontent }}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </template>
            <script>
                import http from "../http-common";

                export default {
                    name: "chatting",
                    data() {
                        return {
                            upHere: false,
                            board: [],
                            loading: true,
                            errored: false,
                            list: [],
                            timer: ''
                        };
                    },
                    methods: {
                        autoreload: function () {

                            this.getchat()

                        },
                        insertchat() {
                            if (this.iccontent == '') {
                                alert('내용을 입력하세요.');
                                return;
                            }

                            http
                                .post('/registerchat', {
                                    cnum: 0,
                                    ccontent: this.iccontent,
                                    user_id: localStorage.getItem("id"),
                                    user_name: ''
                                })
                                .then(response => {
                                    if (response.data.resCode == 'succ') {

                                        this.iccontent = '';
                                        this.getchat();
                                    } else {
                                        alert("댓글등록 실패");
                                    }
                                });
                            this.submitted = true;
                        },
                        getchat() {
                            http
                                .get("/listchat")
                                .then(response => {
                                    this.list = response.data.resvalue;
                                })
                                .catch(() => {
                                    alert("fail");
                                    this.errored = true;
                                })
                                . finally(() => (this.loading = false));

                        }

                    },
                    filters: {},
                    created() {
                        this.autoreload();
                        this.timer = setInterval(this.autoreload, 300);

                        http
                            .post('/registerchat', {
                                cnum: 0,
                                ccontent: localStorage.getItem("id") + '님이 입장하셨습니다.',
                                user_id: localStorage.getItem("id"),
                                user_name: ''
                            })
                            .then(response => {
                                if (response.data.resCode == 'succ') {

                                    this.iccontent = '';
                                    this.getchat();
                                } else {
                                    alert("댓글등록 실패");
                                }
                            });
                        this.submitted = true;

                    },
                    mounted() {}
                };
            </script>
            <style></style>