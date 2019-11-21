<template>
 <div class="container">
<h1 style="text-align: center; font-size: 3em; margin-bottom:">공지 사항 </h1>
		<hr style="margin-bottom: 40px;">
		
		<div class="panel panel-info">
			<div class="panel-heading">
				<strong>{{notice.ntitle }}</strong>
				<!-- <input type="hidden" name="user_id" value="${currentId }"/> -->
				<!-- <input type="hidden" name="bid" value="{{board.bid }}" />
				<input type="hidden" name="btitle" value="{{board.btitle }}" /> -->
			</div>
			<div class="panel-body">
				{{notice.ncontent }}
				<!-- <input type="hidden" name="bcontent" value="{{board.bcontent }}" /> -->
			</div>
			<div class="panel-footer text-right">
				<button class="btn btn-info btn-flat" @click="edit()">수정</button>
        <button class="btn btn-danger btn-fla" @click="remove()">삭제</button>
        <button class="btn btn-primary btn-flatt" @click="backtolist()">목록</button>
			</div>
		</div>
		
		<footer style="background: #ECECEC; padding: 50px;">
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
  name: "viewNotice",
  data() {
    return {
      upHere: false,
      notice: [],
      loading: true,
      errored: false
    };
  },
  methods: {
	showlist() {      
			this.$router.push("/listNotice");
    },
    viewNotices() {
      http
        .get("http://localhost:8090/api/infonotice/"+App.bid)
        .then(response => {
            this.notice = response.data.resvalue;

			})
        .catch(() => {
			alert("fail");
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    edit(){
		this.$router.push("/updateNotice");

    },
    remove(){    
      alert(App.bid + "번 공지사항을 삭제합니다.");
      http
        .delete("/deletenotice/" + App.bid)
        .then(response => {
          if (response.data.state == "succ") {
			alert("공지사항 삭제를 하였습니다.");
			this.$router.push("/listNotice");
            // this.retrieveCustomers();
          } else {
			alert("공지사항 삭제를 하였습니다.");
			this.$router.push("/listNotice");
          }
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    
      },
    backtolist(){
		this.showlist();
    }
  },
  filters: {
  },
  mounted() {
    this.viewNotices();
  }
};
</script>
<style>
</style>