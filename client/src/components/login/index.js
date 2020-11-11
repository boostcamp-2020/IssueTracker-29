import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BASE_API_URL } from '../../../util/config';

const GithubLink = styled.a`
  width: 20%;
  display: block;
  margin: 0 auto;
  padding: .5rem;
  border-radius: 8px;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: black;
  cursor: pointer;
`;

const Index = (props) => {
    return (
      <>
        <Link to={`/issue`}><div>바로 이슈로 (테스트용)</div></Link>
        <GithubLink href={BASE_API_URL + '/api/user/auth/github'}>Sign in with Github</GithubLink>
      </>
    );
}

export default Index;
