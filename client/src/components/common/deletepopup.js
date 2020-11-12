import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { PRIMARY_COLOR } from './color';
import { NormalButton, OkButton } from './style/button';

const DisappearContainer = styled.div`
  position: fixed;
  ${props => props.active ? '' : 'visibility: hidden;'}
  opacity: ${props => props.active ? '1' : '0'};

  transition: visibility 0.5s, opacity 0.5s;
`;

const PopupBackground = styled(DisappearContainer)`
  background-color: #0003;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;

const appear = keyframes`
  from {
    transform: translate(-50%, -70%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;

const disappear = keyframes`
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-50%, -70%);
  }
`;

const PopupContainer = styled(DisappearContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 6px;

  ${props => props.active ? css`animation: ${appear} 0.5s;` : css`animation: ${disappear} 0.5s;`}
`;

const PopupHeader = styled.h2`
  margin-left: 10px;
`;

const PopupBody = styled.p`
  margin-top: 0px;
  padding: 10px;
  height: 100%;
  border-top: 1px solid ${PRIMARY_COLOR};
  
`;

const PopupButtonGroup = styled.div`
  margin: 10px;
`;

const YesButton = styled(OkButton)`
  margin: 5px;
`;

const NoButton = styled(NormalButton)`
  margin: 5px;
`;

const DeletePopup = (props) => {
  return (
    <>
      <PopupBackground active={props.active} onClick={() => props.setActive(false)}/>
      <PopupContainer active={props.active}>
        <PopupHeader>{props.header}</PopupHeader>
        <PopupBody>{props.message}</PopupBody>
        <PopupButtonGroup>
          <YesButton onClick={() => {
            props.onYes();
            props.setActive(false);
          }}>
            확인
          </YesButton>
          <NoButton onClick={() => props.setActive(false)}>취소</NoButton>
        </PopupButtonGroup>
      </PopupContainer>
    </>
  )
};

export default DeletePopup;