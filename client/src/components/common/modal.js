import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Option = styled.li`
  list-style: none;
  &:hover {
    background-color: lightgray;
  }
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: absolute;
  padding-top: .5rem;
  border: 1px solid lightgray;
  background-color: white;
`;

const Modal = (props) => {
  if(!props.onModal) return ('');

const optionData = props.items.map((item, idx) =>
  <div key={idx} >
    <hr
    style={{
      margin: 0,
    }}
    />
    <Option onClick={(e) => props.onEvent(e)}>
    {item}
    </Option>
  </div>
);

  return (
  <ModalContainer>
    <strong>{props.title}</strong>
    {optionData}
  </ModalContainer>
  );
};

export default Modal;