import http from 'axios'
import * as api from '@/api'
import jsonp from 'jsonp'

export default {
    addTimeLine({ commit }) {
        // 0为备用用户
        let user = api.USERS[0]
        let url = api.HOST_CONFIG.host + api.API_ROUTER_CONFIG.home_timeline +"?uid="+ user.uid + "&access_token=" + user.access_token    
        jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(data.data)
                commit("ADD_TIMELINE",data.data)
            }
        })
    },
    loadMore({ commit }){
        let user = api.USERS[0]
        let url = api.HOST_CONFIG.host + api.API_ROUTER_CONFIG.home_timeline +"?uid="+ user.uid + "&access_token=" + user.access_token +"&page=" + (this.state.page)  
        
        jsonp(url, null, function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                commit("ADD_TIMELINE",data.data);
                commit("ADD_PAGE")
            }
        })
    }

}

