
<template>
	<div class="container">
<div>
<!-- <div v-if="!submitted">	 -->

	<h1 style="text-align: center; font-size: 3em; margin-bottom:">질문
			게시판</h1>
		<hr style="margin-bottom: 40px;">

		<div class="panel panel-default">
			<div class="panel-body">
				<form action="" method="post" id="_brdFrom" name = "brdForm" @submit.prevent="insertBoard">
					<input type="hidden" name="user_id" value="orora@com" />

					<div class="form-group">
						<label for="title">제목</label>
						<input data-msg="제목" type = "text" name="btitle" id="btitle" v-model="ctitle" class="form-control" placeholder="제목을 입력해주세요." style="width:100%" >
					</div>
					<div class="form-group">
						<label for="bcontent">내용</label>
						<input data-msg="내용"  type="text" name="bcontent" id="bcontent" v-model="ccontent"  class="form-control"  style="height:500px; width:100%" placeholder="내용을 입력해주세요." >
					</div>
					
					<div class="row">
						<div class="col-sm-12 text-right">
							<button type="submit" class="btn btn-info btn-flat">글쓰기</button>
						</div>
					</div>
				</form>
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
<!-- </div> -->


<!-- 
<div v-else>
      <h4>성공적으로 질문등록을 완료하였습니다!</h4>
      <button class="btn btn-success" v-on:click="newBoard">새로운 질문 등록하기</button>
    </div> -->
 </div> 

</div>

</template>

<script>
import http from "../http-common";

export default {
	name: "InsertBoard",
	data() {
		return {
			
			loading: true,
			errored: false,			
			ctitle:'',
			ccontent:'',
			ccount:0,
			cid:'',
			cuser_id:'orora@com',
			submitted: false


		};
	},
		mounted () {
	// http
	// 	.get('/findAllEmployees')
	// 	.then(response => (this.info = response.data))
	// 	.catch(() => {
	// 		this.errored = true
	// 	})
	// 	.finally(() => this.loading = false);
	// http
	// 	.get('/findAllDepartments')
	// 	.then(response => (this.deps = response.data))
	// 	.catch(() => {
	// 		this.errored = true
	// 	})
	// 	.finally(() => this.loading = false);
	// http
	// 	.get('/findAllTitles')
	// 	.then(response => (this.titls = response.data))
	// 	.catch(() => {
	// 		this.errored = true
	// 	})
	//	.finally(() => this.loading = false);
	},

	methods: {
		showlist() {      
			this.$router.push("/listBoard");
    },
	insertBoard() {
		if(this.ctitle==''){ alert('제목을 입력하세요.'); return ;}
		if(this.ccontent==''){ alert('내용을 입력하세요.'); return ;}
		
		
		http.post('/registerboard', {
			bid: this.cid,
			btitle: this.ctitle,
			bcontent: this.ccontent,
			bcount: this.bcount,
			user_id: this.cuser_id,


		} 
		).then(response => {
				if (response.data.state==0) {
					alert("질문등록 완료.");
						this.showlist();
				}else{
					alert("질문등록 성공.");
						this.showlist();
				}
		});
		this.submitted = true;
	},
	// newBoard() {
	// 	this.submitted=false,		
	// 	this.loading=true,
	// 	this.errored=false,
	// 	this.cid='',			
	// 	this.ctitle='',
	// 	this.ccontent='',
	// 	this.ccount=0,
	// 	this.cuser_id='asdf@asdf'
	// }
		
  }
}
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>