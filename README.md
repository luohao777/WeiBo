# weibo

> A Vue.js project


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

已知问题/未完成：

page页面会缓存下来。=> 重写缓存逻辑

pictures组件也需要添加预加载

个人主页显示20条微博

先这样吧

## TODO

- [x] 通过微博api获取主页数据/评论/...

- [x] 展示缩略图以及点击缩略图放大/滑动展示
- [x] 返回timeLine时，回到上次阅读的位置
- [x] 发布微博/点赞/评论/转发
- [ ] 个人信息/关注/粉丝

------

后端

- [x] 授权接口
- [x] 写入接口

------
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
