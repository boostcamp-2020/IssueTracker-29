import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LabelItem from '../common/labelItem';
import SvgCloseLogo from './svgCloseLogo';
import SvgOpenLogo from './svgOpenLogo';

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

  if (props.article.is_open) {
    isOpenLogo = <SvgOpenLogo color={COLOR_SUCCESS}/>
  }
  else {
    isOpenLogo = <SvgCloseLogo color={COLOR_DANGER}/>
  }

  const labelComponents = props.labels.map(item => <LabelItem key={item.id} label={item} />)

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
        <p>#{props.article.id} by {props.article.username}</p>
      </div>
    </IssueItemContainer>
  )
};

export default IssueItem;