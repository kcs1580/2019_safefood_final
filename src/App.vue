<template>
    <div id="app">
        <header>
            
            <nav class="navbar navbar-inverse navbar-fixed-top" style="height:100px;">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <div >
                            <a class="nav_btn" href="http://localhost:8090">홈으로</a> |
                            <router-link class="nav_btn" to="/listNotice">공지사항</router-link> |
                            <router-link class="nav_btn" to="/qnadetail">QNADETAIL</router-link> |
                            <router-link class="nav_btn" to="/qnaform">QNALIST</router-link> |
                            <router-link class="nav_btn" to="/qnaadd">qnaadd</router-link> |
                            <router-link class="nav_btn" to="/productlist">상품정보</router-link> |
                            <template v-if="sessionCheck()">
                                <router-link class="nav_btn" to="/listBoard">질문게시판</router-link> |
                                <router-link class="nav_btn" to="/mytakeinfo">섭취정보</router-link> | 
                            </template>
                            <template v-if="!sessionCheck()">
                            <router-link class="nav_btn" to="/signuppage">회원가입</router-link> | 
                            </template>
                          

                            <template v-if="sessionCheck()">
                                <p id="loginUser" style="color:chocolate; ">{{userInfo}} 님 환영합니다.</p>
                            </template>

                            <template v-if="!sessionCheck()">
                                <li class="dropdown" v-bind:class="{ 'open': loginPopup }">
                                    <a
                                        class="btn btn-sm dropdown-toggle"
                                        href="#"
                                        @click="loginPopupfunc()"
                                        data-toggle="dropdown">
                                        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                        <span>&nbsp;Login</span>
                                    </a>
                                    <div class="dropdown-menu" style="padding: 17px;">
                                        <form @submit.prevent="loginfunc()">
                                            <div class="form-group">
                                                <label for="id">아이디</label>
                                                <input
                                                    type="text"
                                                    v-model="id"
                                                    class="form-control"
                                                    id="id"
                                                    name="id"
                                                    placeholder="ID"
                                                    autocomplete="off"></div>
                                                <div class="form-group">
                                                    <label for="pw">패스워드</label>
                                                    <input
                                                        type="password"
                                                        v-model="pw"
                                                        class="form-control"
                                                        id="pw"
                                                        name="pw"
                                                        placeholder="Password"></div>
                                                    <div class="form-group">
                                                        <button type="submit" class="btn btn-block btn-primary">로그인</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </li>
                                    </template>

                                    <template v-if="sessionCheck()">
                                        <button @click="logoutfunc">
                                            <a class="btn btn-sm">
                                                <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                                <span>&nbsp;Logout</span>
                                            </a>
                                        </button>
                                            <ul class="nav navbar-nav pull-right">
                                                <li class="dropdown">
                                                    <a class="btn btn-sm dropdown-toggle" href="#" data-toggle="dropdown">
                                                        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                                        <span>&nbsp;menu</span>
                                                    </a>

                                                    <div class="dropdown-menu" style="padding: 17px;">
                                                        <a href="/member/infomem?pid=${loginid }" class="btn btn-block btn-info">회원정보 수정
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                    </template>

                                </div>
                                <!-- /.navbar-collapse -->
                            </div>
                        </div>
                    </nav>
                </header>
                <router-view/>
                <footer style="background: #ececec; padding: 50px;">
                    <h1>Find Us</h1>
                    <hr>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>
                            (SSAFY) 서울시 강남구 테헤란로 멀티스퀘어
                        </p>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>
                            1544-9001
                        </p>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>
                            admin@ssafy.com
                        </p>
                    </footer>
                </div>
            </template>

            <script>
                import {mapActions} from "vuex"
                import Store from "./store"
                export default {
                    name: "app",
                    data() {
                        return {id: null, pw: null, loginPopup: false}
                    },
                    computed: {
                        // ...mapState(['isLogin', 'isLoginError', 'userInfo']),
                        isLogin() {
                            return Store.state.isLogin;
                        },
                        isLoginError() {
                            return Store.state.isLogin;
                        },
                        userInfo() {
                            return localStorage.getItem("name");
                        }

                    },
                    methods: {
                        ...mapActions(['login']),
                        loginfunc() {
                            if (this.id == '') {
                                alert('아이디를 입력하세요.');
                                return;
                            }
                            if (this.pw == '') {
                                alert('비밀번호를 입력하세요.');
                                return;
                            }

                            window
                                .console
                                .log({id: this.id, pw: this.pw})
                            //this.login({id: this.id, pw: this.pw})
                            Store.dispatch('login', {
                                id: this.id,
                                pw: this.pw
                            })
                            this.id = ''
                            this.pw = null
                            this.loginPopupfunc()
                            this.isLogin = true;
                            this.userInfo = this.id;

                        },sessionCheck(){
                            if(localStorage.getItem("id") != null)
                                return true;
                                
                            else return false;
                        }, logoutfunc() {
                            Store.dispatch('logout');
                            this.id = ''
                            this.pw = null
                            this.isLogin = false;
                        },
                        loginPopupfunc() {
                            this.loginPopup = (
                                this.loginPopup
                                    ? false
                                    : true
                            )
                            window
                                .console
                                .log(this.loginPopup)
                        }
                    },

                    mounted() {
                        this.isLogin = false;
                    }
                }
            </script>
            <style>
                #app {
                    background-image: url("../public/bg.jpg");
                }
                @font-face {
                    font-family: 'BBTreeGL';
                    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGL.woff") format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                html * {
                    font-family: 'BBTreeGL';
                }

                .nav_btn {
                    color: black;
                    font-size: 30px;
                }
                #loginUser {
                    color: white;
                    padding: 15px;
                    margin: 0;
                }

                .material {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    height: 120px;
                }

                .jumbotron {
                    background-color: #eef8ff;
                    text-align: center;
                    padding: 20px;
                    box-shadow: 0 10px 6px -6px #999;
                }

                div.ex {
                    background-color: #ccc;
                    width: 600px;
                    padding: 50px;
                    border-style: outset;
                    margin: 70px auto;
                }

                .form-group .control-label:after {
                    content: "*";
                    color: red;
                }

                td,
                th {
                    vertical-align: middle !important;
                }

                th {
                    white-space: nowrap;
                    text-align: center;
                }

                input[type=password] {
                    font-family: auto;
                }

                #loginUser {
                    color: white;
                    padding: 15px;
                    margin: 0;
                }

                .dropdown-menu {
                    width: 350px;
                }

                body,
                html {
                    height: 100%;
                }

                .container {
                    min-height: 70%;
                }
            </style>