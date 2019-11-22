<template>
<div class="container">

  <div>
			<div class="col-xs-12"
				style="text-align: right; margin-bottom: 15px;">
        
					<input type="hidden" />
					<div class="form-group">
						<select v-model = "selected" class="form-control" placeholder="선택">							
  <option>상품명</option>
  <option>제조사</option>
  <option>재료명</option>
</select>					
					
					</div>
					<div class="form-group">
						<input type="text" name = "keyword" v-model = "keyword" class="form-control" placeholder="검색어를 입력하세요." @change="searchfood">
					</div>
					<button type="submit" class="btn btn-info">검색</button>
        
       
       
			</div>

			</div>
     
     <div class="panel panel-default">
			<div class="panel-body">

				<div v-for = "item in list" class="row productRow"  :key="item.code">			
					
						<input type="hidden" name="code" value="item.code" />
						<div class="col-sm-6 col-md-4">
						<div class="thumbnail" style="border:none;">
						<div class="overlay">
						<p class="text">{{item.name}}</p>
						</div>
						<img :src= "require('../' + item.img)" alt="item.name" width="200px">
						<!-- <div class="caption" style="opacity:1;"> -->
						<button type="submit" class="btn btn-lg btn-block btn-primary">상품 정보로 이동 &nbsp;</button>
						<!-- </div> -->
						</div>
						</div>
					
				
				</div>
			</div>
			</div>

			
        </div>
    
</template>

<script>
import http from "../http-common";
import App from "../App.vue";
export default {
  name: "productlist",
  data() {
    return {
      upHere: false,
      list: [],
      loading: true,
      errored: false
    };
  },
  methods: {
    showinsert() {      
			this.$router.push("/proudctdetail");
    },
    retrieveproduct() {
      
      http
        .get("/listfood")
        .then(response => (this.list = response.data['list']))
        .catch(() => {
          this.errored = true;

        })
        .finally(() => (this.loading = false));
       
    },
    refreshList() {
      this.retrieveproduct();
    },
    show_detail: function(bid) {
      //alert(bid + " 클릭했음");
      App.bid = bid;
      //App.$router.push( { path: 'viewboard' });
      //아래를 수정했다.
     // App.$router.push('/viewboard');
      //App.$router.push( {path:'viewboard'});
    //this.$router.push("/board-view/:App.bid" +  App.bid);
    this.$router.push(  {name: 'detailfood', params:{bid: App.bid}});
    }
  },
  filters: {

  },
  mounted() {
    this.retrieveproduct();
  
   
  }
};
</script>

<style>
</style>
