import React from 'react';
import styled from 'styled-components';
import Icon from '../common/icon.js';

const SvgContainer = styled(Icon)`
  margin-top: 5px;
  color: ${props => props.color};
  width: 16px;
  height: 16px;
`
const SvgCheckIcon = (props) => {
  return (
    <SvgContainer viewBox="0 0 16 16" color={props.color}>
      <path fill="currentcolor" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z">
    </path>    </SvgContainer>
  );
};

export default SvgCheckIcon;
