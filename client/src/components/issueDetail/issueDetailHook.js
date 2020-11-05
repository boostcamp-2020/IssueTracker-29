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

// const getUsers = async (setUsers) => {
//   const users = await sendGetRequest(`/user`);

//   setUsers(users);
// }

// const useUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers(setUsers);
//   }, []);

//   return [users, setUsers];
// }

export { useIssueDetail, useIssueDetailLabels, useIssueDetailComments };