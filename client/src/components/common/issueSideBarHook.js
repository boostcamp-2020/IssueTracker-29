import { useState, useEffect } from 'react';
import { sendGetRequest } from '../common/api';

const useAssignees = () => {
  const [assignees, setAssignees] = useState([]);

  useEffect(async () => {
    const users = await sendGetRequest('/user');
    setAssignees(assignees.concat(users));
  }, []);

  return assignees;
};

const useLabels = () => {
    const [labels, setLabels] = useState([]);

    useEffect(async () => {
      const data = await sendGetRequest('/label');
      setLabels(labels.concat(data));
    }, []);
  
    return labels;
};

const useMilestones = () => {
    const [milestones, setMilestones] = useState([]);

    useEffect(async () => {
      const data = await sendGetRequest('/milestone');
      setMilestones(milestones.concat(data));
    }, []);
  
    return milestones;
};


export { useAssignees, useLabels, useMilestones };
