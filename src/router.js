import Vue from "vue";
import Router from "vue-router";

import InsertBoard from "./components/InsertBoard.vue";
import insertNotice from "./components/insertNotice.vue";
import listBoard from "./components/listBoard.vue";
import listNotice from "./components/listNotice.vue";
import viewBoard from "./components/viewBoard.vue";
import viewNotice from "./components/viewNotice.vue";
import updateBoard from "./components/updateBoard.vue";
import updateNotice from "./components/updateNotice.vue";
import main from "./components/main.vue";
import signUp from "./components/signUp.vue";

//import ChartPieCustomer2 from "./components/ChartPieCustomer2.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [  
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/listNotice',
      name: 'listNotice',
      component: listNotice
    },
    {
      path: '/insertNotice',
      name: 'insertNotice',
      component: insertNotice
    },
    {
      path: '/insertboard',
      name: 'insertboard',
      component: InsertBoard
    },
    {
      path: "/viewNotice",
      name: "viewNotice",
      alias: "/viewNotice",
      component: viewNotice

    },
    {
      path: '/updateNotice',
      name: 'updateNotice',
      component: updateNotice,
      props: true,
    },

    {
      path: "/listBoard",
      name: "listBoard",
      alias: "/listBoard",
      component: listBoard
    },

    {
      path: "/viewBoard",
      name: "viewBoard",
      alias: "/viewBoard",
      component: viewBoard

    },
    {
      path: '/updateboard',
      name: 'updateboard',
      component: updateBoard,
      props: true,
    },
    {
      path: '/signuppage',
      name: 'signuppage',
      component: signUp
    }

  ]
});