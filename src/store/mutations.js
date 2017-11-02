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
  ADD_COOKIE (state,data){
    state.cookie = data
  },
  REFRESH ( state, data){
    state.homeTimeLine = []
    state.page = 1
  },
  SHOW_TOP_BAR_BOL (state) {
    state.showTopBarBol = !state.showTopBarBol
  }
}
