import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';
import { BASE_API_URL } from '../../../util/config';

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
    display: ${props => (props.timeCheck ? 'flex' : 'none')};
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

const ImageFileBoxLabel = styled.label`
    background-color: white;
    cursor: pointer;
`;

const ImageFileBoxInput = styled.input`
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
`;

const Content = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [charaterCount, setCharaterCount] = useState(0);
    const [timeCheck, setTimeCheck] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [imageFileName, setImageFileName] = useState("");

    useEffect( () => {
        const timeout = setTimeout( () => {
            setTimeCheck(true);
            setTimeout( () => {
                setTimeCheck(false);
            }, 2000);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [content]);

    useEffect( () => {
        if(imageURL && imageFileName) {
            setContent(content + convertMarkDownImage(imageFileName, imageURL));
        }
    }, [imageURL]);

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
    
    const handleImageFile = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        setImageFileName(e.target.files[0].name.split('.')[0]);
        const result = await sendImagePostRequest('/upload', formData);
        alert("ssss");
        setImageURL(BASE_API_URL + result.url);
    };

    return (
        <ContentContainer>
            <TitleInput placeholder="Title" onChange={changeTitleData}/>
            <div>Write</div>
            <ContentWrap>
                <ContentTextarea placeholder="Leave a comment" value={content} onChange={changeContentData} />
                <TextCountSpan timeCheck={timeCheck}>{charaterCount} characters</TextCountSpan>
            </ContentWrap>
            
            <ImageFileBoxLabel for="file">Attach files by selecting here</ImageFileBoxLabel>
            <ImageFileBoxInput type="file" id="file" accept="image/jpeg, image/jpg, image/png" onChange={handleImageFile}></ImageFileBoxInput>
            
            <ButtonContainer>
                <Link to="/issue">
                    <CancelButton>Cancel</CancelButton>
                </Link>
                <SubmitButton onClick={submitClickEvent}>Submit new issue</SubmitButton>
            </ButtonContainer>
        </ContentContainer>
    );
};

const sendImagePostRequest = async (path, form) => {
    try {
        const res = await axios.post(BASE_API_URL + path, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return res.data;
    } catch (e) {
        return [];
    }
};

function convertMarkDownImage(imageFileName, imageURL) {
    return `![${imageFileName}](${imageURL})`;
}

export default Content;