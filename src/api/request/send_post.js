import axios from 'axios';
import { USERS, HOST_CONFIG, API_ROUTER_CONFIG } from '../config/config'
import store from '../../store/'


export const share = (status, okCallback, errorCallback) => {
    // 利用分享接口发送微博    
    // 向我的服务器发送Get请求
    let url = HOST_CONFIG.host + "method=share" + "&text=" + encodeURI(status.text)  + " http://sureinternet.applinzi.com"
    axios.get(url)
        .then(function (response) {
            okCallback(response)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}
const send_comment = (status, okCallback, errorCallback) => {
    // 评论一条微博
    let url = HOST_CONFIG.host + "method=send_comment" + "&text=" + encodeURI(status.text) + "&id=" + status.id
    axios.get(url)
        .then(function (response) {
            okCallback(response)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}
const comments_reply = (status, okCallback, errorCallback) => {
    // 回复一条评论
    let url = HOST_CONFIG.host + "method=comments_reply" + "&text=" + status.text + "&id=" + status.id + "&cid" + status.cid

    axios.get(url)
        .then(function (response) {
            okCallback(response)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        }) 
}

export const comments_destroy = (status, okCallback, errorCallback) => {
    // 删除一条我的评论
    let url = HOST_CONFIG.host + "method=comments_destroy" + "&cid=" + status.cid
    axios.get(url)
        .then(function (response) {
            okCallback(response)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}


export const favorites_create = (status, okCallback, errorCallback) => {
    // 收藏一条微博
    let url = HOST_CONFIG.host + "method=favorites_create" + "&id=" + status.id
    axios.get(url)
        .then(function (response) {
            okCallback(response)
        })
        .catch(function (error) {
            console.log(error);
            errorCallback(error)
        })
}



