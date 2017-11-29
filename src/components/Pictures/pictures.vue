<template>
  <div class="wb_img clearFix">
    <ul class="clearFix">
      <li v-for='(item,index) in imgArr' :key="item.id">
        <div @click="toShowImg(index)" :class="[{'wide_in_high':(item.width>=item.height), 'tall_in_wide':(item.width<item.height)}]">
            <img v-lazy="item.src">
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
    props: ["imgs"],
      beforeRouteLeave: (to, from, next) => {
      // ...
      console.log("%c%s", "color:red","store : " + this.$store.state.showImgArr); //undefined 
      
    },
    created() {
      let arr = this.imgs
      for (let item of arr) {
        let imgObj = new Image()
        let newUrl = this._changeImgUrl(item.thumbnail_pic)
        imgObj.src = item.thumbnail_pic
        this.imgArr.push(imgObj)
        this.urlArr.push(newUrl)
      }
    },
    data() {
      return {
        imgArr: [],
        urlArr: []
      }
    },
    methods: {
      // 左滑移动
      onSwipeLeft() {
        let post = this.$refs.myBox.$el.getBoundingClientRect();
        if (post.x > -((this.largeImg.length - 1) * this.x)) {
          this.objLeft.left = post.x - this.x + "px"
        }
      },
      // 右滑移动
      onSwipeRight() {
        console.log(1)
        let post = this.$refs.myBox.$el.getBoundingClientRect();
        if (post.x < 0) {
          this.objLeft.left = post.x + this.x + "px"
        }
      },
      _changeImgUrl(url) {
        let reg = /thumbnail/gi;
        return url.replace(reg, "bmiddle");
      },
      toShowImg(index) {
        
        this.$store.commit('ADD_IMGS', {
          'imgs': this.urlArr,
          'index': index
        })
        this.$router.push('/showImg')
      }
    },
    beforeRouteLeave: (to, from, next) => {
      console.log(this.$store.state)
      
    }
  }

</script>

<style lang="less" scoped>
  .wb_img {
    width: 100%;
    >ul {
      width: 16rem;
      >li {
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        display: inline-block;
        margin-left: 0.2rem;
        box-sizing: border-box; // 宽大于高时
        >div {
          width: 100%;
          height: 100%;
        }
        
        .wide_in_high {
          display: flex;
          justify-content: center;
          >img {
            width: auto;
            height: 5rem;
            max-height: 100%;
          }
        } // 高大于宽时
        .tall_in_wide {
          >img {
            width: 100%;
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }

</style>
