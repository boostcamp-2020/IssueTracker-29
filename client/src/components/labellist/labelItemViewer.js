import React, { useContext } from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR, PRIMARY_COLOR } from '../common/color';
import { TOGGLE_ISEDIT } from '../../reducer/label';
import { LabelContext } from '../common/context';
import BigLabelItem from './biglabelitem';
import LabelItemContainer from './itemContainer';

const TabButton = styled.button`
  color: ${SECONDARY_COLOR};
  border: none;
  outline:none;
  background-color: #0000;
  cursor: pointer;

  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

const LabelItemViewer = (props) => {
  const {labelDispatch} = useContext(LabelContext);

  return (
    <LabelItemContainer>
      <BigLabelItem label={props.label}/>
      <p>{props.label.description}</p>
      <div>
        <TabButton onClick={() => labelDispatch({type: TOGGLE_ISEDIT, payload: {id: props.label.id}})}>Edit</TabButton>
        <TabButton onClick={null}>Delete</TabButton>
      </div>
    </LabelItemContainer>
  )
}

export default LabelItemViewer;