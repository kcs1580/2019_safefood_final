<template>
<div id="app">
<!-- <div class='headtitle'><h2>| Safe Food |</h2></div> -->
<div class='search_box'>
 <nav class="navbar navbar-inverse navbar-fixed-top">
 <a class="btn btn-primary" href="http://localhost:8090">홈으로</a>     		
         <router-link class="btn btn-primary" to="/insertboard">공지사항</router-link> |
          <router-link class="btn btn-primary" to="/insertboard">상품</router-link> |
          <router-link class="btn btn-primary" to="/insertboard">상품정보</router-link> |
        <router-link class="btn btn-primary" to="/listBoard">질문게시판</router-link> |
 </nav>
</div>
        <router-view/>
</div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style>

</style>