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
