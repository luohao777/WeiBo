<template>
    <div class="loginIn" >
        <div class="wrap">
            <h1>微博</h1>
            <p @click="loginIn">
              <i class="iconfont icon-weibo"></i> 登录
             </p>
            <router-link class="close" to="home">
                <i class="iconfont icon-guanbi"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$store.commit("CHANGE_SHOW_LOGING_IN_BOL");
    },
    loginIn() {
      this.$store.dispatch("loginIn");
      this.$store.commit("CHANGE_SHOW_LOGING_IN_BOL");
    }
  },
  computed: {
    showLoginInBol() {
        return this.$store.state.showLoginIn;
    }
  }
};
</script>

<style lang="less" scoped>
::-webkit-input-placeholder {
  color: black;
}

.loginIn {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
  background: url("./5.jpg") center / cover fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrap {
    background: hsla(0, 0%, 100%, 0.3);
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    width: 80%;
    // height: 40%;
    padding: 3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 2rem; //   color: white;
      font-weight: lighter;
      margin-bottom: 2rem;

    }
    p {
      font-size: 2.3rem;
      font-weight: lighter;
      padding: 1.8rem 0.6rem 1rem;
      margin-bottom: 5rem;
      color: #fff;
            i {
        color: #f44336;
        font-size: 2.1rem; //   color: white;
      }

    }
    .close {
      i {
        font-size: 1.1rem;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.6);
        padding: 0.5rem;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}

.wrap::before {
  content: "";
  background: url("./5.jpg") center / cover fixed;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -30px;
  filter: blur(10px);
}
</style>