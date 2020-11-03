import { useState, useEffect } from 'react';
import { sendGetRequest } from '../common/api.js';

const putIssuesInState = async (setIssues) => {
    const issues = await sendGetRequest('/issue');
    setIssues(issues);
}

const useIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    putIssuesInState(setIssues);
  }, []);

  return issues;
}

const putIssueLabelsInState = async (setLabels) => {
  const labels = await sendGetRequest('/issue/label');
  setLabels(labels);
}

const useIssueLabels = () => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    putIssueLabelsInState(setLabels);
  }, []);

  return labels;
}



export { useIssues, useIssueLabels };