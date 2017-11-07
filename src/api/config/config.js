const app_key = {
    appKey: 1081182036,
    appSecret: '8d3f9fc1408f7b78c781c5e659b45e23',
    redirect_uri: 'http://sureinternet.applinzi.com/callback.php'
}

const users = [
    {
        name: "user1",
        uid: 2170500371,
        access_token: "2.00VSMt3CTZAwRCc80a272c54KXSA2C"
    },
    {
        name: "user2",
        uid: 5186763711,
        access_token: "2.00NLIBfFwpWKLBba2f9ce12f6yPCUD"
    }
]

const host_config = {
    local: 'http://192.168.191.1:8080/',
    sendHost: 'http://sureinternet.applinzi.com/send.php?',
    host:'https://api.weibo.com/2',
    oauth: 'https://open.weibo.cn/oauth2/authorize/'
}

const api_router_config = {
    oauth_post: '/oauth2/access_token',
    // 获取当前登录用户及其所关注（授权）用户的最新微博
    home_timeline: '/statuses/home_timeline.json',
    // 公共主页
    public_timeline: '/statuses/public_timeline.json',
    // 获取某个用户最新发表的微博列表
    user_timeline: '/statuses/user_timeline.json',
    // 根据用户ID获取用户信息
    userinfo: '/users/show.json',
    // 根据微博ID返回某条微博的评论列表
    content_comments: '/comments/show.json',
    // 发送文字微博
    send_post_text: '/statuses/update.json',
    //  发送图片微博
    send_post_image: '/statuses/upload.json',
    // 获取最新的提到登录用户的微博列表，即@我的微博
    at_me_statue: '/statuses/mentions.json',
    // 获取最新的提到当前登录用户的评论，即@我的评论
    at_me_comment: '/comments/mentions.json',
    // 获取当前登录用户所接收到的评论列表
    receive_comment: '/comments/to_me.json',
    // 获取当前登录用户所发出的评论列表
    send_comment: '/comments/by_me.json',
    // 获取用户的粉丝列表
    my_follower: '/friendships/followers.json',
    // 获取用户的关注列表
    my_friend: '/friendships/friends.json',
    //短链接解析接口
    short_expend: '/short_url/expand.json'
}


export const APP_KEY = app_key
export const HOST_CONFIG = host_config
export const API_ROUTER_CONFIG = api_router_config
export const USERS = users