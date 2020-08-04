import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { lightTheme, darkTheme } from '../../styles/theme';

const PromoPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  user-select: none;
`;

const PromoContent = styled.div`
  max-width: 60rem;
  padding: ${props => props.theme.all.padding};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.large};
  line-height: 1.6;
  text-align: center;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;

  background-color: ${props => props.theme.secondary.color};
  border-radius: ${props => props.theme.all.borderRadius};

  color: inherit;

  font: inherit;
  font-weight: 500;
  text-decoration: none;

  transition: background-color 0.3s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      background-color: ${props => props.theme.secondary.hoverColor};
    }
  }
`;

PromoPage.displayName = 'PromoPageStyled';
PromoContent.displayName = 'PromoContentStyled';
StyledLink.displayName = 'StyledLinkStyled';

const Promo = ({ setTheme }) => {
  const handleThemeChange = (evt) => {
    const { id } = evt.target;
    const theme = (id === 'light') ? lightTheme : darkTheme;
    localStorage.setItem('songBirdTheme', JSON.stringify(id));
    setTheme(theme);
  };

  return (
    <PromoPage>
      <button id={'light'} onClick={handleThemeChange}>Light</button>
      <button id={'dark'} onClick={handleThemeChange}>Dark</button>
      <PromoContent>
        <p>Songbird quiz</p>
        <StyledLink to='/home'>Start songbird basic</StyledLink>
      </PromoContent>
    </PromoPage>
  );
};

export default Promo;
