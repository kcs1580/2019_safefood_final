<template>
 <div class="container">
	<h1 style="text-align: center; font-size: 3em; margin-bottom:">질문 게시판List</h1>
		<hr style="margin-bottom: 40px;">

		<div class="panel panel-default" >
			<div class="panel-body">
				<table class="table text-center table-bordered table-hover">
					
          <div v-for="item in list" class="#" :key="item.bid">
            <div class="row productRow">
			<div class="col-xs-12 col-sm-4 col-md-3" style="max-height: 250px;">
				<img :src= "require('../' + item.img)" alt="item.name" width="200">
				<div class="custom_tooltip"
					style="position: absolute; width: 200px; background: #696969a8; bottom: 0; color: white; padding: 10px; vertical-align: middle; text-align: center; display: none;">
					<p>{{item.name}}</p>
					<p style="margin-bottom: 0">
						<strong> </strong>
					</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-8 col-md-9">
				<h3>
					<a class="productName" @click="detailproduct()">{{item.name}}</a>
				</h3>
				<hr>
				<!-- <p>{{item.material}}</p> -->
				<div class="btn-group" role="group">
					<a @click="insertintake()" class="btn btn-flat btn-sm btn-info" role="button"><i
						class="glyphicon glyphicon-tag"></i> 추가</a> <a href="#"
						class="btn btn-flat btn-sm btn-info" role="button"><i
						class="glyphicon glyphicon-tag"></i> 찜</a>
				</div>
			</div>
		</div>

          </div>


				</table>
				<div class="row">
					<div class="col-sm-12 text-right">
						<a href="" @click="showinsert()" class="btn btn-info btn-flat">글쓰기</a>
            
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
			this.$router.push("/insertboard");
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
      this.retrieveBoards();
    },
    show_detail: function(bid) {
      //alert(bid + " 클릭했음");
      App.bid = bid;
      //App.$router.push( { path: 'viewboard' });
      //아래를 수정했다.
     // App.$router.push('/viewboard');
      //App.$router.push( {path:'viewboard'});
    //this.$router.push("/board-view/:App.bid" +  App.bid);
    this.$router.push(  {name: 'viewBoard', params:{bid: App.bid}});
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
