import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';

const TemperatureComponent = () => {
  const [temperature, setTemperature] = useState(0); // Initialize with a default value

  const getTempColor = (temp) => {
    if (temp <= 29) {
      return 'linear-gradient(to right, rgb(12, 175, 121),rgb(3, 107, 73))';
    } else if (temp >= 30 && temp <= 74) {
      return 'linear-gradient(to right, rgb(55, 142, 214),rgb(2, 63, 112))';
    } else if (temp >= 75 && temp <= 99) {
      return 'linear-gradient(to right, rgb(216, 118, 73),rgb(177, 75, 27))';
    } else {
      return 'rgb(240, 5, 5)';
    }
  };

  const getTempDisplay = (temp) => {
    if (temp <= 29) {
      return 'cold';
    } else if (temp >= 30 && temp <= 74) {
      return 'warm/hot';
    } else if (temp >= 75 && temp <= 99) {
      return 'super hot';
    } else {
      return 'hell';
    }
  };

  const [tempColor, setTempColor] = useState(getTempColor(temperature));
  const [tempDisplay, setTempDisplay] = useState(getTempDisplay(temperature));

  useEffect(() => {
    setTempColor(getTempColor(temperature));
    setTempDisplay(getTempDisplay(temperature));
  }, [temperature]);

  return (
    <div style={{ background: tempColor, padding: '20px', color: 'white', textAlign: 'center' }}>
      <h1>Temperature: {temperature}°F</h1>
      <p>It's {tempDisplay}</p>
      <div class="tempButton">
        <button><FontAwesomeIcon onClick={() => setTemperature(temperature + 1)} size='2x' icon={faPlus}/ ></button>
        <button><FontAwesomeIcon onClick={() => setTemperature(temperature - 1)} size='2x' icon={faMinus}/></button>
      </div>
    </div>
  );
};

export default TemperatureComponent;
