<template class="a">
	<div class="container" >

  <img src="../../public/food.jpg" id="bg" alt="">
  <nav class="navbar">
    <a class="btn btn-primary" href="http://localhost:8090">홈으로</a>     		
      <router-link class="btn btn-primary" to="/insertboard">공지사항</router-link> |
      <router-link class="btn btn-primary" to="/insertboard">상품</router-link> |
      <router-link class="btn btn-primary" to="/insertboard">상품정보</router-link> |
      <router-link class="btn btn-primary" to="/listBoard">질문게시판</router-link> |
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



</style>
