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
    created() {
      let arr = this.imgs
    
      for (let item of arr) {
        let newUrl = this._changeImgUrl(item.thumbnail_pic)
        this.urlArr.push(newUrl)
      }

      this._loading(this.urlArr, 0, ()=>{}, obj => {
        this.imgArr.push(obj)
      })


    },
    data() {
      return {
        imgArr: [],
        urlArr: []
      }
    },
    methods: {
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
      },
       _loading(arr,index=0,callback,progress) {
        let loadedObj = []
        let num = 0
        let len = arr.length
        for(let item of arr) {
          let imgObj = new Image()
          imgObj.src = item
          imgObj.onload = function () {
            loadedObj.push(this)
            num++
            if (progress) {
              progress(imgObj)
            }
            if(num >= len) {
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
