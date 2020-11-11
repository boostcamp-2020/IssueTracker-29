import React from 'react';
import LabelContainer from './style/labelcontainer.js';

const LabelItem = (props) => {
  return (
    <LabelContainer color={props.label.color}>
        <p>{props.label.name}</p>
    </LabelContainer>
  )
}

export default LabelItem;
