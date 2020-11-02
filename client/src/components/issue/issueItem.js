import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const IssueItem = (props) => {
  let isOpenLogo;

  if (props.article.is_open) {
    isOpenLogo = <SvgOpenLogo color={COLOR_SUCCESS}/>
  }
  else {
    isOpenLogo = <SvgCloseLogo color={COLOR_DANGER}/>
  }

  return (
    <IssueItemContainer>
      <input type="checkbox"/>
      {isOpenLogo}
      <div>
        <Link to={'/issue/' + props.article.id}><p>{props.article.title}</p></Link>
        <p>#{props.article.id}</p>
      </div>
    </IssueItemContainer>
  )
};

export default IssueItem;