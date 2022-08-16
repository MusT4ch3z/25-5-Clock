import { useDispatch, useSelector } from "react-redux";

const Break_time = () => {
  const dispatch = useDispatch()
  const break_time = useSelector(state => state.leftTimeReducer.leftTimeBreak)
  const play_status = useSelector(state => state.playReducer.status)
  const timeType = useSelector(state => state.timeTypeReducer.timeType)

  const add_time = () => {
    if (timeType === "Break") dispatch({ type: "ADD_LEFT_TIME" });
    dispatch({ type: "ADD_BREAK_TIME" });
  }
  const less_time = () => {
    if (timeType === "Break") dispatch({ type: "LESS_LEFT_TIME" });
    dispatch({ type: "LESS_BREAK_TIME" });
  }

  const mouseDownHandler = (action) => {
    let mouseDownInterval = setInterval(() => action(), 120)
    document.addEventListener("mouseup", () => {
      clearInterval(mouseDownInterval)
    })
  }

  return (
    <div className="clock__break_session_time">
      <div className="clock__break_time__title" >Break Time</div>
      <div className="clock__break_session_time" style={{ flexDirection: 'row' }}>
        <button className="button-82-pushable" onClick={add_time} onMouseDown={() => mouseDownHandler(add_time)} disabled={play_status}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">
            +
          </span>
        </button>
        <div className="clock__display_time">
          {break_time}
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

export default Break_time;