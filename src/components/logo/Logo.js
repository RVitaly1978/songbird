import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.p`
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 0.25rem;

  color: ${props => props.theme.main.logoColor};

  text-transform: uppercase;

  user-select: none;
`;

LogoContainer.displayName = 'LogoContainerStyled';

const Logo = () => {
  return (
    <LogoContainer>
      Songbird
    </LogoContainer>
  );
};

export default Logo;
