<template>
<div id="app">
  <nav class="navbar">
    <a class="btn btn-primary" href="http://localhost:8090">홈으로</a>     		
      <router-link class="btn btn-primary" to="/listNotice">공지사항</router-link> |
      <router-link class="btn btn-primary" to="/insertboard">상품</router-link> |
      <router-link class="btn btn-primary" to="/insertboard">상품정보</router-link> |
      <router-link class="btn btn-primary" to="/listBoard">질문게시판</router-link> |
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
.navbar-navbar{
    /* border-width: 0px;
    -webkit-box-shadow: 0px 0px;
    box-shadow: 0px 0px;
    background-color: rgba(0,0,0,0.0);
    background-image: -webkit-gradient(linear, 50.00% 0.00%, 50.00% 100.00%, color-stop( 0% , rgba(0,0,0,0.00)),color-stop( 100% , rgba(0,0,0,0.00)));
    background-image: -webkit-linear-gradient(270deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%);
    background-image: linear-gradient(180deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%);
 */
          opacity: 1;

}
</style>