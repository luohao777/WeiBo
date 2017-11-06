<template>
  <div id="app">
      <slide-bar/>
      <router-view></router-view>      
      <!-- <button @click="test">测试</button> -->
  </div>
</template>

<script>
import slideBar from "@/components/slideBar/slideBar";
import loginIn from "@/pages/LoginIn/loginIn";

export default {
  created() {
    if (!this.$store.state.testModel) {
      // 获取请求token的url
      this.$store.dispatch("getTokenUrl");
      //解析cookie
      function readCookie(name) {
        name += "=";
        let ca = document.cookie;
        let cookies = ca.split(";");
        for (let i = 0; i < cookies.length; i++) {
          let item = cookies[i].trim();
          if (item.indexOf(name) != -1) {
            return item.substring(name.length);
          }
        }
      }
      let str = readCookie("weibojs_1081182036");
      let info = {};
      // 整理用户数据
      if (str) {
        let reg = /%26/gi;
        let arr = str.split(reg);
        for (let item of arr) {
          let reg = /%3D/gi;
          let arr1 = item.split(reg);
          info[arr1[0]] = arr1[1];
        }
      }
      // 添加到登录信息到vuex
      this.$store.commit("ADD_COOKIE", info);

      // 获取微博主页数据
      this.$store.dispatch("addTimeLine");
    } else {
      // this.$store.dispatch("addTimeLine");
      console.log(window.screenWidth);
    }
  },
  components: {
    slideBar,
    loginIn
  },
  methods: {
    test() {
      this.$store.dispatch("addTimeLine");
    }
  },
  computed: {
    showTopBarBol() {
      return this.$store.state.showTopBarBol;
    }
  },
  name: "app"
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  min-width: 320px;
  position: relative;
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* overflow: hidden; */
}
button {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
}
</style>
