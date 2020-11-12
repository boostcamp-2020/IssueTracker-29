import styled from 'styled-components';
import { BORDER_COLOR } from '../color';

export const TextButton = styled.button`
  text-decoration: none;
  border: none;
  background: none;
`;

export const NormalButton = styled.button`
  padding: 5px 16px;
  text-align: center;
  text-decoration: none;

  border: 1px solid ${BORDER_COLOR};
  border-radius: 6px;

  &:hover {
    background: darken(0.5, #2EA44F);
  }
`;

export const OkButton = styled(NormalButton)`
  background-color: #2EA44F;
  color: white;

  border: none;
  border-radius: 6px;
`;