import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleInput = styled.input``;

const ContentWrap = styled.div`
    width: 300px;
    height: auto;
    position: relative;
    display: inline-block;
`;

const TextCountSpan = styled.span`
    position: absolute;
    bottom: 2px;
    right: 2px;
`;

const ContentTextarea = styled.textarea`
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

const CancelButton = styled.button`
    background-color: white;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
`;

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
    const [charaterCount, setCharaterCount] = useState(0);

    const changeTitleData = (e) => {
        setTitle(e.target.value);
    };

    const changeContentData = (e) => {
        const {value} = e.target;
        setContent(e.target.value);
        setCharaterCount(value.length);
    };

    const submitClickEvent = (e) => {
        // alert(title + content);
    };

    const cancelClickEvent = (e) => {

    };
    
    return (
        <ContentContainer>
            <TitleInput placeholder="Title" onChange={changeTitleData}/>
            <div>Write</div>
            <ContentWrap>
                <ContentTextarea placeholder="Leave a comment" onChange={changeContentData} />
                <TextCountSpan>{charaterCount} characters</TextCountSpan>
            </ContentWrap>
            <div>Attach files by selecting here</div>
            <ButtonContainer>
                <CancelButton onClick={cancelClickEvent}>Cancel</CancelButton>
                <SubmitButton onClick={submitClickEvent}>Submit new issue</SubmitButton>
            </ButtonContainer>
        </ContentContainer>
    );
};

export default Content;