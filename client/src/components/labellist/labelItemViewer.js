import React, { useContext } from 'react';
import styled from 'styled-components';
import { TOGGLE_ISEDIT } from '../../reducer/label';
import { LabelContext } from '../common/context';
import BigLabelItem from './biglabelitem';
import LabelItemContainer from './itemContainer';

const LabelItemViewer = (props) => {
  const {labelDispatch} = useContext(LabelContext);

  return (
    <LabelItemContainer>
      <BigLabelItem label={props.label}/>
      <p>{props.label.description}</p>
      <div>
        <button onClick={() => labelDispatch({type: TOGGLE_ISEDIT, payload: {id: props.label.id}})}>Edit</button>
        <button onClick={() => props.onDelete()}>Delete</button>
      </div>
    </LabelItemContainer>
  )
}

export default LabelItemViewer;