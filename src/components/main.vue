<template class="a">
	<div class="container" >
  <img src="../../public/food.jpg" id="bg" alt="">
  <nav class="navbar">
 <a class="nav_btn1" href="http://localhost:8090">홈으로</a>     		
        <router-link class="nav_btn1" to="/insertboard">공지사항</router-link> |
        <router-link class="nav_btn1" to="/insertboard">상품</router-link> |
        <router-link class="nav_btn1" to="/insertboard">상품정보</router-link> |
        <router-link class="nav_btn1" to="/listBoard">질문게시판</router-link> |
       <router-link class="nav_btn1" to="/signuppage">회원가입</router-link> |

 </nav>
  <!-- <div id="slide">
    <tiny-slider :mouse-drag="true" :loop="false" :autoplay="false" items="1" gutter="20" speed="1000" id="my-slider">
      <div style="height:100px; width:100px; background:red"></div>
      <div style="height:100px; width:100px; background:yellow"></div>
      <div style="height:100px; width:100px; background:blue"></div>


    </tiny-slider>

  </div> -->


	</div>
</template>

// <script>
// import VueTinySlider from 'vue-tiny-slider';
// export default {
//   components: {
//     'tiny-slider': VueTinySlider
//   }
// }
// </script>
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
