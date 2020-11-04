import React, { useState } from 'react';
import { useIssueDetail, useIssueDetailLabels } from './issueDetailHook.js';
import styled from 'styled-components';
import LabelItem from '../common/labelItem';
import SvgSettingsLogo from './svgSettingsLogo.js';

const COLOR_SETTINGS = '#959da5';

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

const IssueBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  border: 1px solid #d1d5da;
`;

const IssueBodyContainer = styled.div`
  border: 1px solid #d1d5da;
  width: 70%;
`;

const IssueContentsTopBar = styled.div`
  background-color: #d1d5da;
  border: 1px solid #d1d5da;
`;

const IssueContents = styled.div`
  padding: 15px;
`;

const CloseIssueButton = styled.button``;
const CommentIssueButton = styled.button``;

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

const IssueDetail = ({ match }) => {
  const [isOpen, setIsOpen] = useState(1);

  const editTitle = (e) => {
    setTitle(e.target.value);
  };

  const { id } = match.params;
  const issue = useIssueDetail(id);

  const issueLabels = useIssueDetailLabels(id);
  const labels = [];
  issueLabels.forEach(item => {
    labels.push(item);
  });

  const svgSettingsIcon = <SvgSettingsLogo color={COLOR_SETTINGS}/>
  const labelComponent = labels.map(item => <LabelItem key={item.id} label={item} />)

  if (!issue) {
    return <div>존재하지 않는 유저입니다.</div>
  }
  return (
    <>
      <IssueHeadContainer>
        <EditTitleButton onClick={editTitle}>Edit</EditTitleButton>
        <h3>{issue.issue_title} #{issue.id}</h3>
        {issue.is_open === 1 ? <p>Open</p> : <p>Closed</p>}
      </IssueHeadContainer>
      <IssueBody>
        <IssueBodyContainer>
          <IssueContentsTopBar>{issue.username} commented 3 days ago</IssueContentsTopBar>
        </IssueBodyContainer>
        <IssueSideBar>
          <AssigneesContainer>
            <h3>Assignees</h3>
            {svgSettingsIcon}
          </AssigneesContainer>
          <LabelsContainer>
            <h3>Labels</h3>
            {svgSettingsIcon}
            <LabelListContainer>{labelComponent}</LabelListContainer>
          </LabelsContainer>
          <MilestoneContainer>
            <h3>Milestone</h3>
            {svgSettingsIcon}
          </MilestoneContainer>
        </IssueSideBar>
      </IssueBody>
    </>
  );
};

export default IssueDetail;