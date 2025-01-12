import { useState } from "react";
import { Timer } from "./components/Timer";
import { Records } from "./components/Records";

function App() {

  const [timer, setTimer] = useState({hours: 0, minutes: 0, seconds: 0, miliSeconds: 0});
  const [intv, setIntv] = useState(null);
  const [status, setStatus] = useState(0);
  //status 0 - таймер не запущен
  //status 1 - таймер запущен
  //status 2 - таймер приостановлен (пауза)
  const [records, setRecords] = useState([]);

  let updatedHours = timer.hours;
  let updatedMinutes = timer.minutes;
  let updatedSeconds = timer.seconds;
  let updatedMiliSeconds = timer.miliSeconds;

  function start() {
    switch(status) {
      case 0:
        setIntv(setInterval(run, 10));
        setStatus(1);
        break;
      case 1:
        setRecords([...records, timer]);
        break;
    }
  }

  function run() {
    updatedMiliSeconds++;

    if (updatedMiliSeconds == 100) {
      updatedSeconds++;
      updatedMiliSeconds = 0;
    }
    if (updatedSeconds == 60) {
      updatedMinutes++;
      updatedSeconds = 0;
    }
    if (updatedMinutes == 60) {
      updatedHours++;
      updatedMinutes = 0;
    }
    
    setTimer({hours: updatedHours, minutes: updatedMinutes, seconds: updatedSeconds, miliSeconds: updatedMiliSeconds});
  }

  function pause() {
    if (status == 1) {
      setIntv(clearInterval(intv));
      setStatus(2);
    } else if (status == 2) {
      setIntv(setInterval(run, 10));
      setStatus(1);
    }
  }

  function reset() {
    setIntv(clearInterval(intv));
    setStatus(0);
    setTimer({hours: 0, minutes: 0, seconds: 0, miliSeconds: 0});
  }

  return (
    <section className="center-column wrapper">
      <Timer timer={timer} start={start} status={status} pause={pause} reset={reset}/>
      <Records records={records} setRecords={setRecords}/>
    </section>
  );
}

export default App;
