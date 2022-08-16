import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alarmSrc from "../sound/alarm.wav"

const Display = () => {
  const dispatch = useDispatch();

  const play_status = useSelector(state => state.playReducer.status)
  let left_time = useSelector(state => state.leftTimeReducer.leftTime)
  const timeType = useSelector(state => state.timeTypeReducer.timeType)
  const session_time_min = useSelector(state => state.leftTimeReducer.leftTimeSession)
  const break_time_min = useSelector(state => state.leftTimeReducer.leftTimeBreak)

  let minutes = Math.floor(left_time / 60);
  let seconds = left_time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds
  minutes = minutes < 10 ? "0" + minutes : minutes
  let timeout = 0;

  const handlePlay = () => {
    clearTimeout(timeout);
    dispatch({ type: "PLAY" })
  }

  const resetTimer = () => {
    if (!left_time && timeType === "Session") {
      dispatch({ type: "SWITCH_LEFT_TIME_TO_BREAK" })
      dispatch({ type: "BREAK_TIME" })
    }
    if (!left_time && timeType === "Break") {
      dispatch({ type: "SWITCH_LEFT_TIME_TO_SESSION" })
      dispatch({ type: "SESSION_TIME" })
    }
  }

  const handleReset = () => {
    clearTimeout(timeout)
    dispatch({ type: "PAUSE" })
    dispatch({ type: "RESET_LEFT_TIME" })
    dispatch({ type: "RESET_LEFT_TIME_SESSION" })
    dispatch({ type: "RESET_LEFT_TIME_BREAK" })
    dispatch({ type: "SESSION_TIME" })
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, [])

  const handleKeydown = (e) => {
    if (e.keyCode === 32) {
      handlePlay();
    }
  }

  const playAlarm = () => {
    const alarm = new Audio(alarmSrc);
    alarm.currentTime = 0;
    alarm.volume = 0.3;
    alarm.play();
  }

  const clock = () => {
    if (play_status) {
      timeout = setTimeout(() => {
        if (left_time && play_status) {
          dispatch({ type: "COUNTDOWN" })
        }
      }, 1000 - (new Date().getTime() - 1000) % 100)
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  const [playPause, setplayPause] = useState('Play');

  useEffect(() => {
    clock()
    if (play_status) {
      progress_bar__setting();
      setplayPause('Pause');
      if (left_time === 1 || left_time === 10) {
        playAlarm()
      }
    } else {
      setplayPause('Play')
    }
  }, [play_status, left_time, timeout, timeType])

  const htop = document.querySelector('.horizontal_top')
  const hbot = document.querySelector('.horizontal_bottom')
  const vleft = document.querySelector('.vertical_left')
  const vright = document.querySelector('.vertical_right')

  const progress_bar__setting = () => {
    let progress = null;
    if (timeType === "Session") {
      progress = (1 - (left_time / (session_time_min * 60))) * 100;
    }
    if (timeType === "Break") {
      progress = (1 - (left_time / (break_time_min * 60))) * 100;
    }
    htop.style.setProperty('--progress_bar', progress + '%');
    hbot.style.setProperty('--progress_bar', progress + '%');
    vleft.style.setProperty('--progress_bar', progress + '%');
    vright.style.setProperty('--progress_bar', progress + '%');
  }

  return (
    <div className="clock__display">
      <div className="clock__display_time">
        <div className="clock__display_title">{timeType}</div>
        <div>{minutes}:{seconds}</div>
      </div>
      <div className="row">
        <button className="button-82-pushable" role="button" onClick={handlePlay} style={{ minWidth: '140px' }}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">
            {playPause}
          </span>
        </button>
        <button className="button-82-pushable" role="button" onClick={handleReset} style={{ minWidth: '140px' }}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">
            Reset
          </span>
        </button>
      </div>
    </div>
  )
}

export default Display;