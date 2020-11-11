import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LINK_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_BACKGROUND_COLOR } from '../common/color.js';
import DatePassedViewer from '../common/datePassed.js';
import SvgCloseLogo from '../common/icon/svgCloseLogo.js';
import SvgOpenLogo from '../common/icon/svgOpenLogo.js';
import LabelItem from '../common/labelItem.js';
import ListItem from '../common/style/listitem.js';
import MilestoneViewer from './milestoneViewer.js';

import { COLOR_SUCCESS, COLOR_DANGER } from '../common/color.js';

const IssueItemContainer = styled(ListItem)`
  display: flex;
  padding: 8px 16px;
  align-items: flex-start;

  &:hover {
    background-color: ${TERTIARY_BACKGROUND_COLOR}
  }
`;

const IssueDiv = styled.div`
  display: flex;
  margin-left: 8px;
`;

const IssueRowContainer = styled.div`
  margin-left: 8px;
`;

const TitleContainer = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const IssueTitleontainer = styled(Link)`
  color: ${PRIMARY_COLOR};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: ${LINK_COLOR};
  }
`;

const LabelListContainer = styled.div`
  display: flex;
`;

const IssueInfoMilestoneContainer = styled.div`
  display: flex;
  font-size: 12px;
  color: ${SECONDARY_COLOR}
`;

const IssueInfoContainer = styled.p`
  margin: 0px;

`;


const IssueItem = (props) => {

  const getIssueInfo = () => {
    const formerMessage = (props.article.is_open) ? 'opened ' : `by ${props.article.username} was closed `;
    const latterMessage = (props.article.is_open) ? ` by ${props.article.username}` : '';
    return (
      <IssueInfoContainer>
        {`#${props.article.id} ` + formerMessage}
        <DatePassedViewer datetime={props.article.changed_at}/>
        {latterMessage}
      </IssueInfoContainer>
    )
  };

  const isOpenLogo = props.article.is_open ? <SvgOpenLogo color={COLOR_SUCCESS}/> : <SvgCloseLogo color={COLOR_DANGER}/>;
  const issueInfoComponent = getIssueInfo();

  const labelComponents = props.labels.map(item => <LabelItem key={item.id} label={item} />)

  const milestoneViewer = (props.article.milestone_title === null) ? null : <MilestoneViewer milestone_title={props.article.milestone_title} />

  return (
    <IssueItemContainer>
      <input type="checkbox" checked={props.article.checked} onChange={props.onClickCheckbox}/>
      <IssueDiv>
        {isOpenLogo}
        <IssueRowContainer>
          <TitleContainer>
            <IssueTitleontainer to={'/issue/' + props.article.id}>{props.article.issue_title}</IssueTitleontainer>
            <LabelListContainer>
              {labelComponents}
            </LabelListContainer>
          </TitleContainer>
          <IssueInfoMilestoneContainer>
            {issueInfoComponent}
            {milestoneViewer}
          </IssueInfoMilestoneContainer>
        </IssueRowContainer>
      </IssueDiv>
    </IssueItemContainer>
  )
};

export default IssueItem;
