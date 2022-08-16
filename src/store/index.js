import { combineReducers, createStore } from "redux"
import leftTimeReducer from "./leftTimeReducer"
import timeTypeReducer from "./timeTypeReducer"
import playReducer from "./playReducer"

const rootReducer = combineReducers({
  leftTimeReducer,
  timeTypeReducer,
  playReducer
})

export const store = createStore(rootReducer)