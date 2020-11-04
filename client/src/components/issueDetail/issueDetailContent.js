import React from 'react';
import styled from 'styled-components';

const IssueBodyContainer = styled.div`
  border: 1px solid #d1d5da;
  width: 70%;
`;

const IssueContentsTopBar = styled.div`
  background-color: #d1d5da;
  border: 1px solid #d1d5da;
`;

const IssueContents = styled.div`
  padding: 15px;
`;

const CloseIssueButton = styled.button``;

const CommentIssueButton = styled.button``;

const IssueDetailContent = (props) => {
    
    return (
        <>
            <IssueBodyContainer>
                <IssueContentsTopBar>{props.username} opened this issue 3 days ago</IssueContentsTopBar>
                {props.comments}
            </IssueBodyContainer>
        </>
    )
}

export default IssueDetailContent;