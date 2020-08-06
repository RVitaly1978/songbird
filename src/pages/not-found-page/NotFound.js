import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  user-select: none;
`;

const NotFoundContent = styled.div`
  max-width: 60rem;
  padding: ${props => props.theme.all.padding};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.large};
  line-height: 1.6;
  text-align: center;
`;

const ContentMarked = styled.span`
  display: inline-block;

  font-size: 2em;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.secondary.color};
`;

const LinkMarked = styled.span`
  font-weight: 500;
  color: ${props => props.theme.secondary.color};
  text-decoration: underline;

  transition: color 0.3s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      color: ${props => props.theme.secondary.hoverColor};
    }
  }
`;

NotFoundPage.displayName = 'NotFoundPageStyled';
NotFoundContent.displayName = 'NotFoundContentStyled';
ContentMarked.displayName = 'ContentMarkedStyled';
LinkMarked.displayName = 'LinkMarkedStyled';

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
        <Link to='/' >
          <LinkMarked>promo</LinkMarked>
        </Link>
        <span> page</span>
      </p>
    </NotFoundContent>
  </NotFoundPage>
);

export default NotFound;
