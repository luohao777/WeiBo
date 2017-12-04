<template>
<div class="wb">
    <div class=" wb_wrap" v-for="(item,index) in wbList" :key="index">
      <!-- 主微博文本内容 -->
      <div class="wb_text" >{{item.text}}</div>
      <!-- 主微博图片 -->
      <pictures v-if="item.pic_urls.length!==0" :imgs="item.pic_urls" :singlePicture="item.thumbnail_pic" />
      <!-- 转发 -->
      <div class="wb_transpond" v-if="item.retweeted_status">
        <!-- 转发内容 -->
        <p class="wb_text">{{item.retweeted_status.text}}</p>
        <!-- 转发图片 -->
        <pictures v-if="item.retweeted_status.pic_urls.length!==0" :imgs="item.retweeted_status.pic_urls" :singlePicture="item.retweeted_status.thumbnail_pic" />
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
        <!-- 跳转到评论 -->
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
</div>

</template>

<script>

import pictures from '../Pictures/pictures'
import { time } from'@/utils/time-utils'
import { exportShort } from '@/api/request/get_info'


export default {
    props: {
    wbList: Array
  },
  components: {
    pictures
  },
  methods : {
    computedTime(createTime) {
      return time(createTime);
   },
     URL(id) {
      return "/comments/" + id;
    },

  }
};
</script>

<style lang="less" scoped>
.wb {
  width: 100%;
  background-color: #efefef;
  background-origin: content-box;
  box-sizing: border-box;
  // position: absolute;
  // top: 9%;
  .wb_wrap {
    position: relative;
    max-width: 765px;
    margin: 1rem auto;
    width: 100%;
    min-width: 320px;
    padding: 1.5rem;
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
      padding: 1rem 1rem;
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
</style>


