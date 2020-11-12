import styled from 'styled-components';
import { PRIMARY_COLOR, BORDER_COLOR, TERTIARY_BACKGROUND_COLOR } from '../color';

export const ButtonContainer = styled.div`
  display: flex;
  padding-left: .5rem;
`;

export const OkButton = styled.button`
  margin: .2rem;
  padding: 5px 16px;
  background-color: #2EA44F;
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: darken(0.5, #2EA44F);
  }
`;

export const CommonButton = styled.button`
  margin: .2rem;
  padding: 5px 16px;
  border-radius: 6px;
  text-align: center;
  background-color: #0000;
  color: ${PRIMARY_COLOR};
  border: 1px solid ${BORDER_COLOR};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${TERTIARY_BACKGROUND_COLOR};
  }
`;