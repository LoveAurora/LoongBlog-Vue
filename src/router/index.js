import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  scrollBehavior(to, from, savePosition) {
    // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if (savePosition) {
      return savePosition;
    } else {
      var top;
      if (window.innerWidth >= 700) {
        top = 676;
      } else {
        top = 267;
      }
      return {
        x: 0,
        y: top,
      };
    }
  },
  routes: [
    {
      path: "/",
      component: IOCSearch,
      meta: {
        auth: true,
      },
      name: "Home",
    },
    {
      path: "/IOCDetails",
      component: IOCDetails,
      meta: {
        auth: true,
      },
      name: "IOCDetails",
    },
    {
      path: "/IOCExhibit",
      component: IOCExhibit,
      meta: {
        auth: true,
      },
      name: "IOCExhibit",
    }, // 首页
    {
      path: "/IOCSearch",
      component: IOCSearch,
      meta: {
        auth: true,
      },
      name: "IOCSearch",
    },
    {
      path: "/ThreatGang",
      component: ThreatGang,
      meta: {
        auth: true,
      },
      name: "ThreatGang",
    },
    {
      path: "/Login",
      component: Login,
      meta: {
        auth: false,
      },
      name: "Login",
    }, // 注册登录
    {
      path: "/UserInfo",
      component: UserInfo,
      meta: {
        auth: true,
      },
      name: "UserInfo",
    }, // 用户个人中心
  ],
});
