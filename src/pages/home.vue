<template>
  <!-- <div class="home" v-if="homeTimelineData" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"> -->
  <div class="home" v-if="homeTimelineData">
    <top-bar/>
    <div class="wb_wrap" v-for="(item,index) in list" :key="index">
      <!-- 主微博文本内容 -->
      <div class="wb_text">{{item.text}}</div>
      <!-- 主微博图片 -->
      <pictures :imgs="item.pic_urls" :singlePicture="item.thumbnail_pic" />

      <!-- 转发 -->
      <div class="wb_transpond" v-if="item.retweeted_status">
        <!-- 转发内容 -->
        <p class="wb_text">{{item.retweeted_status.text}}</p>
        <!-- 转发图片 -->
        <pictures :imgs="item.retweeted_status.pic_urls" :singlePicture="item.retweeted_status.thumbnail_pic" />
        <!-- 被转发的用户信息 -->
        <div class="wb_transpondInfo">
          <i class="iconfont icon-zhuanfa01"></i>
          <span>自&nbsp;</span>
          <span>{{item.retweeted_status.user.name}}</span>
          <img :src="item.retweeted_status.user.profile_image_url" alt="">
        </div>
      </div>
      <!-- 个人信息 -->
      <div class="wb_info">
        <div class="wb_left">
          <img :src="item.user.profile_image_url" alt="">
        </div>
        <div class="wb_right">
          <p class="wb_created_at">
            {{computedTime(item.created_at)}}
          </p>
          <p class="wb_user">
            {{item.user.name}}
          </p>
        </div>
      </div>
      <!-- 工具栏 -->
      <div class="wb_feed_handle">
        <div>
          <i class="iconfont icon-zhuanfa01">
          </i>
          <span>{{item.attitudes_count}}</span>
        </div>

        <router-link :to="URL(item.id)" >
          <i class="iconfont icon-pinglun"></i>
          <span>{{item.comments_count}}</span>
        </router-link>
        <div>
          <i class="iconfont icon-aixin">
          </i>
          <span>{{item.attitudes_count}}</span>
        </div>
      </div>
    </div>
    <div class="loading" v-if="loading">
      <div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "@/components/topBar";
import pictures from "@/components/Pictures/pictures";
import InfiniteLoading from "vue-infinite-loading";
import { time } from "@/utils/time-utils";

export default {
  data() {
    return {
      list: [],
      loading: false
    };
  },
  methods: {
    computedTime(createTime) {
      return time(createTime);
    },
    loadMore() {
      console.log("1");
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch("addTimeLine");
        this.loading = false;
      }, 1000);
    },
    URL(id) {
      return "/comments/" + id;
    }
  },
  computed: {
    homeTimelineData() {
      this.list = this.$store.state.homeTimeLine;
      return this.$store.state.homeTimeLine;
    }
  },
  components: {
    pictures,
    topBar
  }
};
</script>

<style lang="less" socped>
.home {
  width: 100%;
  // height: 100%;
  background-color: #efefef;
  // overflow: auto;
  padding-top: 12%;
  background-origin: content-box;
  box-sizing: border-box;
  .wb_wrap {
    position: relative;
    max-width: 765px;
    margin: 1rem auto;
    width: 100%;
    min-width: 320px;
    padding: 2rem;
    box-sizing: border-box;
    background: white;
    text-align: left;
    padding-bottom: 1rem;
    border-radius: 2px;
    font-size: 0.9rem;
    box-shadow: 5px -1px 5px rgba(160, 154, 154, 0.2);
    .wb_text {
      line-height: 1.5rem;
      color: #212122;
      overflow: hidden;
      letter-spacing: 0.5px;
      padding: 1rem 0.6rem;
    }
    .wb_transpond {
      box-sizing: border-box;
      width: 100%;
      background: rgba(247, 247, 247, 0.5);
      line-height: 1.5rem;
      padding: 1rem 1.5rem;
      .wb_transpondInfo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0.5rem;
        box-sizing: border-box;
        i {
          color: #f44336;
          font-size: 1.5rem;
          margin-right: 0.8rem;
        }
        img {
          margin-left: 0.8rem;
          border-radius: 50%;
          width: 2.3rem;
          height: 2.3rem;
        }
      }
    }
    .wb_info {
      margin-top: 0.8rem;
      margin-left: -0.4rem;
      .wb_left {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      .wb_right {
        display: inline-block;
        padding-left: 0.5rem;
        height: 3rem;
        line-height: 3rem;
        vertical-align: middle;
        p {
          height: 1.5rem;
          line-height: 1.5rem;
        }
        p:nth-child(1) {
          color: #bfbcbc;
          font-weight: lighter;
          font-size: 0.8rem;
        }
      }
    }
    .wb_feed_handle {
      position: absolute;
      bottom: 3rem;
      right: 1.3rem;
      div {
        display: inline-block;
        .icon-aixin {
          color: #f44336;
        }
      }
    }
  }
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