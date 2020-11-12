import { BORDER_COLOR, TERTIARY_BACKGROUND_COLOR } from "../color";

const { default: styled } = require("styled-components");

const TabBar = styled.div`
  display: flex;
  margin: -1px -1px 0;
  padding: 16px;
  border: 1px solid ${BORDER_COLOR};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${TERTIARY_BACKGROUND_COLOR};

  font-size: 14px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export default TabBar;