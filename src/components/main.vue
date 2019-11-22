<template class="a">
	<div class="container" >
  <img src="../../public/food.jpg" id="bg" alt="">
  <nav class="navbar">

        <a class="nav_btn1" href="http://localhost:8090">홈으로</a>     		
        <router-link class="nav_btn1" to="/listNotice">공지사항</router-link> |
        <router-link class="nav_btn1" to="/insertboard">상품</router-link> |
        <router-link class="nav_btn1" to="/insertboard">상품정보</router-link> |
        <router-link class="nav_btn1" to="/listBoard">질문게시판</router-link> |
        <router-link class="nav_btn1" to="/signuppage">회원가입</router-link> |
        <button @click="handle_toggle" type="button">오늘 뭐먹징?</button>

    <!-- #2 : Modal Window -->
    <div v-show="is_show" style="background:white;">
        <h5>굶어</h5>
        <p>뭘쳐머거ㅡㅡㅡㅡㅡㅡㅡㅡㅡ</p>

        <button @click="handle_toggle" type="button">닫기</button>
    </div>
 </nav>
	</div>
  
</template>
<script>
export default {
  name: 'App',
  data: () => { // #1
    return {
      is_show: false 
    }
  },
  methods:{
    handle_toggle: function(){ 
      this.is_show = !this.is_show; // #2, #3
    },
  }
}
</script>
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

.nav_btn1{
  color: white;
  font-size: 30px;
}


@font-face { font-family: 'BBTreeGL'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGL.woff') format('woff'); font-weight: normal; font-style: normal; }
html * {
	font-family: 'BBTreeGL';
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
</style>
