import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ISSUE_CLOSE, ISSUE_OPEN } from '../../../util/config';
import { sendPutRequest } from '../common/api';


const IssueCommentInput = styled.textarea`
    margin-top: 50px;
    height: 200px;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
`;

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

const ImageFileBoxLabel = styled.label`
    background-color: white;
    cursor: pointer;
`;

const ImageFileBoxInput = styled.input`
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
`;

const CloseIssueButton = styled.button``;

const CommentIssueButton = styled.button``;

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

const IssueDetailCommentInput = (props) => {
    const [content, setContent] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
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

    const onChange = (e) => {
        const {value} = e.target;

        setContent(e.target.value);
        setCharacterCount(value.length);
    };

    const handleImageFile = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        setImageFileName(e.target.files[0].name.split('.')[0]);
        const result = await sendImagePostRequest('/upload', formData);
        setImageURL(BASE_API_URL + result.url);
    };

    const submitClickEvent = (e) => {
        // alert(title + content);
    };
    
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
            <ContentWrap>
              <IssueCommentInput placeholder="Leave a comment" value={content} onChange={onChange} />
              <TextCountSpan timeCheck={timeCheck}>{characterCount} characters</TextCountSpan>
            </ContentWrap>
            <ImageFileBoxLabel for="file">Attach files by selecting here</ImageFileBoxLabel>
            <ImageFileBoxInput type="file" id="file" accept="image/jpeg, image/jpg, image/png" onChange={handleImageFile}></ImageFileBoxInput>
            
            <ButtonContainer>
                <CloseIssueButton onClick={toggleIssueState}>{(props.issue.is_open === ISSUE_OPEN) ? "Close issue" : "Reopen issue"}</CloseIssueButton>
                <CommentIssueButton>Comment</CommentIssueButton>
            </ButtonContainer>
        </>
    )
}

export default IssueDetailCommentInput;