<template>

		<section class="container">
		<div class='row my-2 bg-light border-bottom'>
			<div class='col-8'>
				<small>${qna.q_title }</small>
			</div>
			<div class='col-2'>
				<small>${qna.u_id }</small>
			</div>
			<div class='col-2 text-right'>
				<small>${qna.q_date }</small>
			</div>
		</div>

		<div class='mx-3' id='noticeContent'>${qna.q_desc }</div>

		<div>
			<div class='text-right my-2'>
				<a href="qnaForm.do" class="btn-sm btn-info">목록으로</a> <input
					type="hidden" id="deleteBtn" value="${qna.q_num }">
				<!-- <c:if test="${sessionScope.loginId == qna.u_id }">
					<a href="qnaModForm.do?q_num=${qna.q_num }"
						class="btn-sm btn-info">글수정</a>
					<a onclick="deleteclick()" class="btn-sm btn-danger">글삭제</a>
				</c:if> -->
			</div>
		</div>

		<section class='bg-light p-2'>
			<div>
				<small>댓글 (${fn:length(q_comments) }) </small>
			</div>
			<!-- <c:forEach var="comment" items="${q_comments }">
				<div class='my-1 border-top'>

					<div class='row'>
						<div class='col-10 mt-2'>${comment.u_id }</div>
						<c:if test="${sessionScope.loginId == comment.u_id }">
							<div class='col-2 text-right'>
								<a
									href="qcommentRemove.do?c_num=${comment.c_num }&q_num=${qna.q_num }"
									class="text-right text-dark">x</a>
							</div>
						</c:if>

					</div>

					<div class='row mb-2'>
						<div class='col-10'>
							<small>${comment.c_desc }</small>
						</div>
						<div class='col-2 text-right'>
							<small>${comment.c_date }</small>
						</div>
					</div>
				</div>
			</c:forEach> -->
			<!-- <c:choose>
				<c:when test="${sessionScope.loginId eq null }">
					<div>
						<div class="input-group mb-3 my-1">
							<input name="c_desc" type="text" readonly="readonly"
								class="form-control" placeholder="로그인하세요"
								aria-label="Recipient's username"
								aria-describedby="button-addon2">
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" id="button-addon2">작성</button>
							</div>
						</div>

					</div>
				</c:when> -->

				<!-- <c:otherwise>
					<div>
						<form action="qcommentAdd.do">
							<input type="hidden" name="u_id" value="${sessionScope.loginId }">
							<input type="hidden" name="q_num" value="${qna.q_num }">
							<div class="input-group mb-3 my-1">
								<input name="c_desc" type="text" class="form-control"
									placeholder="댓글을 작성하세요" aria-label="Recipient's username"
									aria-describedby="button-addon2">
								<div class="input-group-append">
									<button class="btn btn-info" type="submit" id="button-addon2">작성</button>
								</div>
							</div>
						</form>
					</div>
				</c:otherwise>
			</c:choose> -->

		</section>
	</section>

</template>

<script>
import http from "../http-common";

export default {
	name: "qnadetail",
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
			user_id: localStorage.getItem("id")
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

  }
}
</script>

