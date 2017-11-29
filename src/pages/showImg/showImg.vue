<template>
  <div class="showImg">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for='(item, index) of imgArr' :key="index">
        <div :class="[{'wide_in_high':(item.width>item.height), 'tall_in_wide':(item.width<item.height)}]">
          <img v-lazy='item.src'>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="close" @click="close">关闭</div>
  </div>
</template>
<script>
  export default {
    created () {
        let arr = this.$store.state.showImgArr
        let index = this.$store.state.nowIndex
        this._loading(arr,index,newArr =>{
          this.imgArr = newArr
        })

    },
    data() {
      return {
        imgArr:[]
      }
    },
    watch: {
      showImgArr() {
        let arr = this.$store.state.showImgArr
        let index = this.$store.state.nowIndex
        this._loading(arr,index,newArr =>{
          this.imgArr = newArr
        })
      },
      nowIndex() {
        return this.$store.state.nowIndex
      }
    },
    methods: {
      close() {
        this.$store.commit('CLEAR_IMGS_DATA')
        this.$router.go(-1)
      },
      _loading(arr,index=0,callback) {
        let loadedObj = []
        let num = 0
        let len = arr.length
        for(let item of arr) {
          let imgObj = new Image()
          imgObj.src = item
          imgObj.onload = function () {
            loadedObj.push(this)
            num++
            console.log(num)
            if(num >= len) {
              console.log('加载完成了')
              if(callback) {
                callback(loadedObj)
              }
            }
          }
        }

      }
    }
  }

</script>
<style lang="less">
  .showImg {
    width: 100%;
    height: 100%;
    background-color: black;
    position: relative;

    .mint-swipe-item {
      // .img-wrap {
      //   width: 100%;
      //   height: 100%;
      //   display: flex;
      //   justify-content: center;
      //   align-content: center;
      //   img{
      //     max-width: 100%;
      //     width: 100%;
      //     height: auto;
      //   }
      // }
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

    .close {
      position: fixed;
      padding: .3rem 1rem;
      color: white;
      left: 2rem;
      background: rgba(233, 230, 250, .3);
      bottom: 3rem;
      z-index: 2;
    }
  }

</style>
