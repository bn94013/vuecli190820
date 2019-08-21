<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
 
  <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  // created(){
  //   const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
  //   api路徑位置
  //   console.log(process.env.APIPATH ,process.env.CUSTOMPATH);
  //   console.log(api);

  //   this.$http.get(api).then((response) => {    //axios網址上定義的抓取方法
  //   console.log(response.data);
  //   });
  // },

};
</script>

<style lang="scss">
// @import "~bootstrap/scss/bootstrap";
@import "./assets/all";
</style>

<style scoped>
a{
  color: red;
}
</style>