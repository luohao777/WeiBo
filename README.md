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



## TODO

- [x] 通过微博api获取主页数据/评论/...


- [x] 展示缩略图以及点击缩略图放大/滑动展示
- [x] 返回timeLine时，回到上次阅读的位置
- [x] 发布微博
- [ ] 视频Url解析
- [ ] 发布微博/点赞/评论/转发(后端实现)
- [ ] 个人信息/关注/粉丝

------

后端

- [x] 授权接口
- [x] 写入接口


------

//  重构图片->变成地址

!!! Person界面 topbar展示头像和ID?


## ...

### OAuth2.0 授权



### 微博内容Url解析

1. 正则表达式找到text里的短链接

2. 使用 **短链接普通转换接口** 获取信息

   > Host：https://api.weibo.com/2/short_url/expand.json 
   >
   > 请求参数:  短链接  url_short=http://t.cn/RWVPQL1
   >
   > 完整请求:https://api.weibo.com/2/short_url/expand.json?url_short=http://t.cn/RWVPQL1

3. 写好对应数据类型的模版, return 类型的数据类型决定模版类型

   | 返回值字段     | 字段类型    | 字段说明                             |
   | --------- | ------- | -------------------------------- |
   | url_short | string  | 短链接                              |
   | url_long  | string  | 原始长链接                            |
   | type      | int     | 链接的类型，0：普通网页、1：视频、2：音乐、3：活动、5、投票 |
   | result    | boolean | 短链的可用状态，true：可用、false：不可用。       |

点击小图 可全屏 滑动 展示大图

大图: http://wx1.sinaimg.cn/large/006oBZ57ly1fkwwmgid4qj30ll0h3thk.jpg

中图: http://wx1.sinaimg.cn/bmiddle/006oBZ57ly1fkwwmgid4qj30ll0h3thk.jpg

缩略图: http://wx2.sinaimg.cn/thumbnail/006oBZ57ly1fkwwxw1yr4j30j61mvwmz.jpg

一个display为None的容器 , 点击小图事件接受两个参数 图片数组及x





## 接口

### 短链接

#### 短链接普通转换接口

> **short_url/expand** 
>
> 将一个或多个短链接还原成原始的长链接



> Host：https://api.weibo.com/2/short_url/expand.json



```
{
"urls": [
	{
		"result": true,
		"url_short": "http://t.cn/h4DwT1",
		"url_long": "http://s.baidu.com/",
		"type": 0,
		"transcode": 0
	}
]}
```







For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
