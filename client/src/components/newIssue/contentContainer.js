import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleInput = styled.input``;
const ContentTextarea = styled.textarea``;
const SubmitButton = styled.button`
    background-color: #2EA44F;
    color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
`;

const Content = (props) => {

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
        <ContentContainer>
            <TitleInput placeholder="Title" onChange={changeTitleData}/>
            <ContentTextarea placeholder="Leave a comment" onChange={changeContentData}/>
            <SubmitButton onClick={submitClickEvent}>Submit new issue</SubmitButton>
        </ContentContainer>
    );
};

export default Content;