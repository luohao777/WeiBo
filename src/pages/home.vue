<template>
  <div class="home" >
    <div class="wb_wrap" v-for="(item,index) in homeTimelineData" :key="index">
      <!-- <p>{{""+(index+1)+"条微博"}}</p> -->
      <!-- 主微博文本内容 -->
      <div class="wb_text">{{item.text}}</div>
      <!-- 主微博图片 -->
      <pictures :imgs="item.pic_urls" :singlePicture="item.thumbnail_pic"/>

      <!-- 转发 -->
      <div class="wb_transpond" v-if="item.retweeted_status">
        <!-- 转发内容 -->
        <p class="wb_text">{{item.retweeted_status.text}}</p>
        <!-- 转发图片 -->
        <pictures :imgs="item.retweeted_status.pic_urls" :singlePicture="item.retweeted_status.thumbnail_pic"/>
        
        <div class="wb_transpondInfo">
          <i class="iconfont icon-zhuanfa01"></i>
          <span>自&nbsp;</span>
          <span>{{item.retweeted_status.user.name}}</span>
          <img :src="item.retweeted_status.user.profile_image_url" alt="">
        </div>
 
      </div>
      <div class="wb_info">
        <div class="wb_left">
          <img :src="item.user.profile_image_url" alt="">
        </div>
        <div class="wb_right">
          <p class="wb_created_at">
            {{time(item.created_at)}}
          </p>
          <p class="wb_user">
            {{item.user.name}}
          </p>
        </div>
      </div>
      <div class="wb_feed_handle">
        <i class="iconfont icon-zhuanfa01">
        </i>
        <i class="iconfont icon-pinglun">
        </i>
        <i class="iconfont icon-aixin">
        </i>
        </i>
        <i class="iconfont icon-cebianlanzhankai">
        </i>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>

  </div>
</template>
<script>
import pictures from "@/components/Pictures/pictures";
import InfiniteLoading from "vue-infinite-loading";
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    infiniteHandler() {        

       if(!this.$store.state.firstLoad){
         this.$store.dispatch("loadMore");
       }
    },
    time(createTime) {
      let now = new Date();
      let create = new Date(createTime);
      let differ = (now.getTime() - create.getTime()) / 1000;
      if (differ < 60) {
        return parseInt(differ) + "秒前";
      } else {
        let differMin = differ / 60;
        if (differMin < 60) {
          return parseInt(differMin) + "分钟前";
        } else {
          let differHours = differMin / 60;
          return parseInt(differHours) + "小时前";
        }
      }
    },
  },
  computed: {
    homeTimelineData() {
      return this.$store.state.homeTimeLine;
    }
  },
  components: {
    pictures,
    InfiniteLoading
  }
};
</script>

<style lang="less" socped>
.home {
  width: 100%;
  height: 92%;
  background-color: #efefef;
  overflow: auto;
  position: relative;

  .wb_wrap {
    position: relative;
    max-width: 765px;
    margin: 1rem auto;
    width: 100%;
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
        border: 1px solid rgba(0, 0, 0, 0.1)

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
      bottom: 1.4rem;
      right: 1.3rem;
      > .icon-aixin {
        color: red;
      }
      > i {
        font-size: 1.3rem;
      }
    }
  }
}

.home::-webkit-scrollbar {
  display: none;
}
</style>