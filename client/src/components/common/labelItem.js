import React from 'react';
import styled from 'styled-components';
import { hexToRgb } from '../../../util/util.js';

const LabelContainer = styled.div`
  margin: 5px;
  padding: 2px 5px;

  background-color: ${props => props.color};
  color: ${props => {
    const hexObj = hexToRgb(props.color);

    if (hexObj === null) {
      return "#fff"
    }

    const {r, g, b} = hexObj;

    if (r*0.299 + g*0.587 + b*0.114 > 186) {
      return "#000";
    }
    return "#fff";
  }};
  &>p {
    margin: 0px;
  }
`;

const LabelItem = (props) => {
  return (
    <LabelContainer color={props.label.color}>
        <p>{props.label.name}</p>
    </LabelContainer>
  )
}

export default LabelItem;
