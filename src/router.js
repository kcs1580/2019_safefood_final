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
<<<<<<< HEAD
import productlist from "./components/productlist.vue";
=======
import updateMember from "./components/updateMember.vue";
>>>>>>> c96fd1437fd53af08ed8a4992b04804d6321b8c5



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
    },
<<<<<<< HEAD
 {
  path: '/productlist',
  name: 'productlist',
  component: productlist
 }
 
=======
    {
      path: '/updatemem',
      name: 'updatemem',
      component: updateMember
    }
>>>>>>> c96fd1437fd53af08ed8a4992b04804d6321b8c5

  ]
});