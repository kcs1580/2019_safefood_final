<template>
<div id="app">
  <nav class="navbar">

    <a class="nav_btn" href="http://localhost:8090">홈으로</a>
	<router-link class="nav_btn" to="/listNotice">공지사항</router-link>
	<router-link class="nav_btn" to="/insertboard">상품</router-link>
	<router-link class="nav_btn" to="/productlist">상품정보</router-link>
	<router-link class="nav_btn" to="/mytakeinfo">섭취정보</router-link>
	<router-link class="nav_btn" to="/listBoard">질문게시판</router-link>
	<router-link class="nav_btn" to="/signuppage">회원가입</router-link> |


 </nav>
 
        <router-view/>
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
export default {
  name: "app"
};
</script>
<style>
#app{
  background-image: url("../public/bg.jpg");
}

/* @font-face {
	font-family: 'BMHANNAAir';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
} */

@font-face { font-family: 'BBTreeGL'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGL.woff') format('woff'); font-weight: normal; font-style: normal; }
html * {
  font-family: 'BBTreeGL';
}

.nav_btn{
  color: black;
  font-size: 30px;
}


</style>