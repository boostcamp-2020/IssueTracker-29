import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DatePassedViewer from '../common/datePassed.js';
import { sendPutRequest } from '../common/api';
import { UserContext } from './context';

const CommentWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CommentContainer = styled.div`
  width: 90%;
  margin-bottom: 50px;
  border-radius: 5px;
  
  h1 {
    word-break: break-all;
  }
`;

const CommentHeader = styled.div`
  background-color: #F6F8FA;
  border: 1px solid #d1d5da;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const CommentBody = styled.div`
  border: 1px solid #d1d5da;
  height: 100%;
`;

const OwnerMark = styled.button`
  outline: 0;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  background-color: #F6F8FA;
  padding: 5px;
`;

const EditCommentButton = styled.button`
  border: 0;
  outline: 0;
  background-color: #F6F8FA;
`;

const EditTextArea = styled.textarea`
  width: 99%;
  height: 80%;
`;

const ProfileBox = styled.img`
  width: 50px;
  height: 50px;
  src: ${props => props.src};
  border-radius: 10px;
  margin-right: 20px;
`;

const CommentTitle = styled.div`
  margin: auto 0;
  margin-left: 7px;
`;

const CommentTitleOption = styled.div`
  margin: auto 0;
  margin-right: 7px;
`;

const CommentBodyBox = styled.div`
  width: 96%;
  height: 100%;
  margin: 0 auto;
`;

const CancelButtonContainer = styled.button`
  padding: 10px 20px;
  border: 0;
  outline: 0;
  color: #d73a49;
  font-weight: 600;
  background: #FAFBFC;
  border-radius: 5px;
`;

const UpdateCommentButton = styled.button`
  padding: 10px 20px;
  border: 0;
  outline: 0;
  color: #fff;
  font-weight: 600;
  background: #2ea44f;
  border-radius: 5px;
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

  const renderers = {
    image: ({
        src
    }) => (
        <img 
            src={src} 
            style={{ maxWidth: 475 }}  />
    )
  };


  return (
    <CommentWrap>
      <ProfileBox src={props.comment.profile} />
      <CommentContainer>
          <CommentHeader>
            <CommentTitle>{props.comment.username} commented <DatePassedViewer datetime={props.comment.created_at} /></CommentTitle>
            <CommentTitleOption>
              {props.issue_user_id == props.comment.user_id ? <OwnerMark>Owner</OwnerMark> : null}
              {user.id === props.comment.user_id ? <>{isEditing ? null : <EditCommentButton onClick={toggleIsEditing}>Edit</EditCommentButton>}</> : null}
            </CommentTitleOption>
          </CommentHeader>
          <CommentBody>
            {user.id === props.comment.user_id ? <CommentBodyBox>{isEditing ? <EditTextArea value={commentContents} onChange={setContentState}/> : <ReactMarkdown source={props.comment.contents} escapeHtml={false} renderers={renderers} />}</CommentBodyBox> : <CommentBodyBox><ReactMarkdown source={props.comment.contents} escapeHtml={false} renderers={renderers} /></CommentBodyBox>}
            {user.id === props.comment.user_id ? <>{isEditing ? <><UpdateCommentButton onClick={editComment}>Update comment</UpdateCommentButton><CancelButtonContainer onClick={cancelContentEdit}>Cancel</CancelButtonContainer></> : null}</> : null}
          </CommentBody>
      </CommentContainer>
    </CommentWrap>
  )
}

export default CommentItem;
