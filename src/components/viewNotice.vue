<template>
 <div class="container">
<h1 style="text-align: center; font-size: 3em; margin-bottom:">공지 사항 </h1>
		<hr style="margin-bottom: 40px;">
		
		<div class="panel panel-info" style="background-color: rgba( 255, 255, 255,0.8 ); height: 800px; ">
			<div class="panel-heading">
				<strong>{{notice.ntitle }}</strong>
			</div>
      <hr>
			<div class="panel-body" style="height:650px; font-size:40px;">
				{{notice.ncontent }}
			</div>
			<div class="panel-footer text-right">
				<button class="btn btn-info btn-flat" @click="edit()">수정</button>
        <button class="btn btn-danger btn-fla" @click="remove()">삭제</button>
        <button class="btn btn-primary btn-flatt" @click="backtolist()">목록</button>
			</div>
		</div>
		
		
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