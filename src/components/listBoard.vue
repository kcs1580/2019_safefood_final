<template>
    <div class="container">
        <h2 class="text-center my-4">Q n A</h2>
        <hr style="margin-bottom: 40px;">

<div id="my_form"
			class="form-inline justify-content-center search-form rounded"
			method="post" action="qnaSearch.do?page=1">
			<div class="form-group mb-2">
				<select class="form-control" name='searchOpt' id="search-option">
					<option value="q_title">제목</option>
					<option value="u_id">작성자</option>
				</select>
			</div>

			<div class="form-group mx-sm-3 mb-2">
				<input type="text" class="form-control" id="name" name='searchText'
					placeholder="키워드">
			</div>
			<div class="btn btn-info mb-2">검색</div>
		</div>

            <div class="panel panel-default">
               
                <div class="panel-body">
                    <table class='table table-sm table-hover text-center my-1'>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tr v-for="board in list" :key="board.bid">
                            <td v-html="board.bid"></td>
                            <td v-html="board.btitle" @click="show_detail(board.bid)"></td>
                            <td v-html="board.user_id"></td>
                            <td v-html="board.bcount"></td>

                        </tr>

                    </table>
                    <div class="row">
                        <div class="col-sm-12 text-right">
                            <a href="" @click="showinsert()" class="btn btn-info btn-flat">글쓰기</a>

                        </div>
                    </div>
                </div>
            </div>

<<<<<<< HEAD
        </div>
    </template>
=======
<script>
import http from "../http-common";
import App from "../App.vue";
export default {
  name: "board-list",
  data() {
    return {
      upHere: false,
      list: [],
      loading: true,
      errored: false
    };
  },
  methods: {
    showinsert() {      
			this.$router.push("/insertboard");
    },
    retrieveBoards() {
      http
        .get("/listboard")
        .then(response => (this.list = response.data['resvalue']))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    refreshList() {
      this.retrieveBoards();
    },
    show_detail: function(bid) {
      App.bid = bid;
    this.$router.push(  {name: 'viewBoard', params:{bid: App.bid}});
    }
  },
  filters: {
>>>>>>> c46024105aa07fdd0dc820391c855ed78827c285

    <script>
        import http from "../http-common";
        import App from "../App.vue";
        export default {
            name: "board-list",
            data() {
                return {upHere: false, list: [], loading: true, errored: false};
            },
            methods: {
                showinsert() {
                    this
                        .$router
                        .push("/insertboard");
                },
                retrieveBoards() {
                    http
                        .get("/listboard")
                        .then(response => (this.list = response.data['resvalue']))
                        .catch(() => {
                            this.errored = true;
                        })
                        . finally(() => (this.loading = false));
                },
                refreshList() {
                    this.retrieveBoards();
                },
                show_detail: function (bid) {
                    //alert(bid + " 클릭했음");
                    App.bid = bid;
                    // App.$router.push( { path: 'viewboard' }); 아래를 수정했다.
                    // App.$router.push('/viewboard'); App.$router.push( {path:'viewboard'});
                    // this.$router.push("/board-view/:App.bid" +  App.bid);
                    this
                        .$router
                        .push({
                            name: 'viewBoard',
                            params: {
                                bid: App.bid
                            }
                        });
                }
            },
            filters: {},
            mounted() {
                this.retrieveBoards();
            }
        };
    </script>

    <style></style>