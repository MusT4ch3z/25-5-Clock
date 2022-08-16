const timeTypeState = {
  timeType: "Session"
}

const timeTypeReducer = (state = timeTypeState, action) => {
  switch (action.type) {
    case "SESSION_TIME": {
      return { ...state, timeType: "Session" }
    }
    case "BREAK_TIME": {
      return { ...state, timeType: "Break" }
    }
    default:
      return state 
  }
}

export default timeTypeReducer