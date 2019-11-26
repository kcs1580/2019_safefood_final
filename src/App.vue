<template>
    <div id="app">
        <header>

            <nav class="navbar navbar-inverse navbar-fixed-top justify-content-end" style="height:100px;">
                
                <div class="container-fluid">
                    <div class="navbar-header">
                                   
                            <a href="/">
                                <img src="../public/ssafy_logo.png" alt="logo" style="width:80px;height:60px; ;"></a>
                                <router-link class="nav_btn" to="/">홈으로</router-link>
                                |
                                <router-link class="nav_btn" to="/listNotice">공지사항</router-link>
                                |
                                <router-link class="nav_btn" to="/productlist">상품정보</router-link>
                                |
                                    <router-link class="nav_btn" to="/qnadetail">QNADETAIL</router-link> |
                            <router-link class="nav_btn" to="/qnaform">QNALIST</router-link> |
                            <router-link class="nav_btn" to="/qnaadd">qnaadd</router-link> |
                                <template v-if="sessionCheck()">
                                    <router-link class="nav_btn" to="/listBoard">질문게시판</router-link>
                                    |
                                    <router-link class="nav_btn" to="/mytakeinfo">섭취정보</router-link>
                                    |
                                    
                                    <div style="float: right; ">
                                        <!-- <span class="glyphicon glyphicon-user" aria-hidden="true"></span> -->
                                        <template v-if="sessionCheck()">
                                            <p
                                                class="glyphicon glyphicon-user"
                                                id="loginUser"
                                                style="color:black; font-size:15px; float:right;">{{userInfo}}님 환영합니다.</p>
                                        </template>

                                    </div>
                                    <template v-if="sessionCheck()">
                                        <button @click="logoutfunc">
                                            <a class="btn btn-sm">
                                                <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                                <span>&nbsp;Logout</span>
                                            </a>
                                        </button>

                                    </template>
                                </template>
                                <template v-if="!sessionCheck()">
                                    <div class="dropdown" v-bind:class="{ 'open': loginPopup }" style="left:1500px;">
                                        <a
                                            class="btn btn-sm dropdown-toggle"
                                            href="#"
                                            @click="loginPopupfunc()"
                                            data-toggle="dropdown">
                                            <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
                                            <span style="color:red;">&nbsp;Login</span>
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
                                                            <template v-if="!sessionCheck()">
                                                            <router-link class="btn btn-block btn-danger" to="/signuppage">회원가입</router-link>
                                                                </template>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </template>

                                </div>
                            </div>
                        </nav>
                    </header>
                    <div style="height:100px;"></div>
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
                        el: '#main',
                        data() {
                            // active: 'home';
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
                                return localStorage.getItem("id");
                            }

                        },
                        methods: {
                            makeActive: function (item) {
                                this.active = item;
                            },
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

                            },
                            sessionCheck() {
                                if (localStorage.getItem("id") != null) 
                                    return true;
                                
                                else 
                                    return false;
                                }
                            ,
                            logoutfunc() {
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
                        font-size: 20px;
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

                    * {
                        margin: 0;
                        padding: 0;
                    }

                    a,
                    a:visited {
                        outline: none;
                        color: rgba(255, 255, 255,0.8);
                    }

                    a:hover {
                        text-decoration: none;
                    }

                    aside,
                    footer,
                    header,
                    nav,
                    section {
                        display: block;
                    }

                    nav {
                        display: inline-block;
                        margin: 120px auto 100px;
                        background-color: rgba(0, 0, 0,0.4);
                        box-shadow: 0 1px 1px #ccc;
                        border-radius: 2px;
                        margin: 0 auto;
                    }

                    nav a {
                        display: inline-block;
                        padding: 18px 20px;
                        color: #fff !important;
                        font-weight: bold;
                        font-size: 10px;
                        text-decoration: none !important;
                        line-height: 1;
                        text-transform: uppercase;
                        background-color: transparent;
                        text-align: center;
                        margin: 0 auto;
                        -webkit-transition: background-color 0.25s;
                        -moz-transition: background-color 0.25s;
                        transition: background-color 0.25s;
                    }

                    nav a:first-child {
                        border-radius: 2px 0 0 2px;
                    }

                    nav a:last-child {
                        border-radius: 0 2px 2px 0;
                    }

                    p {
                        font-size: 18px;
                        font-weight: bold;
                        color: #7d9098;
                    }

                    p b {
                        color: #ffffff;
                        display: inline-block;
                        padding: 5px 10px;
                        background-color: #c4d7e0;
                        border-radius: 2px;
                        text-transform: uppercase;
                        font-size: 15px;
                    }
                    .resource {
                        margin: 20px 0;
                    }
                </style>