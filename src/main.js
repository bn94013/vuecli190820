// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'                   //使用axios套件
import VueAxios from 'vue-axios'            //使用vueaxios套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';



import App from './App'
import router from './router';
import './bus';
import currencyFilter from "./filters/currency";
// import VueWechaTitle from 'vue-wechat-title';

// Vue.use(VueWechaTitle);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);                 //定義axios和vueaxios套件可以使用

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});



router.beforeEach((to, from, next) => {           //導航守衛
  console.log('to',to, 'from',from ,'next',next);
  if(to.meta.title){
    document.title = to.meta.title;
  }



  if(to.meta.requiresAuth){
    // console.log('這裡需要驗證');
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(response => {                  //this.$http 無法使用要用axios套件
      console.log(response.data);
      if(response.data.success ){    //登入成功 回首頁
          next();
      }else{
        next({
          path:'/login',
        })
      }
    });

  }else{
    next();
  }
  
  // ...
})
