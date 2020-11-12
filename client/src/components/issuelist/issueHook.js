import { useContext, useState, useEffect } from 'react';
import { FETCH_LABEL } from '../../reducer/label.js';
import { sendGetRequest } from '../common/api.js';
import { IssueContext, LabelContext, MilestoneContext, UserContext } from '../common/context';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const users = await sendGetRequest('/user');
    setUsers(users.map(item => ({ username: item.username, profile: item.profile })));
  }, []);

  return [users, setUsers];
};

const putIssuesInState = async (setIssues) => {
    const issues = await sendGetRequest('/issue');
    setIssues(issues.map(item => ({...item, checked: false})));
};

const useIssues = () => {
  const {issues, setIssues} = useContext(IssueContext);

  useEffect(() => {
    putIssuesInState(setIssues);
  }, []);

  return [issues, setIssues];
};


const putIssueLabelsInState = async (setIssueLabels) => {
  const issueLabels = await sendGetRequest('/issue/label');
  setIssueLabels(issueLabels);
};

const useIssueLabels = () => {
  const [issueLabels, setIssueLabels] = useState([]);

  useEffect(() => {
    putIssueLabelsInState(setIssueLabels);
  }, []);

  return issueLabels;
};

const useLabels = () => {
  const {labelState, labelDispatch} = useContext(LabelContext);

  useEffect(() => {
    labelDispatch({type: FETCH_LABEL});
  }, []);

  return labelState;
}

const putMilestonesInState = async (setMilestones) => {
  const milestones = await sendGetRequest('/milestone');
  setMilestones(milestones);
};

const useMilestones = () => {
  const {milestones, setMilestones} = useContext(MilestoneContext);

  useEffect(() => {
    putMilestonesInState(setMilestones);
  }, []);

  return milestones;
}

export { useUsers, useIssues, useIssueLabels, useLabels, useMilestones };
