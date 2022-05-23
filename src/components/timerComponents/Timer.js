import { UseTimer } from "./UseTimer";

export const Timer = () => {
    const { pause, reset, running, seconds, start, stop } = UseTimer();

	

	return (
		<div className="timer">
		  <h1 className="seconds">{seconds}</h1>
		  <div className="timer-buttons">
		  <button className="start" onClick={running ? pause : start}>Start/Pause</button>
		  <button className="reset" onClick={reset}>Reset</button>
		  <button className="stop" onClick={stop}>Stop</button>
		  </div>
		</div>
	  );
	};