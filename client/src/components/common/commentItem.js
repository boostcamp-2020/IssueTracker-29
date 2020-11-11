import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DatePassedViewer from '../common/datePassed.js';
import { sendPutRequest } from '../common/api';
import { UserContext } from './context';

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

const ProfileBox = styled.img`
  width: 20px;
  height: 20px;
  src: ${props => props.src};
  border: 1px solid black;
`;

const CommentItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [commentContents, setCommentContents] = useState(props.comment.contents);

  useEffect(() => {setCommentContents(props.comment.contents)}, [props.comment.contents]);

  const toggleIsEditing = () => {
      setIsEditing(!isEditing);
  };

  const editComment = async () => {
      const res = await sendPutRequest(`/comment/${props.comment_id}`, {contents: commentContents, issueID: props.issue.id});
      if (res && res.success) {
          const nextComments = props.comments.map(comment => comment.id === props.comment_id ? { ...comment, contents: commentContents } : comment);
          props.setComments(nextComments);
          setIsEditing(false);
      }
  };

  const setContentState = (e) => {
    const { value } = e.target;
    setCommentContents(value);
  };

  const cancelContentEdit = (e) => {
      toggleIsEditing(e);
      setCommentContents(props.comment.contents);
  }

  const user = useContext(UserContext);

  return (
    <CommentContainer>
        <CommentHeader><ProfileBox src={props.comment.profile} />{props.comment.username} commented <DatePassedViewer datetime={props.comment.created_at} />  {props.issue_user_id == props.comment.user_id ? 'Owner' : null}</CommentHeader>
        {user.id === props.comment.user_id ? <div>{isEditing ? <div><button onClick={editComment}>Update comment</button><button onClick={cancelContentEdit}>Cancel</button></div> : <EditCommentButton onClick={toggleIsEditing}>Edit</EditCommentButton>}
        {isEditing ? <textarea value={commentContents} onChange={setContentState}/> : <ReactMarkdown source={props.comment.contents} />}</div> : <div><ReactMarkdown source={props.comment.contents} /></div>}
    </CommentContainer>
  )
}

export default CommentItem;
