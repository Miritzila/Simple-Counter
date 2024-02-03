import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [currentSeconds, setCurrentSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const secondsString = currentSeconds.toString().padStart(6, '0');
  const digits = secondsString.split('');

  const renderDigits = () => {
    return digits.map((digit, index) => (
      <div className="digito" key={index}>{digit}</div>
    ));
  };

  return (
    <div className="contador container-fluid">
      <div className="digito"><i className="far fa-clock fa-2xl"></i></div>
      {renderDigits()}
    </div>
  );
};

export default SecondsCounter;