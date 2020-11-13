import React from 'react';
import styled from 'styled-components';
import LabelContainer from '../common/style/labelcontainer';

const BigLabelContainer = styled(LabelContainer)`
  flex: 0 0 auto;
  margin-left: 0px;
  padding: 4px 10px;
  height: min-content;
`;

const BigLabelItem = (props) => {
  return (
    <BigLabelContainer color={props.label.color}>
        <p>{props.label.name}</p>
    </BigLabelContainer>
  )
}

export default BigLabelItem;