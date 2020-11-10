import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DatePassedViewer from '../common/datePassed.js';
import { sendPutRequest } from '../common/api';

const CommentContainer = styled.div`
  border: 1px solid #d1d5da;
  width: 100%;
  height: 200px;
`;

const CommentHeader = styled.div`
  background-color: #d1d5da;
  border: 1px solid #d1d5da;
`;

const EditCommentButton = styled.button`
  float: right;
  padding: 10px;
  margin-right: 100px;
`;

const CommentItem = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(props.comment.contents);

  useEffect(() => {setContent(props.comment.contents)}, [props.comment.contents]);

  const toggleIsEditing = () => {
      setIsEditing(!isEditing);
  };

  const submitComment = async () => {
      const res = await sendPutRequest(`/comment/${props.comment_id}`, {contents: content, issueID: props.issue.id});
      if (res && res.success) {
          props.setComments({...props.comment, contents: content});
          setIsEditing(false);
      }
  };

  const setContentState = (e) => {
    setContent(e.target.value);
  };

  const cancelContentEdit = (e) => {
      toggleIsEditing(e);
      setContent(props.comment.contents);
  }

  return (
    <CommentContainer>
        <CommentHeader>{props.comment.username} commented <DatePassedViewer datetime={props.comment.created_at} />  {props.issue_user_id == props.comment.user_id ? 'Owner' : null}</CommentHeader>
        {isEditing ? <div><button onClick={submitComment}>Update comment</button><button onClick={cancelContentEdit}>Cancel</button></div> : <EditCommentButton onClick={toggleIsEditing}>Edit</EditCommentButton>}
        {isEditing ? <textarea value={props.comment.contents} onChange={setContentState}/> : <ReactMarkdown source={props.comment.contents} />}
    </CommentContainer>
  )
}

export default CommentItem;
