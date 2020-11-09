import React, { useState } from 'react';
import styled from 'styled-components';

const getRandomColor = () => {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

const LabelPreviewContainer = styled.div`
  background-color: ${(props) => props.color};
`;

const LabelCreate = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(getRandomColor());

  return (
    <div>
      <LabelPreviewContainer color={color}>Label Preview</LabelPreviewContainer>
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
      <button>Random</button>
      <input onChange={(e) => {setColor(e.target.value)}} value={color}/>
      <button onClick={() => props.setIsCreating(false)}>Cancel</button>
      <button onClick={() => {submitLabel()}}>Create label</button>
    </div>
  )
}

export default LabelCreate;