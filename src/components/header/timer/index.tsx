import { useCountdown } from "../../../hooks/useCountdown ";
import "./style.scss";

interface TimerProps {
  duration: number;
}

const Timer = ({ duration }: TimerProps) => {
  const { days, hours, minutes, seconds } = useCountdown(duration);

  return (
    <div className="container-timer">
      <p className="text-xs">SALE UP TO 60% OFF</p>
      <div className="wrapper-timer">
        <div>
          <span className="flex-timer text-2xl">
            {days} <span className="text-x">Days</span>
          </span>
          <span className="flex-timer text-2xl">
            {hours} <span className="text-x">Hours</span>
          </span>
          <span className="flex-timer text-2xl">
            {minutes} <span className="text-x">Min</span>
          </span>
          <span className="flex-timer text-2xl">
            {seconds} <span className="text-x">Sec</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
