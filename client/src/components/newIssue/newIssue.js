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
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const changeTitleData = (e) => {
        setTitle(e.target.value);
    };

    const changeContentData = (e) => {
        setContent(e.target.value);
    };

    const submitClickEvent = (e) => {
        // alert(title + content);
    };

    return (
        <NewIssueContainer>
            <TitleContainer placeholder="Title" onChange={changeTitleData}/>
            <ContentContainer placeholder="Leave a comment" onChange={changeContentData}/>
            <SubmitButton onClick={submitClickEvent}>Submit new issue</SubmitButton>
        </NewIssueContainer>
    )
};

export default NewIssue;