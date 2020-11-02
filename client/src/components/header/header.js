import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Header = (props) => {
  return (
      <>
        <HeaderContainer>
        <img />
        <p>ISSUES</p>
        </HeaderContainer>
    </>
  );
};

export default Header;