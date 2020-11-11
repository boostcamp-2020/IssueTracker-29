import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BORDER_COLOR, PRIMARY_COLOR, TERTIARY_BACKGROUND_COLOR } from '../color';

export const TopbarLink = styled(Link)`
  padding: 5px 16px;
`;

export const LabelMilestoneLink = styled(TopbarLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000;
  color: ${PRIMARY_COLOR};
  border: 1px solid ${BORDER_COLOR};
  text-decoration: none;

  &:hover {
    background-color: ${TERTIARY_BACKGROUND_COLOR};
  }
`;

export const LabelMilestoneNav = styled.nav`
  display: flex;
  margin: 0px 10px;
`;

export const LabelLink = styled(LabelMilestoneLink)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

`;

export const MilestoneLink = styled(LabelMilestoneLink)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const NewItemLink = styled(TopbarLink)`
  background-color: #2EA44F;
  color: white;
  text-align: center;
  text-decoration: none;

  border-radius: 6px;

  &:hover {
    background: darken(0.5, #2EA44F);
  }
`;