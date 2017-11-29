<template>
  <div class="topBar">
    <div class="slideBar" @click="showSlideBar">
      <i class="iconfont icon-cebianlanzhankai"></i>
    </div>

    <div class="logo">
      <router-link to="/">
        <i class="iconfont icon-weibo"></i>
      </router-link>
      
    </div>
    <div @click="refresh" class="refresh">
      <i class="iconfont icon-shuaxin"></i>
    </div>

  </div>
</template>

<script>
  import jsonp from "jsonp";
  import http from "axios";

  export default {
    methods: {
      showSlideBar() {
        this.$store.commit("CHANGE_SLIDE_BAR_BOL");
      },
      refresh(){
        this.$store.dispatch("refresh")
        this.$store.dispatch("addTimeLine")
      }
    }
  };
</script>

<style lang="less" scoped>
  .topBar {
    width: 100%;
    height: 8%;
    min-height: 50px;
    position: fixed;
    top: 0;left: 0;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.6rem;
    color: #d32f2f;
    align-items: center;
    box-shadow: 0px 1px 13px 0px rgba(33, 33, 34, 0.3);
    box-sizing: border-box;
    z-index: 99;

    .logo {
      a{
      i {
        color: #f44336;
        font-size: 2.6rem;
        padding: 0.2rem;
      }
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
