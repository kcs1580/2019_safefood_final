<template>
	<div class="container">
<div>
	<section class="container">
		<h3 class="text-center my-4">Q n A</h3>

		<form id="my_form"
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
			<button type="submit" class="btn btn-info mb-2">검색</button>
		</form>


		<table class='table table-sm table-hover text-center my-1'>
			<thead>
				<tr>
					<th>글번호</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일</th>

				</tr>
			</thead>
			<tbody>
				<!-- <c:forEach var="qna" items="${qnas }" varStatus="status">
					<tr>
						<td>${qna.q_num }</td>
						<td><a href='qnaDetail.do?q_num=${qna.q_num}'><span
								class='text-dark'>${qna.q_title }</span>
								(${q_comments[status.index] })</a></td>
						<td>${qna.u_id }</td>
						<td>${qna.q_date }</td>
					</tr>
				</c:forEach> -->
			</tbody>
		</table>
		<div class="mt-3">
			<nav aria-label="Page navigation">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<!-- <c:choose>
							<c:when test="${searchFlag eq 'q_title' }">
								<a class="page-link" href="qnaSearch.do?searchOpt=q_title&searchText=${searchText }&page=1" tabindex="-1">처음</a>
							</c:when>
							<c:when test="${searchFlag eq 'u_id'}">
								<a class="page-link" href="qnaSearch.do?searchOpt=u_id&searchText=${searchText }&page=1">처음</a>
							</c:when>
							<c:otherwise>
								<a class="page-link" href="qnaForm.do?page=1" tabindex="-1">처음</a>
							</c:otherwise>
						</c:choose> -->
					</li>
					<!-- <c:choose>
						<c:when test="${thisPage eq 1 }">
							<li class="page-item disabled"><a class="page-link" href="#"
								tabindex="-1" aria-disabled="true">이전</a></li>
						</c:when>
						<c:otherwise>
							<c:choose>
								<c:when test="${searchFlag eq 'q_title' }">
									<a class="page-link" href="qnaSearch.do?searchOpt=q_title&searchText=${searchText }&page=${thisPage -1}" tabindex="-1">이전</a>
								</c:when>
								<c:when test="${searchFlag eq 'u_id'}">
									<a class="page-link" href="qnaSearch.do?searchOpt='u_id'&searchText=${searchText }&page=${thisPage -1}">이전</a>
								</c:when>
								<c:otherwise>
									<a class="page-link" href="qnaForm.do?page=${thisPage -1}" tabindex="-1">이전</a>
								</c:otherwise>
							</c:choose>
						</c:otherwise>
					</c:choose> -->
<!-- 
					<c:set var="startPage" value="${thisPage }" />
					<c:if test="${thisPage > 3}">
						<c:set var="startPage" value="${thisPage-2 }" />
					</c:if>

					<c:set var="endPage" value="${thisPage+2 }" />
					<c:if test="${thisPage < 4 }">
						<c:set var="startPage" value="1" />
						<c:set var="endPage" value="${thisPage + (6-thisPage) }" />
					</c:if>
					<c:if test="${endPage > totalPage }">
						<c:set var="endPage" value="${totalPage }"/>
					</c:if> -->


					<!-- <c:forEach var="page" begin="${startPage }" end="${endPage }">
						<c:choose>
							<c:when test="${thisPage eq page }">
								<li class="page-item active" aria-current="page"><span
									class="page-link"> ${page } <span class="sr-only">(current)</span>
								</span></li>
							</c:when>
							<c:otherwise>
								<c:choose>
									<c:when test="${searchFlag eq 'q_title' }">
										<li>
											<a class="page-link" href="qnaSearch.do?searchOpt=q_title&searchText=${searchText }&page=${page}" tabindex="-1">${page }</a>
										</li>
									</c:when>
									<c:when test="${searchFlag eq 'u_id'}">
										<li>
											<a class="page-link" href="qnaSearch.do?searchOpt=u_id&searchText=${searchText }&page=${page}">${page }</a>
										</li>
									</c:when>
									<c:otherwise>
										<li>
											<a class="page-link" href="qnaForm.do?page=${page}" tabindex="-1">${page }</a>
										</li>
									</c:otherwise>
								</c:choose>
							</c:otherwise>
						</c:choose>
					</c:forEach> -->
				</ul>
			</nav>
		</div>
	</section>


 </div> 

</div>

</template>

<script>
import http from "../http-common";

export default {
	name: "qnaform",
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

