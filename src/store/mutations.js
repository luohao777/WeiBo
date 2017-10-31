
export default {
  ADD_TIMELINE(state, data) {
    state.homeTimeLine = state.homeTimeLine.concat(data.statuses)
    state.firstLoad = false 
  },
  ADD_PAGE(state){
    state.page =  state.page + 1
  },
  CHANGE_SLIDE_BAR_BOL (state){
    state.showSlideBar = !state.showSlideBar
  }
    
  
}
