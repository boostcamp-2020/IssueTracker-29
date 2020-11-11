import React, { useContext, useState } from 'react';
import { getRandomColor } from '../../../util/util';
import { EDIT_LABEL, TOGGLE_ISEDIT } from '../../reducer/label';
import { LabelContext } from '../common/context';
import BigLabelItem from './biglabelitem';
import LabelItemContainer from './itemContainer';

const LabelEdit = (props) => {
  const {labelDispatch} = useContext(LabelContext);

  const [name, setName] = useState(props.label.name);
  const [description, setDescription] = useState(props.label.description);
  const [color, setColor] = useState(props.label.color);

  const submitLabel = () => {
    if (name === "") {
      return;
    }

    if (!color.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      return;
    }

    labelDispatch({type: EDIT_LABEL, payload: {id: props.label.id, name, description, color}});
  }

  return (
    <LabelItemContainer>
      <BigLabelItem label={{name, description, color}}>Label Preview</BigLabelItem>
      <label>
        Label name
        <input onChange={(e) => {setName(e.target.value)}} value={name}/>
      </label>
      <label>
        Description
        <input onChange={(e) => {setDescription(e.target.value)}} value={description}/>
      </label>
      <label>
        Color
      </label>
      <button onClick={() => setColor(getRandomColor())}>Random</button>
      <input onChange={(e) => {setColor(e.target.value)}} value={color}/>
      <button onClick={() => labelDispatch({type: TOGGLE_ISEDIT, payload: {id: props.label.id}})}>Cancel</button>
      <button onClick={() => {submitLabel()}}>Edit label</button>
    </LabelItemContainer>
  );
}

export default LabelEdit;