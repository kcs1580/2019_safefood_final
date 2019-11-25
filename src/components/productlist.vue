<template>
    <div class="container">
        <div>
            <div class="col-xs-12" style="text-align: right; margin-bottom: 15px;">

                <input type="hidden"/>
                <div class="form-group">
                    <select v-model="selected" class="form-control" placeholder="선택">
                        <option value="name">상품명</option>
                        <option value="maker">제조사</option>
                        <option value="material">재료명</option>
                    </select>

                </div>
                <div class="form-group">
                    <input
                        type="text"
                        name="keyword"
                        v-model="keyword"
                        class="form-control"
                        placeholder="검색어를 입력하세요." @keyup.enter= "searchfood"></div>
                    <div @click="searchfood()" class="btn btn-info btn-flat">검색</div>

                </div>

            </div>

            <div class="panel panel productPanel">
                <!-- <div class="panel-body"> -->

                    <span v-for="item in list" class="row productRow" :key="item.code">
                         <span style="float: left">
                        <input type="hidden" name="code" value="item.code"/>
                        
                            <div class="thumbnail" style="border:none;">
                                <div class="overlay">
                                    <p class="text">{{item.name}}</p>
                                </div>
                                <img :src="require('../' + item.img)" alt="item.name" width="300">
                                    <div class="caption" style="opacity:1;">
                                    <a class="btn btn-lg btn-block btn-primary" @click="fooddetail(item.code)">상품 정보로 이동 &nbsp;
                                        {{item.code}}</a>
                                    </div>
                              
                            </div>
                            <div style="width300px"></div>
                         </span>

                        </span>
                        <div  style="height:1000px; background-color: rgba( 255, 255, 255,0.5 );"></div>
                    </div>
                <!-- </div> -->

            </div>

        </template>

        <script>
            import http from "../http-common";
            import App from "../App.vue";
            export default {
                name: "productlist",
                data() {
                    return {
                        upHere: false,
                        list: [],
                        loading: true,
                        errored: false,
                        keyword: '',
                        selected: ''
                    };
                },
                methods: {
                    searchfood() {
                        
                        http
                            .get("/searchFoodByKeyword/" + this.selected + "/" + this.keyword)
                            
                            .then(response => (this.list = response.data['list']))
                            .catch(() => {
                                this.errored = true;
                            })
                            . finally(() => (this.loading = false));

                    },

                    fooddetail: function (code) {
                        App.code = code;
                        this
                            .$router
                            .push({
                                name: 'productdetail',
                                params: {
                                    code: App.code
                                }
                            });
                    }
                },
                filters: {},
                mounted() {

                    http
                        .get("/listfood")
                        .then(response => (this.list = response.data['list']))
                        .catch(() => {
                            this.errored = true;
                        })
                        . finally(() => (this.loading = false));
                }
            };
        </script>
        <style></style>