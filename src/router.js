import Vue from "vue";
import Router from "vue-router";

import InsertBoard from "./components/InsertBoard.vue";
import listBoard from "./components/listBoard.vue";
import viewBoard from "./components/viewBoard.vue";
import updateBoard from "./components/updateBoard.vue";
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
      path: '/insertboard',
      name: 'insertboard',
      component: InsertBoard
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