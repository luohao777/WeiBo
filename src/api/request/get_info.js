import jsonp from 'jsonp'
import * as api from '../config/config'

export const userinfo  = (url,commit) => {
    jsonp(url, null, function (err, data) {
        if (err) {
            console.error(err)
        } else {
            console.log(data)
            commit("ADD_TIMELINE", data.data)
        }
    })
}

export const exportShort = (shortUrls,commit) => {
    let user = api.USERS[1]
    let url = api.HOST_CONFIG.host + api.API_ROUTER_CONFIG.short_expend
    let param ='?access_token=' + user['access_token']
    for(let item of shortUrls){
        param +='&url_short=' + encodeURIComponent(item)
    }
    console.log("it run!")

    jsonp(url+param,null,function(err,data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data.data)
            return data.data
        }
    })
}
 