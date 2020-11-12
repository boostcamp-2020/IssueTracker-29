import React from 'react';
import styled from 'styled-components';
import Icon from '../icon';

const SvgContainer = styled(Icon)`
  color: ${props => props.color};
  width: 16px;
  height: 16px;
  margin: 0px 5px 0px 0px;
`

const PathContainer = styled.path`
  stroke: ${props => props.stroke};
`

const LabelIcon = (props) => {
  return (
    <SvgContainer viewBox="0 0 16 16" color={props.color}>
      <PathContainer fillRule="evenodd" stroke={props.color} fill={props.color} d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></PathContainer>
    </SvgContainer>
  )
  
};

export default LabelIcon;