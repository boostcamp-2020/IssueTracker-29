import React, { useState } from 'react';
import { useIssueDetail, useIssueDetailLabels, useIssueDetailComments } from './issueDetailHook.js';
import styled from 'styled-components';
import LabelItem from '../common/labelItem';
import SvgSettingsLogo from './svgSettingsLogo.js';
import IssueHeader from './issueDetailHeader';
import IssueDetailContent from './issueDetailContent';
import IssueDetailSideBar from './issueDetailSideBar';
import CommentItem from '../common/commentItem';

const COLOR_SETTINGS = '#959da5';

const IssueBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  border: 1px solid #d1d5da;
`;

const IssueDetail = ({ match }) => {
  const [isOpen, setIsOpen] = useState(1);

  const { id } = match.params;
  const issue = useIssueDetail(id);

  const issueLabels = useIssueDetailLabels(id);
  const labels = [];
  issueLabels.forEach(item => {
    labels.push(item);
  });

  const svgSettingsIcon = <SvgSettingsLogo color={COLOR_SETTINGS}/>
  const labelComponent = labels.map(item => <LabelItem key={item.id} label={item} />)

  const issueComments = useIssueDetailComments(id);
  const comments = [];
  issueComments.forEach(item => {
    comments.push(item);
  })
  console.log(issueComments);
  console.log(comments);
  const commentComponent = comments.map(item => <CommentItem key={item.id} comment={item} />)

  if (!issue) {
    return <div>존재하지 않는 유저입니다.</div>
  }
  return (
    <>
      <IssueHeader title={issue.issue_title} id={issue.id} is_open={issue.is_open} />
      <IssueBody>
        <IssueDetailContent username={issue.username} comments={commentComponent} />
        <IssueDetailSideBar settingsIcon={svgSettingsIcon} labels={labelComponent} />
      </IssueBody>
    </>
  );
};

export default IssueDetail;