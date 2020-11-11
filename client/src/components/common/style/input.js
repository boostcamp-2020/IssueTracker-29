import styled from 'styled-components';
import { BORDER_COLOR, FOCUS_BORDER_COLOR, TOPBAR_SEARCH_BACKGROUND } from '../color';

const StyledInput = styled.input`
  border: 1px solid ${BORDER_COLOR};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: ${TOPBAR_SEARCH_BACKGROUND};

  &:focus {
    border: 1px solid ${FOCUS_BORDER_COLOR};
    box-shadow: 0 0 0 3px ${FOCUS_BORDER_COLOR + "55"};

    background-color: #00000000;
  }
`;

export default StyledInput;