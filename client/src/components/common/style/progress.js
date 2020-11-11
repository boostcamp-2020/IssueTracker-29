import React from 'react';
import styled from 'styled-components';
import { COLOR_GRAPH_GREEN, LIGHT_GREY } from '../color';

const ProgressContainer = styled.div`
  display: flex;
  background-color: ${LIGHT_GREY};
  border-radius: 6px;
  overflow: hidden;
`;

const DoneProgress = styled.div`
  height: 10px;
  flex: 0 0 ${props => props.percentage}%;
  background-color: ${COLOR_GRAPH_GREEN};
`;

const UndoneProgress = styled.div`
  height: 10px;
  flex: 0 0 ${props => props.percentage}%;
`

const CustomProgress = (props) => {
  return (
    <ProgressContainer>
      <DoneProgress percentage={props.percentage}/>
      <UndoneProgress percentage={100 - props.percentage}/>
    </ProgressContainer>
  )
};

export default CustomProgress;