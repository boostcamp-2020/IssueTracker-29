import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Option = styled.li`
  list-style: none;
  background-color: white;
  &:hover {
    background-color: lightgray;
  }
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: absolute;
  border: 1px solid lightgray;
`;

const Modal = (props) => {
  if(!props.onModal) return ('');

const optionData = props.items.map(item => <Option>{item}</Option>)

  return (
  <ModalContainer>
    <h4>{props.title}</h4>
    {optionData}
  </ModalContainer>
  );
};

export default Modal;