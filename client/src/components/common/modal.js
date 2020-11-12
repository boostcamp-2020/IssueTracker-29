import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR, TERTIARY_BACKGROUND_COLOR } from './color';

const Option = styled.li`
  list-style: none;
  padding: .2rem .5rem;
  border-top: 1px solid lightgray;
  color: ${SECONDARY_COLOR};
  cursor: pointer;

  &:hover {
    background-color: ${TERTIARY_BACKGROUND_COLOR};
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  padding-top: .5rem;
  border: 1px solid lightgray;
  border-radius: 8px;
  background-color: white;

  strong {
    margin: .5rem;
  }
`;

const Modal = ({ title, items, onModal, setOnModal, onEvent }) => {

  const handleModalEvent = (e) => {
    onEvent(e);
    setOnModal(false);
  };

  const optionData = items.map((item, idx) =>
  <div key={idx} >
    <Option onClick={(e) => {handleModalEvent(e)}}>
      {item}
    </Option>
  </div>
  );

  return (
    onModal?
    <ModalContainer className="modal">
      <strong>{title}</strong>
      {optionData}
    </ModalContainer>
    :
    null
  );
};

export default Modal;
