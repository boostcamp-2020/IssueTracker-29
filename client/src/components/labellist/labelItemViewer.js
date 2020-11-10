import React, { useContext } from 'react';
import styled from 'styled-components';
import { TOGGLE_ISEDIT } from '../../reducer/label';
import { LabelContext } from '../common/context';
import LabelItem from '../common/labelItem';

const LabelItemViewer = (props) => {
  const {labelDispatch} = useContext(LabelContext);

  return (
    <div>
      <LabelItem label={props.label}/>
      <p>{props.label.description}</p>
      <button onClick={() => labelDispatch({type: TOGGLE_ISEDIT, payload: {id: props.label.id}})}>Edit</button>
      <button onClick={null}>Delete</button>
    </div>
  )
}

export default LabelItemViewer;