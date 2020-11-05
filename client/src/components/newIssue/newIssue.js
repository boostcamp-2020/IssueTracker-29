import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Content from './contentContainer';
import IssueSideBar from '../common/issueSideBar';
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

    const issueLabels = useIssueSideBarLabels(id);
    const labels = [];
    issueLabels.forEach(item => {
        labels.push(item);
    });

    const svgSettingsIcon = <SvgSettingsLogo color={COLOR_SETTINGS}/>
    const labelComponent = labels.map(item => <LabelItem key={item.id} label={item} />)

    return (
        <NewIssueContainer>
            <Content />
            <IssueSideBar settingsIcon={svgSettingsIcon} labels={labelComponent} />
        </NewIssueContainer>
    )
};

export default NewIssue;