import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BASE_API_URL } from '../../../util/config';
import GithubLogo from '../common/icon/svgGithubIcon';

const GithubLink = styled.a`
  display: flex;
  justify-content: space-around;
  width: 15%;
  margin: 0 auto;
  padding: .5rem;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  background-color: black;
  cursor: pointer;
`;

const Index = (props) => {
    return (
      <>
        <Link to={`/issue`}><div>바로 이슈로 (테스트용)</div></Link>
        <GithubLink href={BASE_API_URL + '/user/auth/github'}>
          <span>Sign in with Github</span>
          <GithubLogo color="black" />
        </GithubLink>
      </>
    );
}

export default Index;
