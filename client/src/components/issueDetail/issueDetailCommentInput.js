import React from 'react';
import styled from 'styled-components';
import { ISSUE_CLOSE, ISSUE_OPEN } from '../../../util/config';
import { sendPutRequest } from '../common/api';


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
    
    const toggleIssueState = async () => {
        if (props.issue.is_open === ISSUE_OPEN) {
            const res = await sendPutRequest("/issue/state", {isOpen: ISSUE_CLOSE, ids: [props.issue.id]});
            if (res.success) {
                props.setIssue({...props.issue, is_open: ISSUE_CLOSE});
            }
            return;
        }

        const res = await sendPutRequest("/issue/state", {isOpen: ISSUE_OPEN, ids: [props.issue.id]});
        if (res.success) {
            props.setIssue({...props.issue, is_open: ISSUE_OPEN});
        }
        return;
    }

    return (
        <>
            <IssueCommentInput placeholder="Leave a comment"/>
            <ButtonContainer>
                <CloseIssueButton onClick={toggleIssueState}>{(props.issue.is_open === ISSUE_OPEN) ? "Close issue" : "Reopen issue"}</CloseIssueButton>
                <CommentIssueButton>Comment</CommentIssueButton>
            </ButtonContainer>
        </>
    )
}

export default IssueDetailCommentInput;