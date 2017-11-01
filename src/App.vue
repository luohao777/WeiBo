<template>
  <div id="app">
      <top-bar/>
      <slide-bar/>
      <router-view></router-view>
  </div>
</template>

<script>
import topBar from "@/components/topBar";
import slideBar from "@/components/slideBar/slideBar";
import loginIn from "@/pages/LoginIn/loginIn";

export default {
  created() {
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

    if (str) {
      let reg = /%26/gi;
      let arr = str.split(reg);
      for (let item of arr) {
        let reg = /%3D/gi;
        let arr1 = item.split(reg);
        info[arr1[0]] = arr1[1];
      }
    }
    this.$store.commit("ADD_COOKIE", info);

    // 获取数据
    this.$store.dispatch("addTimeLine")
  },
  methods: {
    test() {
      this.$store.dispatch("addTimeLine");
    }
  },
  components: {
    topBar,
    slideBar,
    loginIn
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
  position: relative;
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
</style>
