import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../common/color';
import MilestoneIcon from '../common/icon/svgMilestoneIcon';

const MilestoneContainer = styled.div`
  display: flex;
  margin: 0px 5px;
`;

const MilestoneTitleContainer = styled.p`
  margin: 0px;
`;

const MilestoneViewer = (props) => {
  return (
    <MilestoneContainer>
      <MilestoneIcon color={SECONDARY_COLOR}/>
      <MilestoneTitleContainer>{props.milestone_title}</MilestoneTitleContainer>
    </MilestoneContainer>
  )
};

export default MilestoneViewer;
