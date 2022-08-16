import { useDispatch, useSelector } from "react-redux";

const Session_time = () => {
  const dispatch = useDispatch()
  const session_time = useSelector(state => state.leftTimeReducer.leftTimeSession)
  const play_status = useSelector(state => state.playReducer.status)
  const timeType = useSelector(state => state.timeTypeReducer.timeType)

  const add_time = () => {
    if (timeType === "Session") dispatch({ type: "ADD_TIME" })
    dispatch({ type: "ADD_LEFT_TIME" })
  }
  const less_time = () => {
    if (timeType === "Session") dispatch({ type: "LESS_TIME" })
    dispatch({ type: "LESS_LEFT_TIME" })
  }

  const mouseDownHandler = (action) => {
    let mouseDownInterval = setInterval(() => action(), 120)
    document.addEventListener("mouseup", () => {
      clearInterval(mouseDownInterval)
    })
  }

  return (
    <div className="clock__break_session_time">
      <div className="clock__session_time__title" >Session Time</div>
      <div className="clock__break_session_time" style={{ flexDirection: 'row' }}>
        <button className="button-82-pushable" onClick={add_time} onMouseDown={() => mouseDownHandler(add_time)} disabled={play_status}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">
            +
          </span>
        </button>
        <div className="clock__display_time">
          {session_time}
        </div>
        <button className="button-82-pushable" onClick={less_time} onMouseDown={() => mouseDownHandler(less_time)} disabled={play_status}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">
            -
          </span>
        </button>
      </div>
    </div>
  )
}

export default Session_time;