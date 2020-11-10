import React, { useState } from 'react';
import { useIssueDetail, useIssueDetailLabels, useIssueDetailComments } from './issueDetailHook.js';
import styled from 'styled-components';
import LabelItem from '../common/labelItem';
import SvgSettingsLogo from '../common/svgSettingsLogo.js';
import IssueHeader from './issueDetailHeader';
import IssueDetailContent from './issueDetailContent';
import IssueSideBar from '../common/issueSideBar';
import CommentItem from '../common/commentItem';
import IssueDetailCommentInput from './issueDetailCommentInput';


const COLOR_SETTINGS = '#959da5';

const IssueBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  border: 1px solid #d1d5da;
`;

const IssueDetail = ({ match }) => {
  const { id } = match.params;
  const [issue, setIssue] = useIssueDetail(id);

  const issueLabels = useIssueDetailLabels(id);
  const labels = [];
  issueLabels.forEach(item => {
    labels.push(item);
  });

  const svgSettingsIcon = <SvgSettingsLogo color={COLOR_SETTINGS}/>
  const labelComponent = labels.map(item => <LabelItem key={item.id} label={item} />)

  const [comments, setComments] = useIssueDetailComments(id);
  const commentComponent = comments.map(item => <CommentItem key={item.id} comment_id={item.id} issue={issue} comment={item} comments={comments} setComments={setComments} issue_user_id={issue.user_id} />)

  if (!issue) {
    return <div>존재하지 않는 유저입니다.</div>
  }
  return (
    <>
      <IssueHeader issue={issue} setIssue={setIssue} commentsNum={comments.length}/>
      <IssueBody>
        <IssueDetailContent comments={commentComponent} id={issue.id} />
        <IssueSideBar settingsIcon={svgSettingsIcon} labels={labelComponent} />
      </IssueBody>
      <IssueDetailCommentInput issue={issue} setIssue={setIssue} comments={comments} setComments={setComments}/>
    </>
  );
};

export default IssueDetail;