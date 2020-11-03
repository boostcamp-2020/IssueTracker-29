import { useState, useEffect } from 'react';
import { sendGetRequest } from '../common/api.js';

const putIssuesInState = async (setIssues) => {
    const issues = await sendGetRequest('/issue');
    setIssues(issues.map(item => ({...item, checked: false})));
};

const useIssues = () => {
  const [issues, setIssues] = useState([]);

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


const putLabelsInState = async (setLabels) => {
  const labels = await sendGetRequest('/label');
  setLabels(labels);
};

const useLabels = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    putLabelsInState(setLabels);
  }, []);

  return labels;
}

export { useIssues, useIssueLabels, useLabels };