import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { fadeInAnimation } from '../../styles/animation';
import { device } from '../../styles/media';

import Logo from '../../components/logo';

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  padding: ${props => props.theme.all.padding};

  animation: ${fadeInAnimation} 0.3s linear;

  user-select: none;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile};
  }
`;

const NotFoundContent = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: ${props => props.theme.all.padding};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.large};
  line-height: 1.6;
  text-align: center;

  transform: translateY(calc(-50vh + 50%));

  @media ${device.mobileL} {
    font-size: ${props => props.theme.all.fontSize.main};
  }
`;

const ContentMarked = styled.span`
  display: inline-block;

  font-size: 2em;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.secondary.color};
`;

const LinkMarked = styled(Link)`
  padding: 0;
  margin: 0;

  font-weight: 700;
  color: ${props => props.theme.secondary.color};
  text-decoration: none;

  transition: opacity 0.3s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      opacity: 0.75;
    }
  }
`;

NotFoundPage.displayName = 'NotFoundPageStyled';
NotFoundContent.displayName = 'NotFoundContentStyled';
ContentMarked.displayName = 'ContentMarkedStyled';
LinkMarked.displayName = 'LinkMarkedStyled';

const NotFound = () => (
  <NotFoundPage>
    <Logo />
    <NotFoundContent>
      <p>
        <ContentMarked>404</ContentMarked>
        <br />
        <span> page not found.</span>
      </p>
      <br />
      <p>Sorry, this page does not exist.</p>
      <p>
        Try to go back to the
        <LinkMarked to='/promo' > promo </LinkMarked>
        page
      </p>
    </NotFoundContent>
  </NotFoundPage>
);

export default NotFound;
