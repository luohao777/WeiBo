<template>
  <div class="mine">
    <div class="userInfo">
      <div class="avatar">
        <div :style="{backgroundImage:'url('+userInfo.avatar_large+')'}"></div>
      </div>
      <div class="info">
        <p>{{userInfo.name}}</p>
        <p>{{userInfo.description ? userInfo.description : "一句话介绍一下自己吧，让别人更了解你"}}</p>
        <p>{{userInfo.location}}</p>
      </div>
      <div class="data">
        <div>
          <p>关注</p>
          <p>{{userInfo.followers_count}}</p>
        </div>
        <div>
          <p>粉丝</p>
          <p>{{userInfo.friends_count}}</p>
        </div>
        <div>
          <p>微博</p>
          <p>{{userInfo.statuses_count}}</p>
        </div>
      </div>
      <div class="other">
        <div class="favourites">
            <i class="iconfont icon-icon-"></i>
          <span>收藏</span>
          <span>({{userInfo.favourites_count}})</span>
        </div>
        <div class="level">
            <i class="iconfont icon-icon-1"></i>
          <span>微博等级</span>
          <span>Lv{{userInfo.urank}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    // 获取个人信息
    this.$store.dispatch("getUserInfo");
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>

<style lang="less" scoped>
.mine {
  width: 100%;
  //   background-color: #efefef;
  .userInfo {
    width: 100%;
    .avatar {
      width: 100%;
      padding: 3rem 0 2rem 0;
      background: url("./4.jpeg");
      background-size: 100%  auto;
      div {
        margin: 0 auto;
        width: 6rem;
        height: 6rem;
        background-size: 100% 100%;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 2px 2px 5px rgba(160, 154, 154, 0.1);
      }
    }
    .info {
      p {
        margin: 1rem;
      }
      p:nth-child(1) {
        font-size: 1.5rem;
        font-weight: bold;
      }
      p:nth-child(2) {
        font-weight: lighter;
      }
      i {
        padding: 0.5rem;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    .data {
      display: flex;
      justify-content: space-around;
      margin: 1rem;
      div {
        width: 33%;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        p:nth-child(1) {
          color: rgba(0, 0, 0, 0.4);
          padding-bottom: 0.5rem;
        }
      }
      div:nth-child(3) {
        border: none;
      }
    }
    .other {
      div {
        width: 100%;
        text-align: left;
        box-shadow: 5px 2px 5px rgba(160, 154, 154, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
        line-height: 1.5rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        i {
          font-size: 1.6rem;
          color: #f44336;
        }
        span{
          display: ceil;
        }
      }
    }
  }
}
</style>
