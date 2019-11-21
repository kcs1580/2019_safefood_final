
<template>
	<div class="container">
<div>

	<h1 style="text-align: center; font-size: 3em; margin-bottom:">공지사항</h1>
		<hr style="margin-bottom: 40px;">

		<div class="panel panel-default">
			<div class="panel-body">
				<form action="" method="post" id="_brdFrom" name = "brdForm" @submit.prevent="insertNotice">
					<input type="hidden" name="user_id" value="orora@com" />

					<div class="form-group">
						<label for="title">제목</label>
						<input data-msg="제목" type = "text" name="ntitle" id="ntitle" v-model="ctitle" class="form-control" placeholder="제목을 입력해주세요." style="width:100%" >
					</div>
					<div class="form-group">
						<label for="bcontent">내용</label>
						<input data-msg="내용"  type="text" name="ncontent" id="ncontent" v-model="ccontent" class="form-control"  style="height:500px; width:100%" placeholder="내용을 입력해주세요." >
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

 </div> 

</div>

</template>

<script>
import http from "../http-common";

export default {
	name: "InsertNotice",
	data() {
		return {
			
			loading: true,
			errored: false,			
			ctitle:'',
			ccontent:'',
			ccount:0,
			cid:'',			
			submitted: false


		};
	},
		mounted () {

	},

	methods: {
		showlist() {      
			this.$router.push("/listNotice");
    },
	insertNotice() {
		if(this.ctitle==''){ alert('제목을 입력하세요.'); return ;}
		if(this.ccontent==''){ alert('내용을 입력하세요.'); return ;}
		
		
		http.post('/registernotice', {
			nid: this.cid,
			ntitle: this.ctitle,
			ncontent: this.ccontent,
			ncount: this.ccount

		} 
		).then(response => {
				if (response.data.state==0) {
					alert("질문등록 완료zz.");
						this.showlist();
				}else{
					alert("질문등록 성공zz.");
						this.showlist();
				}
		});
		this.submitted = true;
	},

		
  }
}
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>