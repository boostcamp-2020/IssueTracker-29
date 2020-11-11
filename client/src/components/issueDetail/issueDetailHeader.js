import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePassedViewer from '../common/datePassed.js';
import { ISSUE_OPEN } from '../../../util/config';
import { sendPutRequest } from '../common/api';
import SvgCloseLogo from '../common/icon/svgCloseLogo.js';
import SvgOpenLogo from '../common/icon/svgOpenLogo.js';

const COLOR_SUCCESS = "#22863a";
const COLOR_DANGER = "#cb2431";

const IssueHeadContainer = styled.div`
  border-bottom: 1px solid #d1d5da;
  margin-bottom: 20px;
`;

const EditTitleButton = styled.button`
  float: right;
  padding: 10px;
  margin-right: 100px;
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

    const cancelTitleEidt = (e) => {
        toggleIsEditting(e);
        setTitle(props.issue.issue_title);
    }

    return (
        <>
            <IssueHeadContainer>
                {isEditting ? <div><button onClick={submitIssue}>Save</button><button onClick={cancelTitleEidt}>Cancel</button></div> : <EditTitleButton onClick={toggleIsEditting}>Edit</EditTitleButton>}
                {isEditting ? <input value={title} onChange={setTitleState}/> : <h3>{props.issue.issue_title} #{props.issue.id}</h3>}
                <div>
                    <div>
                        {props.issue.is_open === ISSUE_OPEN ? <SvgOpenLogo color={COLOR_SUCCESS}/> : <SvgCloseLogo color={COLOR_DANGER}/>}
                        {props.issue.is_open === ISSUE_OPEN ? "Open" : "Closed"}
                    </div>
                    {props.issue.username} opened this issue <DatePassedViewer datetime={props.issue.created_at} /> · {props.commentsNum} comment
                </div>
            </IssueHeadContainer>
        </>
    )
}

export default IssueHeader;