import { useState, useEffect } from 'react';
import { sendGetRequest } from '../common/api.js';

const getIssueById  = async (setIssue, id) => {
    const issue = await sendGetRequest(`/issue/${id}`);
    setIssue(issue);
}

const useIssueDetail = (id) => {
  const [issue, setIssue] = useState([]);

  useEffect(() => {
    getIssueById(setIssue, id);
  }, []);

  return issue;
}

const getIssueLabelsById = async (setLabels, id) => {
  const labels = await sendGetRequest(`/issue/${id}/label`);

  setLabels(labels);
}

const useIssueDetailLabels = (id) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    getIssueLabelsById(setLabels, id);
  }, []);

  return labels;
}

const getIssueCommentsById = async (setComments, id) => {
  const comments = await sendGetRequest(`/issue/${id}/comment`);

  setComments(comments);
}

const useIssueDetailComments = (id) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getIssueCommentsById(setComments, id);
  }, []);

  return comments;
}

export { useIssueDetail, useIssueDetailLabels, useIssueDetailComments };