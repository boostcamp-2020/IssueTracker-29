import React, { useEffect, useState } from 'react';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365 * DAY;

const calculateTime = (milisecondTime) => {
  if (milisecondTime < SECOND) {
    return ['now', ''];
  } 
  if (milisecondTime < MINUTE) {
    const time = Math.floor(milisecondTime / SECOND);
    return [time, `${time <= 1 ? 'second' : 'seconds'} ago` ];
  }

  if (milisecondTime < HOUR) {
    const time = Math.floor(milisecondTime / MINUTE);
    return [time, `${time === 1 ? 'minute' : 'minutes'} ago`];
  }

  if (milisecondTime < DAY) {
    const time = Math.floor(milisecondTime / HOUR);
    return [time, `${time === 1 ? 'hour' : 'hours'} ago`];
  }

  if (milisecondTime < YEAR) {
    const time = Math.floor(milisecondTime / DAY);
    return [time, `${time === 1 ? 'day' : 'days'} ago`];
  }

  const time = Math.floor(milisecondTime / YEAR);
  return [time, `${time === 1 ? 'year' : 'years'} ago`];
};

const DatePassedViewer = (props) => {
  const [datetime, setDateTime] = useState(new Date() - new Date(props.datetime));
  useEffect(() => {
    setDateTime(new Date() - new Date(props.datetime));
  }, [props.datetime]);

  const [time, unit] = calculateTime(datetime);

  return (<span>{`${time} ${unit}`}</span>)
};

export default DatePassedViewer;
