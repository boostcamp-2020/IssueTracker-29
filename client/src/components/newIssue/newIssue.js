import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Content from './contentContainer';
import NewIssueDetailSideBar from './newIssueSidebar';
import { useIssueSideBarLabels } from './issueSideBarHook';
import SvgSettingsLogo from '../common/svgSettingsLogo.js';

const COLOR_SETTINGS = '#959da5';

const NewIssueContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;


const NewIssue = ({match}) => {
    
    const { id } = match.params;

    return (
        <NewIssueContainer>
            <Content id={id} />
        </NewIssueContainer>
    )
};

export default NewIssue;