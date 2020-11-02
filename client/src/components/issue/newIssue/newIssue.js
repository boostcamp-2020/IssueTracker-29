import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const NewIssueContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleContainer = styled.input``;
const ContentContainer = styled.textarea``;
const SubmitButton = styled.button`
    background-color: #2EA44F;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
`;

const NewIssue = (props) => {
    return (

        <NewIssueContainer>
            <TitleContainer placeholder="Title"/>
            <ContentContainer placeholder="Leave a comment"/>
            <SubmitButton>Submit new issue</SubmitButton>
        </NewIssueContainer>
    
    )
};

export default NewIssue;