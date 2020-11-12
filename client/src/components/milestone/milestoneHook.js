import React, { useState, useEffect, useContext } from 'react';
import { sendGetRequest } from '../common/api';
import { MilestoneContext } from '../common/context';

const putMilestonesInState = async (setMilestones) => {
  const milestones = await sendGetRequest('/milestone');
  setMilestones(milestones);
};

const useMilestones = () => {
  const {milestones, setMilestones} = useContext(MilestoneContext);

  useEffect(() => {
    putMilestonesInState(setMilestones);
  }, []);

  return [milestones, setMilestones];
}

const useDueDate = (date = null) => {
  const [dueDate, setDueDate] = useState(date);
  const [dateColor, setDateColor] = useState('black');

  useEffect(() => {
    verifyDate(dueDate);
  }, [dueDate]);

  const verifyDate = (date) => {
    if(!date) return;
    const current = new Date();
    const dueDate = new Date(date);
    if (current.getFullYear() > dueDate.getFullYear() || current.getMonth() > dueDate.getMonth() || current.getDate() > dueDate.getDate())
      setDateColor('red');
    else
      setDateColor('black');
  };

  return { dueDate, setDueDate, dateColor };
};

export { useMilestones, useDueDate };
