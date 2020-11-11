import styled from 'styled-components';
import { BORDER_COLOR } from '../color';

const ListItem = styled.div.attrs({className: "list-item"})`
  margin: 0 -1px;
  border: 1px solid ${BORDER_COLOR};
  border-top-color: #0000;
`;

export default ListItem;