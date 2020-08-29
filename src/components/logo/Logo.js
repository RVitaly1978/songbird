import React from 'react';
import styled from 'styled-components';

import logo from '../../../public/logo.svg';

const LogoContainer = styled.p`
  display: flex;
  align-items: flex-end;

  height: 5rem;
  padding-right: 4.0rem;

  font-size: 3.0rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.05rem;

  background-image: url(${logo});
  background-size: contain;
  background-position: right, center;
  background-repeat: no-repeat;

  text-transform: uppercase;

  user-select: none;
`;

const LogoMarked1 = styled.span`
  color: ${props => props.theme.main.logoColor};

  transition: color 0.3s linear;
`;

const LogoMarked2 = styled.span`
  color: ${props => props.theme.main.color};

  transition: color 0.3s linear;
`;

LogoContainer.displayName = 'LogoContainerStyled';
LogoMarked1.displayName = 'LogoMarked1Styled';
LogoMarked2.displayName = 'LogoMarked2Styled';

const Logo = () => {
  return (
    <LogoContainer>
      <LogoMarked1>Song</LogoMarked1>
      <LogoMarked2>bird</LogoMarked2>
    </LogoContainer>
  );
};

export default Logo;
