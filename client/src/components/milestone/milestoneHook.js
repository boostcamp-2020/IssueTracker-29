import React, { useEffect, useContext } from 'react';
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

export { useMilestones };
