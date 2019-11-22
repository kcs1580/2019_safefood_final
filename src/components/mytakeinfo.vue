<template>
    <div class="container">
	<div class="row">
		<h1 align="center">총 섭취 데이터</h1>
		<canvas id="myChart" class="col-xs-12 col-sm-4 col-md-3"></canvas>
			<div class="col-xs-12"
				style="text-align: right; margin-bottom: 15px;">
				<form action="searchintake" class="form-inline">					
					<div class="form-group">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" name="keyword" placeholder="상품 이름을 입력하세요.">
					</div>
					<button type="submit" class="btn btn-info">검색</button>
				</form>
			</div>
		</div>
		

		<div class="panel panel-info">
			<div class="panel-heading">나의 섭취 리스트</div>
			<div class="panel-body productPanel">
			<!-- 아이템 영역 -->
			<span v-for="item in list" :key=item.code >
					<div class="col-xs-12 col-sm-4 col-md-3" style="max-height: 250px;" @click="show_detail(item.code)">
                        <img :src= "require('../' + item.img)" alt="item.name" width="200">
                        <div class="custom_tooltip" style="position: absolute; width: 200px; background: #696969a8; bottom: 0; color: white; padding: 10px; vertical-align: middle; text-align: center; display: none;">
							<p>item.name</p>
							<p style="margin-bottom: 0"><strong>
							</strong></p>
							</div>
							</div>
							<div class="col-xs-12 col-sm-8 col-md-9">
							<h3>
							<td class="productName" v-html = "item.name + '&nbsp;'"></td>
                            <td class="productName" v-html = "item.icount + '개'"></td>

							</h3>
							<hr>
							

				</div>
			</span>
			</div>
		</div>
		
		<footer style="background: #ececec; padding: 50px;">
		<h1>Find Us</h1>
		<hr>
		<p>
			<i class="glyphicon glyphicon-envelope"></i> (SSAFY) 서울시 강남구 테헤란로
			멀티스퀘어
		</p>
		<p>
			<i class="glyphicon glyphicon-envelope"></i> 1544-9001
		</p>
		<p>
			<i class="glyphicon glyphicon-envelope"></i> admin@ssafy.com
		</p>
	</footer>
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
</style>