<template>
  <div id="app">
      <top-bar/>
      <slide-bar/>
      <button @click="test" >获取数据</button>
      <router-view></router-view>

  </div>
</template>

<script>
import topBar from "@/components/topBar";
import slideBar from '@/components/slideBar/slideBar'

export default {
  
  created() {
    // 获取数据
    // this.$store.dispatch("addTimeLine")
  },
  methods: {
    test() {
      this.$store.dispatch("addTimeLine");
    }
  },
  components: {
    topBar,slideBar
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
button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
}
button:nth-child(2) {
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  z-index: 999;
}
</style>
