import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { getRandomColor } from '../../../util/util';
import { POST_LABEL } from '../../reducer/label';
import { BORDER_COLOR, TERTIARY_BACKGROUND_COLOR } from '../common/color';
import { LabelContext } from '../common/context';
import LabelItem from '../common/labelItem';
import TabBar from '../common/style/tabbar';

const LabelCreateContainer = styled.div`
  margin: -1px -1px 0;
  padding: 16px;
  border: 1px solid ${BORDER_COLOR};
  background-color: ${TERTIARY_BACKGROUND_COLOR};

  font-size: 14px;

  border-radius: 6px;
`;

const SampleLabelContainer = styled.div`
  display: flex;
`;

const LabelCreate = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(getRandomColor());
  const {labelDispatch} = useContext(LabelContext);

  const submitLabel = () => {
    if (name === "") {
      return;
    }

    if (!color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      return;
    }
    labelDispatch({type: POST_LABEL, payload: {name, description, color}});
    props.setIsCreating(false);
  }

  return (
    <LabelCreateContainer>
      <SampleLabelContainer>
        <LabelItem label={{name: "Label preview", description, color}}>Label Preview</LabelItem>
      </SampleLabelContainer>
      <label>
        Label name
        <input onChange={(e) => {setName(e.target.value)}}/>
      </label>
      <label>
        Description
        <input onChange={(e) => {setDescription(e.target.value)}} />
      </label>
      <label>
        Color
      </label>
      <button onClick={() => setColor(getRandomColor())}>Random</button>
      <input onChange={(e) => {setColor(e.target.value)}} value={color}/>
      <button onClick={() => props.setIsCreating(false)}>Cancel</button>
      <button onClick={() => {submitLabel();}}>Create label</button>
    </LabelCreateContainer>
  )
}

export default LabelCreate;