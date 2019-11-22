<template>
    <div class="container">
	<div class="">
		<div class="title" align="center">총 섭취 데이터 </div>
		<canvas id="myChart" class="col-xs-12 col-sm-4 col-md-3"></canvas>
			<div class="col-xs-12"
				style="text-align: right; margin-bottom: 15px;">
			
			</div>
		</div>
	
		<div class="panel panel-info">
			<div class="title" align="center" style="height:200px;">나의 섭취 리스트<br><br>
				<form action="##" class="form-inline">					
					<div class="form-group">
					</div>
					<div class="form-group" >
						<input type="text" class="form-control" name="keyword" placeholder="상품 이름을 입력하세요." size="80px;">
					</div> 
					<button type="submit" class="btn btn-info" >  검색</button>
				</form>
			</div>
			<div class="panel-body productPanel">
			<!-- 아이템 영역 -->
				
			<span v-for="item in list" :key=item.code >
					<h1>
						<sapn style="float: left">
						<img :src= "require('../' + item.img)" alt="item.name" width="300" @click="show_detail(item.code)">
						<td class="productName" v-html = "item.name + '&nbsp;'" style="font-size:20px;"></td>
                        <td class="productName" v-html = "item.icount + '개'" style="font-size:20px;"></td>
						<div style="width:300px;"></div>
						</sapn>
					</h1>
			</span>
			<div style="height:1000px; background-color: rgba( 255, 255, 255,0.5 );"></div>
			</div>
		</div>
		
		
</div>

</template>
<script>
import http from "../http-common";

export default {
  name: "intake-list",
  data() {
    return {
      upHere: false,
      list: [],
      sum: [],
      loading: true,
      errored: false
    };
  },
  methods: {
    retrieveIntake() {
      http
        .get("/searchallintake")
        .then((response) => {
            this.list = response.data['list'];
            this.sum = response.data['sum'];
            // alert(this.list);
            // alert(this.sum);
        }).catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  },
  filters: {

  },
  mounted() {
    this.retrieveIntake();
  }
};
</script>

<style>
.panel-heading{
	text-align: center;	
	font-size: 40px;
}
.title{
	text-align: center;	
	font-size: 40px;
}
.form-inline{
	float: right;

}
</style>