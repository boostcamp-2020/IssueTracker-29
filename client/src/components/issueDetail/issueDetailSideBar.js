import React from 'react';
import styled from 'styled-components';

const IssueSideBar = styled.div`
  width: 30%;
  height: 200px;
  backgrond-color: black;
`;

const AssigneesContainer = styled.div`
  height: 50px;
  border: 1px solid #d1d5da;
`;

const LabelsContainer = styled.div`
  height: 50px;
  border: 1px solid #d1d5da;
`;

const LabelListContainer = styled.div`
  display: flex;
`;

const MilestoneContainer = styled.div`
  height: 50px;
  border: 1px solid #d1d5da;
`;

const IssueDetailSideBar = (props) => {
    
    return (
        <>
            <IssueSideBar>
                <AssigneesContainer>
                    <h3>Assignees</h3>
                    {props.settingsIcon}
                </AssigneesContainer>
                <LabelsContainer>
                    <h3>Labels</h3>
                    {props.settingsIcon}
                    <LabelListContainer>{props.labels}</LabelListContainer>
                </LabelsContainer>
                <MilestoneContainer>
                    <h3>Milestone</h3>
                    {props.settingsIcon}
                </MilestoneContainer>
            </IssueSideBar>
        </>
    )
}

export default IssueDetailSideBar;