const mutations = {
  setGameMode (state, newState) {
    state.soloGameMode = newState
  },
  setSocket(state,newState){
    state.socket = newState
  },
  setUserInfo(state,newState){
    state.userInfo = newState
  },
  setLoadingState(state,newState){
    state.loading = newState
  },
  setRoomInfo(state,newState){
    state.roomInfo = newState
  },
  setIndex(state,newState){
    state.index = newState
  }
  
}
export default mutations
