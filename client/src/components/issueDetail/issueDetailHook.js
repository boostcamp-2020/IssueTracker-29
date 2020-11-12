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

  return [issue, setIssue];
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

  return [comments, setComments];
}

const getUserById = async (setUser, id) => {
  const user = await sendGetRequest(`/user/${id}`);
  console.log(user)
  console.log(id)

  setUser(user);
}

const useUser = (id) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    getUserById(setUser, id);
  }, []);
  return user;
}

export { useIssueDetail, useIssueDetailLabels, useIssueDetailComments, useUser };