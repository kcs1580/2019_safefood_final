<template class="a">
	<div class="container" >

  <img src="../../public/food.jpg" id="bg" alt="">
  <nav class="navbar">
 <a class="nav_btn" href="http://localhost:8090">홈으로</a>     		
        <router-link class="nav_btn" to="/insertboard">공지사항</router-link> |
        <router-link class="nav_btn" to="/insertboard">상품</router-link> |
        <router-link class="nav_btn" to="/insertboard">상품정보</router-link> |
        <router-link class="nav_btn" to="/listBoard">질문게시판</router-link> |
 </nav>
  </div>

</template>

<style>
/* 배경화면 조정하는 css #bg랑 body, html */
#bg {  
  position: fixed; 
  top: 0; 
  left: 0; 
    
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
body, html { 
    margin: 0;
    padding: 0;
    height: 100%;
}

.nav_btn{
  color: aliceblue;
  font-size: 30px;
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

</style>
