<template>
    <div class="container">

        <h1 style="text-align: center; font-size: 3em; margin-bottom:">질문 게시판</h1>
        <hr style="margin-bottom: 40px;">
            <div
                class="panel panel-info"
                style="background-color: rgba( 255, 255, 255,0.8 ); height: 100%;">
                <div class="panel-heading" style="text-align:left; font-weight: bold; ">
                    Q.
                    {{board.btitle }}
                </div>
                <hr>
                    <div class="panel-body" style="height:400px; font-size:40px;">

                        {{board.bcontent }}

                    </div>

                    <span
                        v-for="com in list"
                        class="row productRow"
                        :key="com.cnum"
                        style="display:block;  margin: 50px;">
                        <div class="container" style="display:block;">
                            <div class="content" style="border:none; float:left;">
                                <hr>

                                    {{com.ccontent }}

                                </div>
                            </div>
                            <button class="btn btn-danger btn-fla" @click="removecomment(com.cnum)">댓글삭제</button>
                        </span>

                        <form
                            action=""
                            method="post"
                            id="_brdFrom"
                            name="brdForm"
                            @submit.prevent="insertcomment">
                            <div class="form-group">
                                <label for="ccontent">내용</label>
                                <input
                                    data-msg="내용"
                                    type="text"
                                    name="ccontent"
                                    id="ccontent"
                                    v-model="ccontent"
                                    class="form-control"
                                    style="height:150px; width:300"
                                    placeholder="내용을 입력해주세요."></div>

                                <div class="row">
                                    <div class="col-sm-12 text-right">
                                        <div style="float:right;">
                                            <button type="reset" class="btn btn-danger" style="width:100px;">취소
                                            </button>
                                        </div>
                                        <div style="float:right;">
                                            <button type="submit" class="btn btn-primary" style="width:100px;">댓글등록</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div class="panel-footer text-right">
                                <template v-if="usercheck()">
                                    <button class="btn btn-info btn-flat" @click="edit()">수정</button>
                                    <button class="btn btn-danger btn-fla" @click="remove()">삭제</button>
                                </template>
                                <button class="btn btn-primary btn-flatt" @click="backtolist()">목록</button>
                            </div>
                        </div>

                    </div>
                </template>
                <script>
                    import http from "../http-common";

                    export default {
                        props: ['bid'],
                        name: "viewBoard",
                        data() {
                            return {upHere: false, board: [], loading: true, errored: false, list: []};
                        },
                        methods: {
                            insertcomment() {
                                if (this.ccontent == '') {
                                    alert('내용을 입력하세요.');
                                    return;
                                }

                                http
                                    .post('/registercomment', {
                                        cnum: 0,
                                        bid: this.bid,                                        
                                        ccontent: this.ccontent,                                       
                                        user_id: localStorage.getItem("id")
                                    })
                                    .then(response => {
                                        if (response.data.resCode == 'succ') {
                                            alert("질문등록 완료.");
                                            this.ccontent='';
                                            this.getcomment();
                                        } else {
                                            alert("질문등록 실패");
                                            
                                            this.getcomment();
                                        }
                                    });
                                this.submitted = true;
                            },
                            getcomment() {
                                http
                                    .get("/listcomment/" + this.bid)
                                    .then(response => {
                                        this.list = response.data.resvalue;
                                    })
                                    .catch(() => {
                                        alert("fail");
                                        this.errored = true;
                                    })
                                    . finally(() => (this.loading = false));

                            },
                            removecomment(cnum) {

                                http
                                    .delete("/deletecomment/" + cnum)
                                    .then(response => {
                                        if (response.data.state == "succ") {
                                            alert("댓글 삭제를 하였습니다.");

                                            // this.retrieveCustomers();
                                        } else {
                                            alert("댓글 삭제를 하였습니다.");

                                        }
                                    })
                                    .catch(() => {
                                        this.errored = true;
                                    })
                                    . finally(() => {
                                        this.loading = false;

                                        this.getcomment();
                                    });

                            },

                            usercheck() {
                                if (localStorage.getItem("id") == this.board.user_id) 
                                    return true;
                                else 
                                    return false;
                                }
                            ,
                            showlist() {
                                this
                                    .$router
                                    .push("/listBoard");
                            },
                            viewBoards() {
                                http
                                    .get("http://localhost:8090/api/infoboard/" + this.bid)
                                    .then(response => {
                                        this.board = response.data.resvalue;
                                    })
                                    .catch(() => {
                                        alert("fail");
                                        this.errored = true;
                                    })
                                    . finally(() => (this.loading = false));
                                this.getcomment();
                            },
                            edit() {
                                this
                                    .$router
                                    .push("/UpdateBoard");
                            },
                            remove() {
                                alert(this.bid + "번 게시물 삭제합니다.");
                                http
                                    .delete("/deleteboard/" + this.bid + "/" + localStorage.getItem("id"))
                                    .then(response => {
                                        if (response.data.state == "succ") {
                                            alert("게시글 삭제를 하였습니다.");
                                            this
                                                .$router
                                                .push("/listBoard");
                                            // this.retrieveCustomers();
                                        } else {
                                            alert("게시글 삭제를 하였습니다.");
                                            this
                                                .$router
                                                .push("/listBoard");
                                        }
                                    })
                                    .catch(() => {
                                        this.errored = true;
                                    })
                                    . finally(() => (this.loading = false));

                            },
                            backtolist() {
                                this.showlist();
                            }
                        },
                        filters: {},
                        mounted() {
                            this.viewBoards();
                        }
                    };
                </script>
                <style></style>