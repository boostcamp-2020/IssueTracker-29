import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  margin: 5px;
  padding: 2px 5px;
  height: 200px;
  width: 500px;
  border: 1px solid #959da5;
`;

const CommentItem = (props) => {
  return (
    <CommentContainer>
        <p>{props.comment.user_id}님이 {props.comment.created_at}에 생성한 comment</p>
        <p>{props.comment.contents}</p>
    </CommentContainer>
  )
}

export default CommentItem;
