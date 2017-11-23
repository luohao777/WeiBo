<template>
  <div class="wb_img">
    <ul class="clearFix">
      <li v-for='(item,index) in imgs' :key="item.id" @click="openLargeImg(imgs,index)">
        <img :src="changeImg(item.thumbnail_pic)" alt="">
      </li>
    </ul>
    <!-- <div class="imgWrap" v-show="showLarge" @click="close">
      <div class="imgView">
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" :ref="'myBox'" :style='objLeft'>
          <img v-for="img in largeImg" :key="img.id" :style="{width}"  alt="">
        </v-touch>
      </div>
    </div> -->
  </div>

</template>
<script>

export default {
  props: ["imgs"],
  data() {
    return {
      urls: this.imgs,
      showLarge: false,
      largeImg: [],
      objLeft: {
        left: 0
      }
    };
  },
  methods: {
    // 打开大图页面
    toEnlarge(index) {
      this.showLarge = true;
      this.objLeft.left = -index * this.x + "px";
      if (this.largeImg) {
        // 将小图url换成中图Url
        for (let item of this.imgs) {
          let reg = /thumbnail/gi;
          let a = item.thumbnail_pic;
          let url = a.replace(reg, "bmiddle");
          this.largeImg.push(url);
        }
      }
    },
    //关闭大图界面
    close() {
      this.showLarge = false;
    },
    // 左滑移动
    onSwipeLeft() {
     
      let post = this.$refs.myBox.$el.getBoundingClientRect();
      if (post.x > -((this.largeImg.length - 1) * this.x)) {
        this.objLeft.left = post.x - this.x + "px";
      }
    },
    // 右滑移动
    onSwipeRight() {
      console.log(1)
      let post = this.$refs.myBox.$el.getBoundingClientRect();
      if (post.x < 0) {
        this.objLeft.left = post.x + this.x + "px";
      }
    },
    changeImg(url) {
      let reg = /thumbnail/gi;
      return url.replace(reg, "bmiddle");
    }

  },
  computed: {}
};
</script>

<style lang="less" scoped>
.wb_img {
  width: 100%;
  > ul {
    width: 16rem;
    > li {
      width: 5rem;
      height: 5rem;
      overflow: hidden;
      display: inline-block;
      margin-left: 0.2rem;
      box-sizing: border-box;
      img {
        max-width: 100%;
        width: 100%;
        height: auto;
        max-width: 100%;
      }
    }
  }
  .imgWrap {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.98);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    .imgView {
      position: relative;
      width: 100%;
      height: 100%;
      > div {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        transition: all 0.1s linear;
        img {
          max-width: 100%;
          width: 100%;
          height: auto;
          max-height: 100%;
          display: inline-block;
        }
        img[lazy="loading"] {
          background: url("./loading.gif") center center no-repeat;
          background-size: 100% 100%;
          max-width: 100%;
          width: 100%;
          height: auto;
          max-height: 100%;
          display: inline-block;

        }
      }
    }
  }
}
</style>