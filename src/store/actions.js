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
    addTimeLine({ state, commit }) {
        let user, url
        if (state.testModel) {
            // 测试模式下使用
            user = api.USERS[1]
        } else {
            user = state.cookie
        }
        url = api.HOST_CONFIG.host + api.API_ROUTER_CONFIG.home_timeline + "?uid=" + user.uid + "&access_token=" + user.access_token + "&page=" + state.page
        commit("ADD_PAGE")
        jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message)
            } else {
                commit("ADD_TIMELINE", data.data)
            }
        })
    },
    refresh ({ state, commit }) {
        commit("REFRESH")
    }
}

