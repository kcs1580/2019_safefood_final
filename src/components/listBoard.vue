<template>
 <div class="container">
	<h1 style="text-align: center; font-size: 3em; margin-bottom:">질문 게시판</h1>
		<hr style="margin-bottom: 40px;">
		<div class="panel panel-default" >
			<div class="panel-body" style="background-color: rgba( 255, 255, 255,0.5 );">
				<table class="table text-center table-bordered table-hover">
					<thead>
						<tr style="background:#b6b9bb;">
							<th>번호</th>
							<th>제목</th>
							<th>작성자</th>
							<th>조회수</th>
						</tr>
					</thead>
           <tr v-for="board in list" class="#" :key="board.bid">
            <td v-html="board.bid" ></td>
            <td v-html="board.btitle" @click="show_detail(board.bid)"></td>
            <td v-html="board.user_id"></td>
            <td v-html="board.bcount"></td>
        </tr>
				</table>
				<div class="row">
					<div class="col-sm-12 text-right">
						<a href="" @click="showinsert()"  class="btn btn-secondary">글쓰기</a>
            
					</div>
				</div>
			</div>
		</div>

</div>
</template>

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

  },
  mounted() {
    this.retrieveBoards();
  }
};
</script>

<style>
</style>
