import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SvgCloseLogo from '../issuelist/svgCloseLogo';
import SvgOpenLogo from '../issuelist/svgOpenLogo.js';
import DatePassedViewer from '../common/datePassed.js';

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

const SaveTitleButton = styled.button``;

const CancelTitleButton = styled.button``;

const EditContentsButton = styled.button``;

const IssueHeader = (props) => {
    const editTitle = (e) => {
        setTitle(e.target.value);
    };

    return (
        <>
            <IssueHeadContainer>
                <EditTitleButton onClick={editTitle}>Edit</EditTitleButton>
                <h3>{props.title} #{props.id}</h3>
                <p>
                {props.is_open === 1 ? <SvgOpenLogo color={COLOR_SUCCESS}/> : <SvgCloseLogo color={COLOR_DANGER}/>}
                {props.username} opened this issue <DatePassedViewer datetime={props.changed_at} /> · {props.commentsNum} comment
                </p>
            </IssueHeadContainer>
        </>
    )
}

export default IssueHeader;