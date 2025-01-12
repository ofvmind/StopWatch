export const Timer = ({ timer, start, status, pause, reset }) => {
  
  return (
    <div className="center-column stopwatch">
      <div className={`center timer ${status == 1 && 'active'}`}>
        <div className="center numbers">
          <p>{String(timer.hours).padStart(2, '0')}</p>
        </div>
        <span>:</span>
        <div className="center numbers">
          <p>{String(timer.minutes).padStart(2, '0')}</p>
        </div>
        <span>:</span>
        <div className="center numbers">
          <p>{String(timer.seconds).padStart(2, '0')}</p>
        </div>
        <span>:</span>
        <div className="center numbers">
          <p>{String(timer.miliSeconds).padStart(2, '0')}</p>
        </div>
      </div>
      <div className="center buttons">
        <button disabled={status == 2} onClick={start}>{status === 0 ? "START" : "CHECK"}</button>
        <button disabled={!status} onClick={pause}>{status == 2 ? "UNPAUSE" : "PAUSE"}</button>
        <button disabled={!status} onClick={reset}>RESET</button>
      </div>
    </div>
  );
};