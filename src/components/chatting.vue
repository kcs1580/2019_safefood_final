<template>
    <div class="container">

        <h1 style="text-align: center; font-size: 3em; margin-bottom:">Q&amp;A</h1>
        <hr style="margin-bottom: 40px;">
            <div
                class="panel panel-info"
                style="background-color: rgba( 255, 255, 255,0.8 ); height: 100%;">
                <div
                    class="panel-heading"
                    style="text-align:center; font-weight: bold;  padding: 20px;background:#b6b9bb ">
                    [Q.
                    {{board.bid}}]
                    {{board.btitle }}</div>
                <br>
                    <div style="float:right;">
                        작성자:
                        {{board.user_name}}
                        <span style="margin: 5px;"></span>
                        조회수:
                        {{board.bcount}}
                        <span style="margin: 5px;"></span>

                    </div>
                    <br>
                        <hr>
                            <div class="panel-body" style="height:400px; font-size:20px; padding:40px; ">
                                {{board.bcontent }}
                            </div>
                            <hr>

                                <span
                                    v-for="com in list"
                                    class="row productRow"
                                    :key="com.cnum"
                                    style="display:block;  margin: 50px;">
                                    <div class="container" style="display:block;">
                                        <div
                                            class="content"
                                            style="border:none; float:left; font-size:20px; font-weight:bold;">
                                            <i class="fab fa-replyd fa-2x"></i>
                                            {{com.user_name}}
                                            :
                                            {{com.ccontent }}

                                        </div>
                                    </div>
                                   
                                </span>
                            </div>
                            <form
                                                    action=""
                                                    method="post"
                                                    id="_brdFrom"
                                                    name="brdForm"
                                                    @submit.prevent="insertchat">
                                                    <span class="form-group">
                                                        <span style="float: left; width:70px;"></span>
                                                        <span style="float: left;">
                                                            <input
                                                                data-msg="내용"
                                                                type="text"
                                                                v-model="ccontent"
                                                                class="form-control"
                                                                style="height:50px; width:800px; margin-left:20px;"
                                                                placeholder=" 내용을 입력해주세요."></span>

                                                        </span>
                                                        <div class="row">
                                                            <div class="col-sm-12 text-right">

                                                                <div style="float:left;">
                                                                    <button type="submit" class="btn btn-primary" style="width:60px;">등록</button>
                                                                </div>
                                                                <div style="float:left;">
                                                                    <button type="reset" class="btn btn-danger" style="width:60px;">취소
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                        </div>

                   
                </template>
                <script>
                    import http from "../http-common";

                    export default {                       
                        name: "chatting",
                        data() {
                            return {upHere: false, board: [], loading: true, errored: false, list: []};
                        },
                        methods: {
                            getname(id) {
                                http
                                    .get('/memlist/' + id)
                                    .then(response => {
                                        this.name = response.data.mem.mname;
                                    });
                                alert(this.name);

                            },
                            insertchat() {
                                if (this.ccontent == '') {
                                    alert('내용을 입력하세요.');
                                    return;
                                }

                                http
                                    .post('/registerchat', {
                                        cnum: 0,                                        
                                        ccontent: this.ccontent,
                                        user_id: localStorage.getItem("id"),
                                        user_name: ''
                                    })
                                    .then(response => {
                                        if (response.data.resCode == 'succ') {
                                            
                                            this.ccontent = '';
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

                            },                            

                            usercheck() {
                                if (localStorage.getItem("id") == this.board.user_id) 
                                    return true;
                                else 
                                    return false;
                                }
                            ,
                            cusercheck(cid) {
                                if (localStorage.getItem("id") == cid) 
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