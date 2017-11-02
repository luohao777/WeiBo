<template>
  <div class="slideBar"  :class="{'active1':showSlideBar}" @click="closeSlideBar">
      <nav>
          <ul>
              <router-link to="new" @click.native="changeTopBarBol">
                <i class="iconfont icon-xie"></i><span>新微博</span>
              </router-link>
              <router-link to="">
                <i class="iconfont icon-user-copy"></i><span>个人主页</span>
                </router-link>
              <router-link to="">
                <i class="iconfont icon-sousuo"></i><span>搜索</span>
              </router-link>
              <router-link to="">
                <i class="iconfont icon-shezhi"></i><span>设置 </span>  
              </router-link>
              <router-link to="">
                 <i class="iconfont icon-tuichu"></i><span>退出</span>
              </router-link>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 6
    };
  },
  computed: {
    showSlideBar() {
      return this.$store.state.showSlideBar;
    }
  },
  methods: {
    closeSlideBar() {
      this.$store.commit("CHANGE_SLIDE_BAR_BOL");
    },
    changeTopBarBol () {
      console.log(1)
      this.$store.commit("SHOW_TOP_BAR_BOL");
    }

  }
};
</script>

<style lang="less" scoped>
.slideBar {
  position: absolute;
  top: 8%;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 99999;
  margin-left: -100%;
  // opacity: 0;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  color: RGB(244, 67, 54);
  nav {
    width: 50%;
    height: 100%;
    box-shadow: 5px 6px 5px #cccccc;
    float: left;
    background: white;

    border-top: 1px solid rgba(33, 33, 34, 0.3);
    ul {
      width: 100%;
      div {
        display: block;
        color: #212122;
        font-size: 1.1rem;
        text-align: left;
        background: white;
        // box-shadow: 3px 10px 5px #cccccc;
        text-indent: 1rem;
        i {
          font-size: 1.5rem;
          box-sizing: border-box;
          text-align: left;
          color: #f44336;
          line-height: 4.5rem;
          padding: 0.3rem;
        }
      }
      a {
        display: block;
        color: #212122;
        font-size: 1.1rem;
        text-align: left;
        background: white;
        // box-shadow: 3px 10px 5px #cccccc;
        text-indent: 1rem;
        i {
          font-size: 1.5rem;
          box-sizing: border-box;
          text-align: left;
          color: #f44336;
          line-height: 4.5rem;
          padding: 0.3rem;
        }
      }
    }
  }
}

.active1 {
  right: 0;
  opacity: 1;
  margin-left: 0;
}
</style>
