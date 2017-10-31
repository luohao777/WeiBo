<template>
  <div class="slideBar"  :class="{'active1':showSlideBar}">
      <nav>
          <ul>
              <li><i class="iconfont icon-tianjia"></i>新微博</li>
              <li>私信</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
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
  }
};
</script>

<style lang="less" scoped>
.slideBar {
  position: absolute;
  top: 8%;
  width: 100%;
  height: 100%;
  right: 0;
  z-index: 99999;
  margin-right: -100%;
  // opacity: 0;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  color: RGB(244, 67, 54);
  nav {
    width: 50%;
    height: 100%;
    background: white;
    box-shadow: -3px 10px 5px #cccccc;
    float: right;
    border-top: 1px solid rgba(33, 33, 34, 0.3);
    ul {
      width: 100%;

      li {
        // width: 50%;
                  color: #212122;

        font-size: 1rem;

        i {
          font-size: 1rem;
          box-sizing: border-box;
          text-align: center;
          //   border: 1px solid RGBa(244, 67, 54, 0.8);
          color: #212122;
          padding: 1rem 0;
          line-height: 6rem;
        }
      }
    }
  }
}

.active1 {
  right: 0;
  opacity: 1;
  margin-right: 0;
}
</style>
