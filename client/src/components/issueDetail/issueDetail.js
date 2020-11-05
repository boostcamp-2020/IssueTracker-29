import React, { useState } from 'react';
import { useIssueDetail, useIssueDetailLabels, useIssueDetailComments } from './issueDetailHook.js';
import styled from 'styled-components';
import LabelItem from '../common/labelItem';
import SvgSettingsLogo from './svgSettingsLogo.js';
import IssueHeader from './issueDetailHeader';
import IssueDetailContent from './issueDetailContent';
import IssueDetailSideBar from './issueDetailSideBar';
import CommentItem from '../common/commentItem';
import IssueDetailCommentInput from './issueDetailCommentInput';
// import ReactMarkdown from 'react-markdown';

const COLOR_SETTINGS = '#959da5';

const IssueBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  border: 1px solid #d1d5da;
`;

const IssueDetail = ({ match }) => {
  // const [isOpen, setIsOpen] = useState(1);

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

  const commentComponent = comments.map(item => <CommentItem key={item.id} comment={item} issue_user_id={issue.user_id} />)

  const source = `
    # 제목 1
    ### 테이블
    |제목|내용|
    |---|---|
    |리액트|마크다운|

    \`\`\`
    코드블럭
    \`\`\`

    **굵게**  
    *기울이기* 

    > 인용문  

    글자 \`강조\` 하기
  `;

  if (!issue) {
    return <div>존재하지 않는 유저입니다.</div>
  }
  return (
    <>
      {/* <ReactMarkdown source={source}/> */}
      <IssueHeader title={issue.issue_title} id={issue.id} is_open={issue.is_open} username={issue.username} changed_at={issue.changed_at} commentsNum={comments.length}/>
      <IssueBody>
        <IssueDetailContent comments={commentComponent} id={issue.id} />
        <IssueDetailSideBar settingsIcon={svgSettingsIcon} labels={labelComponent} />
      </IssueBody>
      <IssueDetailCommentInput issue={issue} setIssue={setIssue} comment={comments} setComment={setComments}/>
    </>
  );
};

export default IssueDetail;