import React, { useState, useEffect } from "react";

const Countdown = ({ duration }) => {
  let target;
  if (typeof duration === "number") {
    // duration given as days
    target = Date.now() + duration * 24 * 60 * 60 * 1000;
  } else {
    // duration given as date string
    target = new Date(duration).getTime();
  }

  const [time, setTime] = useState(target - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) {
        clearInterval(interval);
        setTime(0);
      } else {
        setTime(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  const getTimeParts = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours % 24;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeParts(time);

  return (
    <div className="flex gap-2">
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item, index) => (
        <div
          key={index}
          className="min-w-14 bg-gray-600 text-white rounded-lg px-1 py-3 flex flex-col items-center"
        >
          <div className="text-lg lg,xl:text-xl font-bold rounded-md min-w-[60px] text-center">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
