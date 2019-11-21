<template>
<div id="app">
  <nav class="navbar">
 <a class="nav_btn" href="http://localhost:8090">홈으로</a>     		
        <router-link class="nav_btn" to="/insertboard">공지사항</router-link> |
        <router-link class="nav_btn" to="/insertboard">상품</router-link> |
        <router-link class="nav_btn" to="/insertboard">상품정보</router-link> |
        <router-link class="nav_btn" to="/listBoard">질문게시판</router-link> |
       <router-link class="nav_btn" to="/signuppage">회원가입</router-link> |
         
 </nav>
        <router-view/>
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

@font-face {
	font-family: 'BMHANNAAir';
	src:
		url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff')
		format('woff');
	font-weight: normal;
	font-style: normal;
}

html * {
	font-family: 'BMHANNAAir';
}

.nav_btn{
  color: black;
  font-size: 30px;
}


</style>