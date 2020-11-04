import React from 'react';
import styled from 'styled-components';

const IssueSideBar = styled.div`
    width: 30%;
    height: 200px;
    backgrond-color: black;
`;

const AssigneesHeader = styled.div`
    height: 30px;
    display: flex;
`;

const AssigneesContainer = styled.div`
    height: 100px;
    border: 1px solid #d1d5da;
`;

const LabelsHeader = styled.div`
    height: 30px;
    display: flex;
`;

const LabelsContainer = styled.div`
    height: 100px;
    border: 1px solid #d1d5da;
`;

const LabelListContainer = styled.div`
    margin-top: 20px;
    display: flex;
`;

const MilestoneHeader = styled.div`
height: 30px;
display: flex;
`;

const MilestoneContainer = styled.div`
    height: 100px;
    border: 1px solid #d1d5da;
`;

const IssueDetailSideBar = (props) => {
    
    return (
        <>
            <IssueSideBar>
                <AssigneesContainer>
                    <AssigneesHeader>
                        <h3>Assignees</h3>
                        {props.settingsIcon}
                    </AssigneesHeader>
                </AssigneesContainer>
                <LabelsContainer>
                    <LabelsHeader>
                        <h3>Labels</h3>
                        {props.settingsIcon}
                    </LabelsHeader>
                    <LabelListContainer>{props.labels}</LabelListContainer>
                </LabelsContainer>
                <MilestoneContainer>
                    <MilestoneHeader>
                        <h3>Milestone</h3>
                        {props.settingsIcon}
                    </MilestoneHeader>
                </MilestoneContainer>
            </IssueSideBar>
        </>
    )
}

export default IssueDetailSideBar;