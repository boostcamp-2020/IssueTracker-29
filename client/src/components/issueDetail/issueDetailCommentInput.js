import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ISSUE_CLOSE, ISSUE_OPEN } from '../../../util/config';
import { BASE_API_URL } from '../../../util/config';
import { sendPutRequest, sendPostRequest, sendImagePostRequest, sendGetRequest } from '../common/api';
import SvgCloseLogo from '../common/icon/svgCloseLogo';
import SvgOpenLogo from '../common/icon/svgOpenLogo';
import { UserContext } from '../common/context';
import { useUser } from './issueDetailHook';

const COLOR_SUCCESS = "#22863a";
const COLOR_DANGER = "#cb2431";

const IssueCommentInput = styled.textarea`
    margin-top: 50px;
    width: 97%;
    height: 80%;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: flex-end;
`;

const ContentWrap = styled.div`
    width: 90%;
    height: 200px;
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

const SvgContainer = styled.div``;

const MsgContainer = styled.div`
    color: black;
    margin-top: 3px;
`;

const ToggleButtonContainer = styled.div`
    display: flex;
    padding: 10px;
    margin-right: 10px;
    color: #24292E;
    background-color: #FAFBFC;
    border: 1px #e1e4e8 solid;
    border-radius: 5px;
    cursor: default;
`;

const CommentIssueButton = styled.button`
    padding: 10px 20px;
    border: 0;
    outline: 0;
    color: #fff;
    font-weight: 600;
    background: #2ea44f;
    border-radius: 5px;
`;

const NewCommentContainer = styled.div`
    width: 70%;
    margin-right: 10px;
`;

const ProfileBox = styled.img`
  width: 50px;
  height: 50px;
  src: ${props => props.src};
  border-radius: 10px;
  margin-right: 20px;
`;

const NewCommentWrap = styled.div``;

const CommentWrap = styled.div`
    display: flex;
`;

function convertMarkDownImage(imageFileName, imageURL) {
    return `![${imageFileName}](${imageURL})`;
}

const IssueDetailCommentInput = (props) => {
    const [commentContent, setCommentContent] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const [timeCheck, setTimeCheck] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [imageFileName, setImageFileName] = useState("");

    const [clear, setClear] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const user = useContext(UserContext);
    const userInfo = useUser(user.id);

    useEffect( () => {
        if (timeCheck) {
            clearTimeout(clear)
            setClear(setTimeout(() => {
                setTimeCheck(false);
            }, 2000));
            
            return;
        }
        const timeout = (!isLoaded) ? null : setTimeout( () => {
            setTimeCheck(true);
            setClear(setTimeout( () => {
                setTimeCheck(false);
            }, 2000));
        }, 2000);

        setIsLoaded(true);

        return () => {
            clearTimeout(timeout)
            clearTimeout(clear);
        };
    }, [commentContent]);

    useEffect( () => {
        if(imageURL && imageFileName) {
            setCommentContent(commentContent + convertMarkDownImage(imageFileName, imageURL));
        }
    }, [imageURL]);

    const onChange = (e) => {
        const { value } = e.target;

        setCommentContent(e.target.value);
        setCharacterCount(value.length);
    };

    const handleImageFile = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        setImageFileName(e.target.files[0].name.split('.')[0]);
        const result = await sendImagePostRequest('/upload', formData);
        setImageURL(BASE_API_URL + result.url);
    };

    const submitClickEvent = async (e) => {
        const newComment = {contents:commentContent, issueID:props.issue.id, userID: 1, created_at: new Date()};
        const res = await sendPostRequest(`/issue/${props.issue.id}/comment`, newComment);
        const data = await sendGetRequest(`/issue/${props.issue.id}/comment`)

        if (res && res.success) {
            props.setComments(data);
        }
        setCommentContent("");
    };
    
    const toggleIssueState = async () => {
        if (props.issue.is_open === ISSUE_OPEN) {
            const res = await sendPutRequest("/issue/state", {isOpen: ISSUE_CLOSE, ids: [props.issue.id]});
            if (res.success) {
                props.setIssue({...props.comments, is_open: ISSUE_CLOSE});
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
        <NewCommentContainer>
            <NewCommentWrap>
                <CommentWrap>
                    <ProfileBox src={userInfo.profile} />
                    <ContentWrap>
                        <IssueCommentInput placeholder="Leave a comment" value={commentContent} onChange={onChange} />
                        <TextCountSpan timeCheck={timeCheck}>{characterCount} characters</TextCountSpan>
                        <ImageFileBoxLabel htmlFor="file">Attach files by selecting here</ImageFileBoxLabel>
                        <ImageFileBoxInput type="file" id="file" accept="image/jpeg, image/jpg, image/png" onChange={handleImageFile}></ImageFileBoxInput> 
                    </ContentWrap>
                </CommentWrap>
                <div>
                    
                </div>
            </NewCommentWrap>
            <ButtonContainer>
                <ToggleButtonContainer onClick={toggleIssueState}>
                    <SvgContainer>{props.issue.is_open === ISSUE_OPEN ? <SvgCloseLogo color={COLOR_DANGER} /> : <SvgOpenLogo color={COLOR_SUCCESS} />}</SvgContainer>
                    <MsgContainer>{props.issue.is_open === ISSUE_OPEN ? "Close issue" : "Reopen issue"}</MsgContainer>
                </ToggleButtonContainer>
                <CommentIssueButton onClick={submitClickEvent}>Comment</CommentIssueButton>
            </ButtonContainer>
        </NewCommentContainer>
    )
}

export default IssueDetailCommentInput;