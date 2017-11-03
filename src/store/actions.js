import http from 'axios'
import * as api from '@/api/config/config'
import jsonp from 'jsonp'

export default {
    // 获取 请求token 的URL
    getTokenUrl ({ commit }) {
        let url = 'http://sureinternet.applinzi.com/getcode.php'
        http.get(url).then(res => {
            commit("GET_TOKEN_URL", res.data)
        })
    },
    // 通过上一个函数返回的URL请求token
    loginIn ({ state, commit }) {
        let url = state.getTokenUrl
        window.location.href = url
    },
    // 获取主页时间线, 将数据并入store中timeLine
    addTimeLine({ state, commit }) {
        let user, url
        if (state.testModel) {
            // 测试模式下使用
            user = api.USERS[0]
        } else {
            user = state.cookie
        }
        url = api.HOST_CONFIG.host + api.API_ROUTER_CONFIG.home_timeline + "?uid=" + user.uid + "&access_token=" + user.access_token + "&page=" + state.page
        commit("ADD_PAGE")
        jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message)
            } else {
                console.log(data)
                commit("ADD_TIMELINE", data.data)
            }
        })
    },
    refresh ({ state, commit }) {
        commit("REFRESH")
    },
    // 获取单条微博评论
    getComments ({ state,commit },id) {
        let user, url
        if (state.testModel) {
            // 测试模式下使用
            user = api.USERS[0]
        } else {
            user = state.cookie
        }
        url = api.HOST_CONFIG.host + api.API_ROUTER_CONFIG.content_comments +  "?access_token=" + user.access_token+"&id="+id

        jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message)
            } else {
                console.log(data)
                commit("ADD_COMMENTS",data.data)
            }       
            
        })


    }
}

