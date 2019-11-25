<template>
  <div class="container">

<div id="app">
  <div class="OptionsWrapper">
    <button @click="toggleShowOptions" class="Button small">
          Toggle Options
        </button>
    <slide-up-down :active="showOptions">
      <div class="Options">
        <h1>Vue props</h1>
        <h2>active</h2>
        <p class="properties">Boolean. Required.</p>
        <p>Whether to show the component (true) or not (false).</p>

        <h2>duration</h2>
        <p class="properties">Number. Optional. Default to "500"</p>
        <label for="duration">
              How long the animation is supposed to be, in milliseconds.
            </label>
        <div>
          <input type="range" min="0" max="5000" step="50" id="duration" v-model="duration" />
          <span>{{ this.duration }}ms</span>
        </div>

        <h2>tag</h2>
        <p class="properties">String. Optional. Default to "div".</p>
        <p>Which HTML tag to use for the wrapper element.</p>

        <h2>use-hidden</h2>
        <p class="properties">Boolean. Optional. Default to "true".</p>
        <p>
          Whether to apply the "hidden" attribute to the element when closed.
        </p>
        <p>
          By default, when closed, the "hidden" attribute is applied to the component. This hides the component from the screen and from assistive devices. The internal elements of the component are completely invisible, and cannot be focused on (by a keyboard
          or assistive device).
        </p>
        <p>
          If you need, set this property to "false" to not use the "hidden" attribute. This could be used if you wanted to have a min-height requirement on your component.
          <strong>Note that this can create accessibility issues</strong>, specifically for users with a keyboard or screen reader. Even though the component may appear hidden, focusable elements within the component are still able to be accessed through
          keyboard navigation.
        </p>
        <input type="checkbox" value="1" id="applyHiddenToElement" name="useHidden" v-model="useHidden" />
        <label for="applyHiddenToElement">
              Apply "hidden" attribute to element?
            </label>

        <h1>Customisation</h1>
        <h2>CSS custom timing</h2>
        <p>By default, the timing of the animation is linear.</p>
        <p>
          You can define your own custom timing functions too using the CSS transition timing function property.
        </p>
        <p>
          Check out the source code to see the easeOutCubic and customTiming example code.
        </p>
        <div>
          <input type="radio" name="timing" value="" id="radio-default" v-model="timing" />
          <label for="radio-default">Default</label>
        </div>
        <div>
          <input type="radio" name="timing" value="easeInOutCirc" id="radio-ease-out" v-model="timing" />
          <label for="radio-ease-out">Use easeInOutCirc</label>
        </div>
        <div>
          <input type="radio" name="timing" value="customTiming" id="radio-custom" v-model="timing" />
          <label for="radio-custom">Use custom timing</label>
        </div>
      </div>
    </slide-up-down>
  </div>

  <div class="Options">
    <h1>Current configuration</h1>
    <p>
      These are the current configuration options being passed to the Toggle-able component below.
    </p>
    <p>
      Toggle the options above to make changes to see changes in realtime.
    </p>
    <ul>
      <li><em>duration:</em> {{ this.duration }}</li>
      <li><em>use-hidden:</em> {{ this.useHidden }}</li>
      <li><em>class:</em> {{ this.timing }}</li>
    </ul>
  </div>
  <div v-if="show">
    <button @click="toggle" class="Button">Toggle Content</button>

    <slide-up-down class="AccordionWrapper" :active="active" :use-hidden="this.useHidden" :class="this.timing" :duration="this.duration">
      <div class="Accordion">
        <p>
          <label for="input-focus-test">Focusable element</label>
          <input id="input-focus-test" />
        </p>
        <hr />
        <p v-for="paragraph in content">{{paragraph}}</p>
      </div>
    </slide-up-down>

    <br />

    <button class="Button" @click="addContent">Add Content</button>
  </div>

  <button class="Button" @click="toggleShow">Toggle if element exists</button>
</div>





  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 1em;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  padding: 20px;
}
#app {
  margin: 0 auto;
  max-width: 700px;
}
.Button {
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  border: 0;
  background-color: gray;
  cursor: pointer;
}
.Button.small {
  width: auto;
  font-size: 0.8em;
  padding: 0.5em 1em;
  background-color: lightgray;
  margin: 0;
}
.AccordionWrapper {
  background-color: darkred;
}
.AccordionWrapper.easeInOutCirc {
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.AccordionWrapper.customTiming {
  transition-timing-function: cubic-bezier(0.195, 1.65, 0.435, -0.6);
}
.Accordion {
  display: block;
  width: 96%;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  border: 0;
  background-color: lightgray;
}
.Accordion p,
.Accordion hr {
  margin-bottom: 10px;
}
.Accordion p:last-child {
  margin-bottom: 0;
}
.OptionsWrapper {
  padding: 1em;
  background-color: #eee;
}
.Options {
  padding: 20px 0;
}
.Options h1 {
  margin-top: 20px;
  font-size: 18px;
}
.Options h1:first-child {
  margin-top: 0;
}
.Options h2 {
  margin-top: 20px;
  margin-bottom: 6px;
  font-size: 14px;
}
.Options span,
.Options p,
.Options ul,
.Options label {
  font-size: 0.8em;
}
.Options p,
.Options ul {
  margin-bottom: 10px;
  margin-top: 6px;
}
.Options ul {
  margin-left: 20px;
}
.properties {
  font-style: italic;
}

</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
  Vue.component("slide-up-down", VueSlideUpDown);
  window.root = new Vue({
    el: "#app",
    data: () => ({
      active: false,
      show: true,
      contentLength: 2,
      showOptions: false,
      useHidden: true,
      timing: "",
      duration: 500
    }),
    methods: {
      toggle() {
        this.active = !this.active;
      },
      toggleShow() {
        this.show = !this.show;
      },
      toggleShowOptions() {
        this.showOptions = !this.showOptions;
      },
      addContent() {
        this.contentLength += 1;
      }
    },
    watch: {
      duration() {
        this.duration = parseInt(this.duration);
      }
    },
    computed: {
      content() {
        const content = new Array(this.contentLength);
        content.fill(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, consequatur ut magnam, quos possimus, velit quam mollitia voluptate adipisci reiciendis sapiente accusamus ullam ab voluptatem laborum non! Accusamus, ullam, voluptatum."
        );
        return content;
      }
    }
  });
});

</script>

<!--<template>
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
</script> -->
