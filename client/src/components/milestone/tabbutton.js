import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../common/color';
import MilestoneIcon from '../common/icon/svgMilestoneIcon';
import SvgCheckIcon from './svgCheckIcon';

const ButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  color: ${SECONDARY_COLOR};
  font-weight: 400;

  &:disabled {
    font-weight: 600;
    color: ${PRIMARY_COLOR};
  }

  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

const TabButton = (props) => {
  return (
    <div>
      <ButtonContainer disabled={props.isOpen} onClick={()=> props.setIsOpen(true)}><MilestoneIcon/>{props.numOpen} Opened</ButtonContainer>
      <ButtonContainer disabled={!props.isOpen} onClick={()=> props.setIsOpen(false)}><SvgCheckIcon/>{props.numClose} Closed </ButtonContainer>
    </div>
  );
};

export default TabButton;