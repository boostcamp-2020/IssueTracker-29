import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const HeaderLinkContainer = styled(Link)`
  text-decoration: none;
`;

const Header = (props) => {
  return (
      <>
        <HeaderLinkContainer to="/issue">
          <HeaderContainer>
            <img />
            <p>ISSUES</p>
          </HeaderContainer>    
        </HeaderLinkContainer>
        
    </>
  );
};

export default Header;