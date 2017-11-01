const app_key = {
    appKey: 1081182036,
    appSecret: '8d3f9fc1408f7b78c781c5e659b45e23',
    redirect_uri: 'http://sureinternet.applinzi.com/cb.php'
}
// "https://api.weibo.com/oauth2/authorize?response_type=code&client_id=585738332&redirect_uri=http%3A%2F%2Fwww.huya.com%2Fudb_web%2Fudbport2.php%3Fdo%3Dthe3AuthorizeCallBack%26loginType%3Dweibo&state=778fa9c55b9ef9e8372b0f705ec5a407&scope="
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
    host: 'https://api.weibo.com',
    oauth: 'https://open.weibo.cn/oauth2/authorize/'

}

const api_router_config = {
    oauth_post: '/oauth2/access_token',
    // 获取当前登录用户及其所关注（授权）用户的最新微博
    home_timeline: '/statuses/home_timeline.json',
    public_timeline: '/statuses/public_timeline.json',
    my_content: '/statuses/user_timeline.json',
    userinfo: '/users/show.json',
    content_comments: '/comments/show.json',
    send_post_text: '/statuses/update.json',
    send_post_image: '/statuses/upload.json',
    at_me_statue: '/statuses/mentions.json',
    at_me_comment: '/comments/mentions.json',
    receive_comment: '/comments/to_me.json',
    send_comment: '/comments/by_me.json',
    my_follower: '/friendships/followers.json',
    my_friend: '/friendships/friends.json'
}

const short_url_config = {
    //短链接解析接口
    short_expend: '/short_url/expand.json'
}

export const APP_KEY = app_key
export const HOST_CONFIG = host_config
export const API_ROUTER_CONFIG = api_router_config
export const SHORT_URL_CONFIG = short_url_config
export const USERS = users