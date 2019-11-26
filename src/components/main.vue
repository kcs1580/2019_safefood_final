<template class="a">
    <div class="container">
        <div class="im">
        <transition-group
            name="fade"
            v-on:after-enter="fadeNext"
            tag="div"
            class="text-center">
                <img v-show="fade[0]" key="0" class="im" src="../../public/food.jpg">
                <img v-show="fade[1]" key="1" class="im" src="../../public/food2.jpg">
                <img v-show="fade[2]" key="2" class="im" src="../../public/food3.jpg">
                <img v-show="fade[3]" key="3" class="im" src="../../public/food4.jpg">
                <img v-show="fade[4]" key="0" class="im" src="../../public/food.jpg">

                </transition-group>
        </div>
                    <!-- <img src="../../public/food.jpg" id="bg" alt=""> -->
                    <nav class="navbar">
                        <a class="nav_btn1" href="http://localhost:8090">홈으로</a>
                        <router-link class="nav_btn1" to="/listNotice">공지사항</router-link>
                        |
                        <router-link class="nav_btn1" to="/productlist">상품정보</router-link>
                        |
                        <router-link class="nav_btn1" to="/mytakeinfo">섭취정보</router-link>
                        |
                        <router-link class="nav_btn1" to="/listBoard">질문게시판</router-link>
                        |
                        <router-link class="nav_btn1" to="/signuppage">회원가입</router-link>
                        |
                        <button @click="modal_recommend " type="button">오늘 뭐먹징?</button>

                    </nav> 
                     
                    
                    <div
                        v-show="is_show"
                        style="background:white; opacity:0.9; height:auto; width:auto; float:right">
                        <!-- <img :src="require('../' + recommend.img)" width="200"> 이거 임시로 주석! -->
                        <table class="table table-hover">
                            <tr>
                                <th>제품명</th>
                                <td id="name" v-html="recommend.name"></td>
                            </tr>
                            <tr>
                                <th>제조사</th>
                                <td id="maker" v-html="recommend.maker"></td>
                            </tr>
                            <!-- <tr> <th>원재료</th> <td> <p id="material" v-html="recommend.material"></p>
                            </td> </tr> -->
                        </table>
                        <div>
                            <button @click="modalbtn" type="button">닫기</button>
                        </div>

                        
                    </div>
                    <router-link class="nav_btn" to="/banner">공지사항</router-link> |
                                    <router-view/>

                </div>

            </template>
            <script>
                import axios from 'axios'
                let fadeIdx = 0
                export default {
                    name: 'App',

                    data: () => { // #1
                        return {
                            loading: false,
                            is_show: false,
                            recommend: [],
                            fade: [false, false, false,false,false]
                        }
                    },
                    methods: {
                        fadeNext: function () {
                            this
                                .fade
                                .splice(fadeIdx++, 1, true)
                        },
                        modalbtn: function () {
                        this.is_show = !this.is_show; // #2, #3

                    },
                    modal_recommend: function () {
                        axios
                            .get("http://localhost:8090/api/recommendFood")
                            .then(response => {
                                this.recommend = response.data.recommend;
                                //alert(this.recommend.img);
                                this.is_show = true;
                            })
                            .catch(() => {
                                this.errored = true
                            })
                            . finally(() => this.loading = false)
                    },
                    init: function () {
                        axios
                            .get("http://localhost:8090/api/recommendFood")
                            .then(response => {
                                this.recommend = response.data.recommend;
                                this.is_show = false;
                            })
                            .catch(() => {
                                this.errored = true
                            })
                            . finally(() => this.loading = false)
                    },
                    show_banner: function(){
                        this.$router.push("/banner");
                    }
                },
                mounted() {
                    setTimeout(this.fadeNext, 0.1);
                    this.init();
                }
            }
            </script>
            <style>
                /* 배경화면 조정하는 css #bg랑 body, html */
                #bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    opacity: 1;
                    /* Preserve aspet ratio */
                    min-width: 100%;
                    min-height: 100%;
                }
                .im{
                    position: fixed;
                    top: 0;
                    left: 20;
                      min-width: 100%;
                    min-height: 100%;
                }

                /* body,
                html {
                    margin: 0;
                    padding: 0;
                    height: 80%;
                } */

                .nav_btn1 {
                    color: white;
                    font-size: 30px;
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
                .modal-mask {
                    position: fixed;
                    z-index: 9998;
                    top: 0;
                    left: 300;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, .5);
                    display: table;
                    transition: opacity 0.3s ease;
                }

                .modal-wrapper {
                    display: table-cell;
                    vertical-align: middle;
                }

                .modal-container {
                    width: 300px;
                    margin: 0 auto;
                    padding: 20px 30px;
                    background-color: #fff;
                    border-radius: 2px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
                    transition: all 0.3s ease;
                    font-family: Helvetica, Arial, sans-serif;
                }

                #appp {
                    font-family: "Avenir", Helvetica, Arial, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-align: center;
                    color: #2c3e50;
                    margin: 0;
                    width: 100px;
                    height: 100px;
                    box-sizing: border-box;
                    background-color: rgba(0, 0, 0, 0.3);
                    position: absolute;
                    top: 200px;
                    left: 500px;
                }

                .fade-enter {
                    opacity: 0;
                }

                .fade-enter-active {
                    transition: opacity 3.0s;
                }
            </style>