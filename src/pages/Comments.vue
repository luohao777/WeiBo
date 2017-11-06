<template>
  <div class="comments">
    <titleBar :title="'微博正文'"/>
    <!-- 微博内容 -->
    <div class="wb_wrap" v-if="wb">
      <!-- 个人信息 -->
      <div class="wb_info">
        <div class="wb_left">
          <img :src="wb.user.profile_image_url" alt="">
        </div>
        <div class="wb_right">
          <p class="wb_created_at">
            {{computedTime(wb.created_at)}}
          </p>
          <p class="wb_user">
            {{wb.user.name}}
          </p>
        </div>
      </div>
      <!-- 主微博文本内容 -->
      <div class="wb_text">{{wb.text}}</div>
      <!-- 主微博图片 -->
      <pictures :imgs="wb.pic_urls" :singlePicture="wb.thumbnail_pic" />

      <!-- 转发 -->
      <div class="wb_transpond" v-if="wb.retweeted_status">
        <!-- 转发内容 -->
        <p class="wb_text">{{wb.retweeted_status.text}}</p>
        <!-- 转发图片 -->
        <pictures :imgs="wb.retweeted_status.pic_urls" :singlePicture="wb.retweeted_status.thumbnail_pic" />
        <!-- 被转发的用户信息 -->
        <div class="wb_transpondInfo">
          <i class="iconfont icon-zhuanfa01"></i>
          <span>自&nbsp;</span>
          <span>{{wb.retweeted_status.user.name}}</span>
          <img :src="wb.retweeted_status.user.profile_image_url" alt="">
        </div>
      </div>
      <!-- 工具栏 -->
      <div class="wb_feed_handle">
        <div>
          <i class="iconfont icon-zhuanfa01">
          </i>
          <span>{{wb.attitudes_count}}</span>
        </div>

        <div>
          <i class="iconfont icon-pinglun"></i>
          <span>{{wb.comments_count}}</span>
        </div>
        <div>
          <i class="iconfont icon-aixin">
          </i>
          <span>{{wb.attitudes_count}}</span>
        </div>
      </div>
    </div>

    <!-- 评论 -->
    <div class="comments-wrap" v-if="comments">
      <div v-for="(item,index) in comments.comments" :key="index" class="comment">
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
        <p class="wb_text"> 
          {{item.text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { time } from "@/utils/time-utils"
import pictures from "@/components/Pictures/pictures"
import titleBar from "@/components/TitleBar"

export default {
  created() {
    this.$store.dispatch("getComments", this.$route.params.userId);
    let id = this.$route.params.userId;
    for (let item of this.$store.state.homeTimeLine) {
      if (item.id == parseInt(id)) {
        this.originalWb = item;
      }
    }
  },
  data() {
    return {
      originalWb: {}
    };
  },
  methods: {
    computedTime(createdTime) {
      return time(createdTime);
    }
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    },
    wb() {
      return this.originalWb;
    }
  },
  components: {
    pictures,
    titleBar
  }
};
</script>

<style lang="less" scoped>
.comments {
  width: 100%;
  background-color: #efefef;
  padding-top: 12%;
  background-origin: content-box;
  box-sizing: border-box;
  .comments-wrap {
    max-width: 765px;
    margin: 1rem auto;
    width: 100%;
    .comment {
      width: 100%;
      text-align: left;
      box-sizing: border-box;
      padding: 0.2rem 1.3rem;
      background: white;
      border-bottom: 1px solid #efefef;
      .wb_text {
        line-height: 1.5rem;
        color: #212122;
        overflow: hidden;
        padding: 1rem 0.6rem;
        letter-spacing: 0.5px;
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
            font-size: 0.9rem;
          }
          p:nth-child(1) {
            color: #bfbcbc;
            font-size: 0.8rem;

            font-weight: lighter;
          }
        }
      }
    }
  }
}

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
    padding: 1rem 0.6rem;
    letter-spacing: 0.5px;
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
    top: 3rem;
    right: 1.3rem;
    div {
      display: inline-block;
    }
  }
}
</style>