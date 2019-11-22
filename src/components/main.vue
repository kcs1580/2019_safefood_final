<template class="a">
    <div class="container">
        <img src="../../public/food.jpg" id="bg" alt="">
            <nav class="navbar">

                <a class="nav_btn1" href="http://localhost:8090">홈으로</a>
                <router-link class="nav_btn1" to="/listNotice">공지사항</router-link>
                |
                <router-link class="nav_btn1" to="/insertboard">상품정보</router-link>
                |
                <router-link class="nav_btn1" to="/listBoard">질문게시판</router-link>
                |
                <router-link class="nav_btn1" to="/signuppage">회원가입</router-link>
                |
                <button @click="modal_recommend" type="button">오늘 뭐먹징?</button>

                <!-- #2 : Modal Window -->
                
                </nav>
                <div v-show="is_show" style="background:white; opacity:0.9; height:auto; width:auto; float:right">
                    <img :src="require('../' + recommend.img)" width="200">
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
            </div>

        </template>
        <script>
            import axios from 'axios'

            export default {
                name: 'App',
                data: () => { // #1
                    return {loading: false, is_show: false, recommend: []}
                },
                methods: {
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
                                this.is_show=false;
                            })
                            .catch(() => {
                                this.errored = true
                            })
                            . finally(() => this.loading = false)
                    }
                },
                mounted() {
                    this.init();
                },

        
            }
        </script>
        <style>
            /* 배경화면 조정하는 css #bg랑 body, html */
            #bg {
                position: fixed;
                top: 0;
                left: 0;

                /* Preserve aspet ratio */
                min-width: 100%;
                min-height: 100%;
            }
            body,
            html {
                margin: 0;
                padding: 0;
                height: 100%;
            }

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

      
        </style>