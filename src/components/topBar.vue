<template>
  <div class="topBar">
    <div @click="loginIn" class="loginIn">
      <i class="iconfont icon-user-copy"></i>
    </div>
    <div class="logo">
      <i class="iconfont icon-weibo"></i>
    </div>
    <div class="slideBar" @click="showSlideBar">
      <i class="iconfont icon-cebianlanzhankai"></i>
    </div>
  </div>
</template>

<script>
import * as api from "@/api";
import jsonp from "jsonp";
import http from "axios";


export default {
  methods: {
    loginIn() {
      //    let url =api.HOST_CONFIG + api.APP_KEY.appKey
      let url =
        "https://api.weibo.com/oauth2/authorize?client_id=1081182036&redirect_uri=http://192.168.191.1:8080";
      console.log(url);
      http.get(url, function(err, data) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(data);
        }
      })
    },
    showSlideBar (){
      this.$store.commit("CHANGE_SLIDE_BAR_BOL")
    }
  }
};
</script>

<style lang="less" scoped>
.topBar {
  width: 100%;
  height: 8%;
  position: relative;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.6rem;
  color: #d32f2f;
  align-items: center;
  box-shadow: 0px 1px 13px 0px rgba(33,33,34,.3);
  box-sizing: border-box;
  z-index: 99;

  .logo { 
    i {
      color: #f44336;
      font-size: 2.6rem;
      padding: 0.2rem;
    }
  }
  div {
    padding: 1.3rem;
  }

  div {
    i {
      font-size: 1.6rem;
    }
  }
}
</style>