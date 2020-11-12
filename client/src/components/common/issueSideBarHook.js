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

const getIssueMilestone  = async (setIssue, id) => {
  const issue = await sendGetRequest(`/issue/${id}`);
  setIssue(issue);
}

const useIssueMilestone = (id) => {
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    getIssueMilestone(setIssue, id);
  }, []);

  return issue;
}

const useIssueAssignees = (id) => {
  const [assignees, setAssignees] = useState([]);

  useEffect(async () => {
    const users = await sendGetRequest(`/issue/${id}/assigns`);
    setAssignees(users);
  }, []);

  return assignees;
};

const useIssueLabels = (id) => {
  const [labels, setLabels] = useState([]);

  useEffect(async () => {
    const data = await sendGetRequest(`/issue/${id}/label`);
    setLabels(data);
  }, []);

  return labels;
};

export { useAssignees, useLabels, useMilestones, useIssueMilestone, useIssueAssignees, useIssueLabels };
