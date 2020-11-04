import React from 'react';
import styled from 'styled-components';
import DatePassedViewer from '../common/datePassed.js';

const CommentContainer = styled.div`
  border: 1px solid #d1d5da;
  width: 100%;
  height: 200px;
`;

const CommentHeader = styled.div`
  background-color: #d1d5da;
  border: 1px solid #d1d5da;
`;

const CommentItem = (props) => {
    console.log(props);
  return (
    <CommentContainer>
        <CommentHeader>{props.comment.username} commented <DatePassedViewer datetime={props.comment.created_at} /> ago  {props.issue_user_id == props.comment.user_id ? 'Owner' : null}</CommentHeader>
        <p>{props.comment.contents}</p>
    </CommentContainer>
  )
}

export default CommentItem;
