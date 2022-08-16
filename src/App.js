import './App.css';
import SessionTime from './components/Session_time';
import BreakTime from './components/Break_time';
import Display from './components/Display';


function App() {
  return (
    <div className="app">
      <div className='progress-bar horizontal_top' />
      <div className='progress-bar horizontal_bottom' />
      <div className='progress-bar vertical_left' />
      <div className='progress-bar vertical_right' />
      <div className="clock">
        <div className="clock__title">
          25+5 Clock
        </div>
        <div className="clock__display">
          <Display />
        </div>
        <div className="clock__time_ratio">
          <div className="time_ratio__break">
            <BreakTime />
          </div>
          <div className="time_ratio__session">
            <SessionTime />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;