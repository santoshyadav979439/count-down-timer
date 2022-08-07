import { useEffect, useState } from "react";
import "./styles.css";
let timeId;
export default function App() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  useEffect(() => {
    const time = date.toLocaleString();
    setTime(time);
  }, [date]);

  const startTimer = () => {
    timeId = setInterval(() => {
      setDate(new Date(date.setMilliseconds(date.getMilliseconds() - 1000)));
    }, 1000);
  };
  function stopTimer() {
    clearInterval(timeId);
  }
  return (
    <div className="App">
      <h6>{time}</h6>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
