import { useState, useEffect } from 'react';
import { sendGetRequest } from '../common/api.js';

const getIssueById  = async (setIssue) => {
    const issue = await sendGetRequest('/issue/:issueid');
    setIssues(issue);
}

const useIssueDetail = (id) => {
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    getIssueById(setIssue);
  }, []);

  return issues;
}

export { useIssueDetail };