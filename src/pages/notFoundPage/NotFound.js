import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  padding: 1rem;

  user-select: none;
`;

const NotFoundContent = styled.div`
  max-width: 60rem;
  padding: 2rem;

  background-color: #303030;
  border: 1px solid #444;
  border-radius: 0.25rem;

  font-size: 24px;
  line-height: 1.6;
  text-align: center;
`;

const ContentMarked = styled.span`
  display: inline-block;

  font-size: 2em;
  font-weight: 700;
  line-height: 1;
  color: #008966;
`;

const LinkMarked = styled.span`
  font-weight: 500;
  color: #008966;
  text-decoration: underline;

  transition: color 0.3s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      color: #00bc8c;
    }
  }
`;

const NotFound = () => (
  <NotFoundPage>
    <NotFoundContent>
      <p>
        <ContentMarked>404</ContentMarked>
        <span> page not found.</span>
      </p>
      <p>Sorry, this page does not exist.</p>
      <p>
        <span>Try to go back to the </span>
        <Link to='/promo' >
          <LinkMarked>promo</LinkMarked>
        </Link>
        <span> page</span>
      </p>
    </NotFoundContent>
  </NotFoundPage>
);

export default NotFound;
