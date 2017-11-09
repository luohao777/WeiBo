<template>
    <div class="post">
        <div class="post-nav">
            <div @click="close">
                <i class="iconfont icon-guanbi"></i>
            </div>
            <div>
                <span :class="{'active':isActive}" @click="sendText">发送</span>
            </div>
        </div>

        <div class="post-status">
            <textarea placeholder="分享新鲜事..." class="status-text" maxlength="140" v-model="text">
            </textarea>
        </div>
        <div class="post-image">
        </div>
        <div class="post-message-wrap" v-show="showMessageBox">
          <div class="post-message-box">
              <div :class="{sending:sendingBol,success:successBol,fail:failBol}">
                <i v-if="successBol" class="iconfont icon-weibo"></i>
                <i v-if="failBol" class="iconfont icon-guanbi"></i>
              </div>
               <p>{{messageText}}</p>
          </div>
        </div>        
    </div>
</template>
<script>
import { share } from "@/api/request/send_post";

export default {
  data() {
    return {
      active: false,
      text: "",
      showMessageBox: false,
      sendingBol: true,
      successBol: false,
      failBol: false,
      messageText: "发送中..."
    };
  },
  computed: {
    isActive() {
      if (this.text) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    sendText(e) {
      this.messageText = "发送中...";
      if (!this.text) {
        return
      } else {
        this.showMessageBox = true;
        let state = {};
        state.text = this.text;
        share(
          state,
          res => {
            console.log(res);
            if (res.data.match("21301")) {
              this.sendingBol = false;
              this.failBol = true;
              this.messageText = "发送失败";
              setTimeout(() => {
                this.showMessageBox = false;
                this.sendingBol = true;
                this.failBol = false;
              }, 1000);
            } else {
              this.sendingBol = false;
              this.successBol = true;
              this.messageText = "发送成功";
              setTimeout(() => {
                this.showMessageBox = false;
                this.sendingBol = true;
                this.successBol = false;
              }, 1000);
            }
          },
          err => {
            this.sendingBol = false;
            this.failBol = true;
            this.messageText = "发送失败";
            setTimeout(() => {
              this.showMessageBox = false;
              this.sendingBol = true;

              this.failBol = false;
            }, 1000);
          }
        );
      }
    },
    close() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
::-webkit-input-placeholder {
  color: #cccccc;
}

.post {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1.3rem;
  overflow: hidden;
  .post-nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    div {
      font-size: 1.1rem;
      cursor: pointer;
      i {
        font-size: 1.8rem;
        padding: 0.6rem;
      }
      span {
        display: block;
        color: white;
        padding: 0.5rem 1rem;
        background: #ffc09f;
        color: #fff;
        border: 1px solid #fbbd9e;
        box-shadow: none;
        cursor: default;
      }
      span.active {
        background: #f7671d;
        border: 1px solid #f06923;
      }
    }
  }
  .post-status {
    width: 100%;
    height: 30%;
    .status-text {
      width: 100%;
      height: 90%;
      font-size: 1.3rem;
      outline: none;
      resize: none;
      border: none;
    }
  }
  .post-message-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 10%;
    height: 10%;
    text-align: center;
    padding-top: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: rgba(1, 1, 1, 0.1);
    .post-message-box {
      width: 5rem;
      position: relative;
      height: 5rem;
      background: white;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 5rem;
        position: absolute;
        padding: 1rem;
        bottom: -3rem;
      }

      div {
        position: relative;
        margin: 0 auto;
        width: 3rem;
        height: 3rem;
        background: transparent;
        border: 1px solid #212122;
        border-radius: 50%;
        text-align: center;
        line-height: 3rem;
      }
      // 发送中
      .sending {
        animation: sl 1.5s linear infinite;
        -webkit-animation: sl 1.5s linear infinite;
      }
      .sending:after {
        content: "";
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        background: #212122;
        border-radius: 50%;
        position: absolute;
        left: 0.8rem;
        top: -0.15rem;
      }
      // 成功
      .success {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #210122;
        i {
          font-size: 2rem;
          color: #f44336;
        }
      }

      .fail {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #210122;
        i {
          font-size: 2rem;
          color: #212122;
        }
      }
    }
  }
  @keyframes sl {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>