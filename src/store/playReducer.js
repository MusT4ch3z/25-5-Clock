const play = {
  status: false
}

const playReducer = (state = play, action) => {
  switch (action.type) {
    case "PLAY": {
      if(state.status){
      return { ...state, status: false}
    }else{
      return { ...state, status: true}
    }
    }
    case "PAUSE": {
      return { ...state, status: false }
    }
    default:
      return state;
  }
}

export default playReducer