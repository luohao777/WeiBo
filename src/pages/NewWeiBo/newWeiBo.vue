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
    </div>
</template>
<script>
import { share } from "@/api/request/send_post";

export default {
  data() {
    return {
      new: {
        created_at: "Mon Dec 13 14:56:03 +0800 2010",
        text: "abc",
        truncated: false,
        in_reply_to_status_id: "",
        annotations: [
          {
            type2: 123
          }
        ],
        in_reply_to_screen_name: "",
        geo: null,
        user: {
          name: "siegetest2",
          domain: "",
          geo_enabled: true,
          followers_count: 0,
          statuses_count: 3,
          favourites_count: 0,
          city: "8",
          description: "",
          verified: false,
          id: 1854835127,
          gender: "m",
          friends_count: 20,
          screen_name: "siegetest2",
          allow_all_act_msg: false,
          following: false,
          url: "",
          profile_image_url: "http://tp4.sinaimg.cn/1854835127/50/1291709848/1",
          created_at: "Thu Nov 11 00:00:00 +0800 2010",
          province: "11",
          location: "北京 海淀区"
        },
        favorited: false,
        in_reply_to_user_id: "",
        id: 4288574373,
        source:
          '<a href="http://open.t.sina.com.cn" rel="nofollow">微博开放平台接口</a>'
      },
      active: false,
      text: ""
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
    sendText() {
      let state = {}
      state.text = this.text
      share(state,(res)=>{
        console.log("发送成功")
        console.log(res)
      },(err)=>{
        console.log("发送失败",err)
      })
    },
    close() {
      this.$router.go(-1)
      this.$store.commit("SHOW_TOP_BAR_BOL")
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
}
</style>