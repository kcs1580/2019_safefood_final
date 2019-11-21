<template>
 <div class="container">
<h1 style="text-align: center; font-size: 3em; margin-bottom:">질문 게시판</h1>
		<hr style="margin-bottom: 40px;">
		
		<div class="panel panel-info">
			<div class="panel-heading">
				<strong>{{board.btitle }}</strong>
				<!-- <input type="hidden" name="user_id" value="${currentId }"/> -->
				<!-- <input type="hidden" name="bid" value="{{board.bid }}" />
				<input type="hidden" name="btitle" value="{{board.btitle }}" /> -->
			</div>
			<div class="panel-body">
				{{board.bcontent }}
				<!-- <input type="hidden" name="bcontent" value="{{board.bcontent }}" /> -->
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
  name: "viewBoard",
  data() {
    return {
      upHere: false,
      board: [],
      loading: true,
      errored: false
    };
  },
  methods: {
	showlist() {      
			this.$router.push("/listBoard");
    },
    viewBoards() {
      http
        .get("http://localhost:8090/api/infoboard/"+App.bid)
        .then(response => {
			this.board = response.data.resvalue;
			})
        .catch(() => {
			alert("fail");
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    edit(){
		this.$router.push("/UpdateBoard");

    },
    remove(){    
      alert(App.bid + "번 게시물 삭제합니다.");
      http
        .delete("/deleteboard/" + App.bid+"/orora@com")
        .then(response => {
          if (response.data.state == "succ") {
			alert("게시글 삭제를 하였습니다.");
			this.$router.push("/listBoard");
            // this.retrieveCustomers();
          } else {
			alert("게시글 삭제를 하였습니다.");
			this.$router.push("/listBoard");
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
    this.viewBoards();
  }
};
</script>
<style>
</style>