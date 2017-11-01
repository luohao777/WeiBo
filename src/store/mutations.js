export default {
  ADD_TIMELINE(state, data) {
    state.homeTimeLine = state.homeTimeLine.concat(data.statuses)
    state.firstLoad = false
  },
  ADD_PAGE(state) {
    state.page = state.page + 1
  },
  CHANGE_SLIDE_BAR_BOL(state) {
    state.showSlideBar = !state.showSlideBar
  },
  CHANGE_SHOW_LOGING_IN_BOL(state) {
    state.showLoginIn = !state.showLoginIn
  },
  // getTokenUrl
  GET_TOKEN_URL(state, data) {
    console.log(data)
    state.getTokenUrl = data
  },
  // userAccessToken
  GET_ACCESS_TOKEN(state, data){
    console.log(data,"from mutations");
    state.userAccessToken = data
  },
  ADD_COOKIE (state,data){
    state.cookie = data
  }
}
