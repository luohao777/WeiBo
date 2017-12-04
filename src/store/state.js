
export default {
  //----------------- 数据 -----------------//
   // 时间线数据，当前Page
    homeTimeLine: [],
    page: 1, 
    // 当前微博评论列表
    comments:[],
    // 用户社交资料
    userInfo:{},
    getTokenUrl: "",
    // 用户登录信息相关，授权后获得
    loginInfo: "",
    //大图滑动预览页面相关数据
    showImgArr: [],
    nowIndex:0,
  //----------------- 状态 -----------------//
  // 是否显示侧边栏
  showSlideBar: false,
  // 是否登录
    isLoginIn:false,
   // 测试时为true，并在./api/config中预设token
    testModel : false
   
}
