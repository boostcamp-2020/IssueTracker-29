import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GithubLink = styled(Link)`
  width: 20%;
  display: block;
  margin: 0 auto;
  padding: .5rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: black;
`;

const Index = (props) => {
    return (
      <>
        <Link to={`/issue`}><div>바로 이슈로 (테스트용)</div></Link>
        <GithubLink to="/api/user/auth/github">Sign in with Github</GithubLink>
      </>
    );
}

export default Index;
