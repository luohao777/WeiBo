export default {
  ADD_TIMELINE(state, data) {
    state.homeTimeLine = state.homeTimeLine.concat(data.statuses)
  },
  ADD_PAGE(state) {
    state.page = state.page + 1
  },
  CHANGE_SLIDE_BAR_BOL(state) {
    state.showSlideBar = !state.showSlideBar
  },
  CLOSE_SLIDE_BAR (state) {
      console.log(1)
    state.showSlideBar = false
  },
  CHANGE_SHOW_LOGING_IN_BOL(state) {
    state.showLoginIn = !state.showLoginIn
  },
  // getTokenUrl
  GET_TOKEN_URL(state, data) {
    state.getTokenUrl = data
  },
  // userAccessToken
  GET_ACCESS_TOKEN(state, data){
    state.userAccessToken = data
  },
  ADD_LOGIN_INFO (state,data){
    state.loginInfo = data
  },
  REFRESH ( state, data){
    state.homeTimeLine = []
    state.page = 1
  },
  ADD_COMMENTS (state,data) {
    console.log(data)
    state.comments = data
  },
  GET_PERSON_INFO (state,data){
    state.userInfo = data
  }
}
