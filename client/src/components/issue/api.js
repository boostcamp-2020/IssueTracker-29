import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../util/config';

const fetchIssues = async () => {
  let data;
  try {
    const res = await axios.get(BASE_API_URL + '/issue', {withCredentials: true});
    console.log(res);
    data = res.data.result;
  } catch(e) {
    console.log(e);
    data = [];
  }
  
  return data;
}

const putIssues = async (setIssues) => {
    const issues = await fetchIssues();
    setIssues(issues);
}

const useIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    putIssues(setIssues);
  }, [])

  return issues;
}

export { useIssues };