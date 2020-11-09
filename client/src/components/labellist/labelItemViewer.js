import React from 'react';
import styled from 'styled-components';
import LabelItem from '../common/labelItem';

const LabelItemViewer = (props) => {
  return (
    <div>
      <LabelItem label={props.label}/>
      <p>{props.label.description}</p>
      <button onClick={null}>Edit</button>
      <button onClick={null}>Delete</button>
    </div>
  )
}

export default LabelItemViewer;