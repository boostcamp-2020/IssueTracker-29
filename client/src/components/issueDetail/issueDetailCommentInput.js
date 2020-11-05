import React from 'react';
import styled from 'styled-components';

const IssueCommentInput = styled.textarea`
    margin-top: 50px;
    width: 70%;
    height: 200px;
`;

const ButtonContainer = styled.div`
    display: flex;
`;
const CloseIssueButton = styled.button``;

const CommentIssueButton = styled.button``;

const IssueDetailCommentInput = (props) => {
    
    return (
        <>
            <IssueCommentInput placeholder="Leave a comment"/>
            <ButtonContainer>
                <CloseIssueButton>Close issue</CloseIssueButton>
                <CommentIssueButton>Comment</CommentIssueButton>
            </ButtonContainer>
        </>
    )
}

export default IssueDetailCommentInput;