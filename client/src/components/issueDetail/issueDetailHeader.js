import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePassedViewer from '../common/datePassed.js';
import { ISSUE_OPEN } from '../../../util/config';
import { sendPutRequest } from '../common/api';
import SvgCloseLogo from '../common/icon/svgCloseLogo.js';
import SvgOpenLogo from '../common/icon/svgOpenLogo.js';

const COLOR_SUCCESS = "#22863a";
const COLOR_DANGER = "#cb2431";
const COLOR_WHITE = "#fff";
const COLOR_RED = '#D73A49';
const COLOR_GREEN = '#2EA44F';
const IssueHeadContainer = styled.div`
  border-bottom: 1px solid #e1e4e8;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const IssueHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TilteWrap = styled.div`
    display: flex;
`;

const TitleContainer = styled.div`
    font-size: 2rem;
`;

const TitleIdContainer = styled.div`
    margin-left: 7px;
    font-size: 2rem;
    color: #959da5;
`;

const TitleEditInput = styled.input`
    width: 700px;
    height: 20px;
    margin-bottom: 10px;
`;

const IssueHeaderContent = styled.div``;

const IssueHeaderButton = styled.div``;

const IssueBodyContainer = styled.div`
    display: flex;
`;

const StateComponent = styled.div`
    border-radius: 5px;
    background-color: ${props => props.isOpen ? COLOR_GREEN : COLOR_RED};
    display: flex;
    padding: 3px 7px;
`;

const InfoComponent = styled.div`
    margin-top: 6px;
    margin-left: 5px;
`;

const SvgContainer = styled.div``;

const MsgContainer = styled.div`
    color: #fff;
    margin-top: 3px;
`;

const EditTitleButton = styled.button`
  padding: 10px;
  margin-right: 100px;
  color: #24292E;
  background-color: #FAFBFC;
  border: 1px #e1e4e8 solid;
  border-radius: 5px;
`;

const SaveTitleButton = styled.button`
    padding: 10px;
    color: #24292E;
    background-color: #FAFBFC;
    border: 1px #e1e4e8 solid;
    border-radius: 5px;
`;

const CancelTitleButton = styled.button`
    margin-left: 5px;
    border: 0;
    outline: 0;
    background-color: white;
    color: blue;
`;

const IssueHeader = (props) => {

    const [isEditting, setIsEditting] = useState(false);
    const [title, setTitle] = useState(props.issue.issue_title);

    useEffect(() => {setTitle(props.issue.issue_title)}, [props.issue.issue_title]);

    const toggleIsEditting = () => {
        setIsEditting(!isEditting);
    };

    const submitIssue = async () => {
        const res = await sendPutRequest(`/issue/${props.issue.id}`, {title});
        if (res && res.success) {
            props.setIssue({...props.issue, issue_title: title});
            setIsEditting(false);
        }
    };

    const setTitleState = (e) => {
        setTitle(e.target.value);
    };

    const cancelTitleEdit = (e) => {
        toggleIsEditting(e);
        setTitle(props.issue.issue_title);
    }

    return (
        <>
            <IssueHeadContainer>
                <IssueHeaderContainer>
                    <IssueHeaderContent>{isEditting ? <TitleEditInput value={title} onChange={setTitleState}/> : <TilteWrap><TitleContainer>{props.issue.issue_title}</TitleContainer><TitleIdContainer>#{props.issue.id}</TitleIdContainer></TilteWrap>}</IssueHeaderContent>
                    <IssueHeaderButton>{isEditting ? <div><SaveTitleButton onClick={submitIssue}>Save</SaveTitleButton><CancelTitleButton onClick={cancelTitleEdit}>Cancel</CancelTitleButton></div> : <EditTitleButton onClick={toggleIsEditting}>Edit</EditTitleButton>}</IssueHeaderButton>
                </IssueHeaderContainer>
                <IssueBodyContainer>
                    <StateComponent isOpen={props.issue.is_open === ISSUE_OPEN}>
                        <SvgContainer>{props.issue.is_open === ISSUE_OPEN ? <SvgOpenLogo color={COLOR_WHITE}/> : <SvgCloseLogo color={COLOR_WHITE}/>}</SvgContainer>
                        <MsgContainer>{props.issue.is_open === ISSUE_OPEN ? "Open" : "Closed"}</MsgContainer>
                    </StateComponent>
                    <InfoComponent>
                        {props.issue.username} opened this issue <DatePassedViewer datetime={props.issue.created_at} /> · {props.commentsNum} comment
                    </InfoComponent>
                </IssueBodyContainer>
            </IssueHeadContainer>
        </>
    )
}

export default IssueHeader;