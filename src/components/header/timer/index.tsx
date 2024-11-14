import "./style.scss";

const Timer = () => {
  return (
    <div className="container-timer">
      <p className="text-xs">SALE UP TO 60% OFF</p>
      <div className="wrapper-timer">
        <div>
          <span className="flex-timer text-2xl">
            7 <span className="text-x">Days</span>
          </span>
          <span className="flex-timer text-2xl">
            13 <span className="text-x">Hours</span>
          </span>
          <span className="flex-timer text-2xl">
            26 <span className="text-x">Min</span>
          </span>
          <span className="flex-timer text-2xl">
            36 <span className="text-x">Sec</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
