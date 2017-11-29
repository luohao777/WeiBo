<template>
<!-- 测试模式下注释此行 -->
  <!-- <div class="home" v-if="homeTimelineData" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"> -->
      <!-- 测试模式下注释此行-->
  <div class="home" v-if="homeTimelineData">
    <top-bar/>
    <micro-blog :wbList="list"/>
    <div class="loading" v-if="loading">
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "@/components/topBar";
import InfiniteLoading from "vue-infinite-loading";
import microBlog from '@/components/MicroBlog/microBlog'

export default {
  data () {
    return {
      list: [],
      loading: false
    };
  },
  methods: {
      // 到底部自动请求timeline接口，增加timelineList数据
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch("addTimeLine");
        this.loading = false;
      }, 1000);
    }
  },
  computed: {
    homeTimelineData() {
      this.list = this.$store.state.homeTimeLine;
      return this.$store.state.homeTimeLine;
    }
  },
  components: {
    topBar,
    microBlog
  }
};
</script>

<style lang="less" socped>
.home {
  width: 100%;
  background-color: #efefef;
  background-origin: content-box;
  box-sizing: border-box;
}

.home::-webkit-scrollbar {
  display: none;
}

@keyframes sl {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading {
  width: 100%;
  height: 3rem;
  text-align: center;
  padding-top: 1rem;
  div {
    position: relative;
    margin: 0 auto;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: 1px solid #212122;
    border-radius: 50%;
    animation: sl 1.5s linear infinite;
    -webkit-animation: sl 1.5s linear infinite;
    text-align: center;
    line-height: 3rem;
    div {
      width: 0.3rem;
      height: 0.3rem;
      background: #727272;
      border-radius: 50%;
      position: absolute;
      left: 0.6rem;
      top: -0.21rem;
    }
  }
}
</style>
