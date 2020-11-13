import styled from 'styled-components';
import ListItem from '../common/style/listitem';

const LabelItemContainer = styled(ListItem)`
  display: grid;
  grid-template-columns: 1fr 3fr auto;
`;

export default LabelItemContainer;