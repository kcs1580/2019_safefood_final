<template>
 <div class="container">
	<h1 style="text-align: center; font-size: 3em; margin-bottom:">공지사항</h1>
		<hr style="margin-bottom: 40px;">

		<div class="panel panel-default">
			<div class="panel-body">
				<table class="table text-center table-bordered table-hover">
					<thead>
						<tr>
							<th>번호</th>
							<th>제목</th>
							<th>조회수</th>
						</tr>
					</thead>
           <tr v-for="notice in list" class="#" :key="notice.nid">
            <td v-html="notice.nid" ></td>
            <td v-html="notice.ntitle" @click="show_detail(notice.nid)"></td>
            <td v-html="notice.ncount"></td>
      
        </tr>
				
				</table>
				<div class="row">
					<div class="col-sm-12 text-right">
						<a href="" @click="showinsert()" class="btn btn-info btn-flat">글쓰기</a>
            
					</div>
				</div>
			</div>
		</div>
		<footer style="background: #ececec; padding: 50px;">
		<h1>Find Us</h1>
		<hr>
		<p>
			<i class="glyphicon glyphicon-envelope"></i> (SSAFY) 서울시 강남구 테헤란로
			멀티스퀘어
		</p>
		<p>
			<i class="glyphicon glyphicon-envelope"></i> 1544-9001
		</p>
		<p>
			<i class="glyphicon glyphicon-envelope"></i> admin@ssafy.com
		</p>
	</footer>
</div>
</template>

<script>
import http from "../http-common";
import App from "../App.vue";
export default {
  name: "notice-list",
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
			this.$router.push("/insertnotice");
    },
    retrieveBoards() {
      http
        .get("/listnotice")
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

    this.$router.push(  {name: 'viewNotice', params:{bid: App.bid}});
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
