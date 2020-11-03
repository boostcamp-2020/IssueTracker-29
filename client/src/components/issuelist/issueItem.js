import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DatePassedViewer from '../common/datePassed.js';
import LabelItem from '../common/labelItem.js';
import MilestoneViewer from './milestoneViewer.js';
import SvgCloseLogo from './svgCloseLogo.js';
import SvgOpenLogo from './svgOpenLogo.js';

const COLOR_SUCCESS = "#22863a";
const COLOR_DANGER = "#cb2431";

const IssueItemContainer = styled.div`
  display: flex;
  & p {
    margin: 0px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
`;

const LabelListContainer = styled.div`
  display: flex;
`;

const IssueItem = (props) => {
  let isOpenLogo;
  let issueInfoComponent;
  if (props.article.is_open) {
    isOpenLogo = <SvgOpenLogo color={COLOR_SUCCESS}/>
    issueInfoComponent = (
      <p>
        #{props.article.id} opened <DatePassedViewer datetime={props.article.changed_at}/> ago by {props.article.username}
      </p>
    );
  }
  else {
    isOpenLogo = <SvgCloseLogo color={COLOR_DANGER}/>
    issueInfoComponent = (
      <p>
        #{props.article.id} by {props.article.username} was closed <DatePassedViewer datetime={props.article.changed_at} /> ago
      </p>
    );
  }

  const labelComponents = props.labels.map(item => <LabelItem key={item.id} label={item} />)

  const milestoneViewer = (props.article.milestone_title === null) ? null : <MilestoneViewer milestone_title={props.article.milestone_title} />

  return (
    <IssueItemContainer>
      <input type="checkbox" checked={props.article.checked} onChange={props.onClickCheckbox}/>
      {isOpenLogo}
      <div>
        <TitleContainer>
          <Link to={'/issue/' + props.article.id}><p>{props.article.issue_title}</p></Link>
          <LabelListContainer>
            {labelComponents}
          </LabelListContainer>
        </TitleContainer>
        {issueInfoComponent}
        {milestoneViewer}
      </div>
    </IssueItemContainer>
  )
};

export default IssueItem;
