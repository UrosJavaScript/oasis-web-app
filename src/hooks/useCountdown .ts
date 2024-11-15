import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdown = (duration: number): Countdown => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setTimeout(
      () => setTime((prevTime) => prevTime - 1000),
      1000
    );

    return () => clearTimeout(timer);
  }, [time]);

  const getFormattedTime = (milliseconds: number) => {
    const total_seconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(total_seconds / (60 * 60 * 24));
    const hours = Math.floor((total_seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((total_seconds % (60 * 60)) / 60);
    const seconds = total_seconds % 60;
    return { days, hours, minutes, seconds };
  };

  return getFormattedTime(time);
};
