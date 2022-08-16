const leftTimeState = {
  leftTime: 1500,
  leftTimeSession: 25,
  leftTimeBreak: 5
}

const leftTimeReducer = (state = leftTimeState, action) => {
  switch (action.type) {
    case "COUNTDOWN": {
      return { ...state, leftTime: state.leftTime - 1 }
    }
    case "ADD_LEFT_TIME": {
      return { ...state, leftTime: state.leftTime + 60 }
    }
    case "LESS_LEFT_TIME": {
      if (state.leftTime <= 60) { return { ...state, leftTime: state.leftTime = 60 } } else {
        return { ...state, leftTime: state.leftTime - 60 }
      }
    }
    case "SWITCH_LEFT_TIME_TO_BREAK": {
      return { ...state, leftTime: state.leftTimeBreak * 60 }
    }
    case "SWITCH_LEFT_TIME_TO_SESSION": {
      return { ...state, leftTime: state.leftTimeSession * 60 }
    }
    case "RESET_LEFT_TIME": {
      return { ...state, leftTime: 1500 }
    }


    case "ADD_TIME":
      return { ...state, leftTimeSession: state.leftTimeSession + 1 }
    case "LESS_TIME":
      if (state.leftTimeSession == 1) { return { ...state, leftTimeSession: state.leftTimeSession = 1 } } else {
        return { ...state, leftTimeSession: state.leftTimeSession - 1 }
      }
    case "RESET_LEFT_TIME_SESSION": {
      return { ...state, leftTimeSession: 25 }
    }


    case "ADD_BREAK_TIME":
      return { ...state, leftTimeBreak: state.leftTimeBreak + 1 }
    case "LESS_BREAK_TIME":
      if (state.leftTimeBreak == 1) { return { ...state, leftTimeBreak: state.leftTimeBreak = 1 } } else {
        return { ...state, leftTimeBreak: state.leftTimeBreak - 1 }
      }
    case "RESET_LEFT_TIME_BREAK": {
      return { ...state, leftTimeBreak: 5 }
    }


    default:
      return state
  }
}
export default leftTimeReducer