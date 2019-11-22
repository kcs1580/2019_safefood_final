<template>
  <div id="main_wrap">
    <div id="middle_wrap" v-if="visablelogin">
      <div id="content_wrap" style="height:500px; background:white;">
        <div
          style="width:502px; height:166px; margin-left:auto; margin-right:auto; position:relative; top:100px;"
        >
          <div id="login_wrap">
            <form class="login" @submit.prevent="login">
              <table class="content_table" style="width:500px;">
                <colgroup>
                  <col style="width:30%;" />
                  <col style="width:70%;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>아이디</th>
                    <td>
                      &nbsp;
                      <input
                        type="text"
                        id="_userid"
                        name="id"
                        value
                        data-msg="ID를"
                        size="30"
                        title="아이디"
                        required
                        v-model="usernameOrEmail"
                        placeholder="아이디를 입력하세요."
                        style="border:1px solid #dddddd;"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th >패스워드</th>
                    <td>
                      &nbsp;
                      <input
                        type="password"
                        id="_pwd"
                        name="pwd"
                        value
                        required
                        v-model="password"
                        placeholder="패스워드를 입력하세요."
                        size="30"
                        title="패스워드"
                        style="border:1px solid #dddddd;"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="height:50px; text-align:center;">
                      <button type="submit">로그인</button> &nbsp;&nbsp;
                      <button
                        type="button"
                        @click="visablelogin=!visablelogin"
                      >회원가입으로 이동</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
   
    </div>
</template>
<style>
#login_wrap {
  margin: auto;
}
#login_wrap th {
  font-weight: bold;
}
#main_wrap {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
}

.login_title_warp {
  margin: auto;
  width: 500px;
  color: #ffffff;
  text-align: center;
  background-color: #3e5fba;
  border: solid 1px #efefef;
  font-weight: bold;
  height: 60px;
}
</style>

<script>
import { AUTH_REQUEST } from "../store/actions/auth";
export default {
  name: "login",
  data() {
    return {
      visablelogin: true,
      usernameOrEmail: "",
      password: "",
      customer: {
        username: "",
        cname: "",
        email: "",
        password: ""
      },
      submitted: false
    };
  },
  methods: {
    login: function() {
      //model에 바인딩된 데이터 모두 ==> this
      const { usernameOrEmail, password } = this;
      this.$store
        .dispatch(AUTH_REQUEST, { usernameOrEmail, password })
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>
