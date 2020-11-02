import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../util/config';

const fetchData = async (path) => {
  try {
    const res = await axios.get(BASE_API_URL + path, {withCredentials: true});
    return await res.data.result;
  } catch(e) {
    console.log(e);
    return [];
  }
}

const putIssuesInState = async (setIssues) => {
    const issues = await fetchData('/issue');
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
  const labels = await fetchData('/issue/label');
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