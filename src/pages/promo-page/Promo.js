import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import localForage from 'localforage';

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

  pointer-events: ${props => props.disabled ? 'none' : 'unset'};
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

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

const newGameBirdsBasic = () => ({
  type: 'NEW_GAME_BIRDS_BASIC',
});

const mapDispatchToProps = (dispatch) => ({
  newGameBirdsBasic: () => dispatch(newGameBirdsBasic()),
});

const Promo = ({ setTheme, newGameBirdsBasic, data }) => {
  const history = useHistory();
  const [isMessage, setIsMessage] = useState(false);

  const handleThemeChange = (evt) => {
    const { id } = evt.target;
    const theme = (id === 'light') ? lightTheme : darkTheme;
    localStorage.setItem('songBirdTheme', JSON.stringify(id));
    setTheme(theme);
  };

  const handleGameSelect = (evt) => {
    const { id } = evt.target;

    if (id === 'NEW_GAME_BIRDS_BASIC') {
      if (!data.length) {
        newGameBirdsBasic();
        history.push('/');
      } else {
        setIsMessage(true);
      }
    } else if (id === 'continue') {
      history.push('/');
    }
  };

  const handleMessageSelect = (evt) => {
    const { id } = evt.target;

    if (id === 'NEW_GAME_BIRDS_BASIC') {
      newGameBirdsBasic();
      history.push('/');
    } else if (id === 'continue') {
      history.push('/');
    }
  };

  const messageElement = (
    <div>
      У вас есть начатая игра. Вы хотите начать новую или продолжить начатую?
      <button id={'continue'} onClick={handleMessageSelect}>Продолжить</button>
      <button id={'NEW_GAME_BIRDS_BASIC'} onClick={handleMessageSelect}>Начать новую игру</button>
    </div>
  );

  return (
    <PromoPage>
      {isMessage && messageElement}
      <button id={'light'} onClick={handleThemeChange}>Light</button>
      <button id={'dark'} onClick={handleThemeChange}>Dark</button>
      <PromoContent disabled={isMessage}>
        <p>Songbird quiz</p>
        <button id={'continue'} onClick={handleGameSelect} disabled={data.length === 0}>Продолжить</button>
        <button id={'NEW_GAME_BIRDS_BASIC'} onClick={handleGameSelect}>Start songbird basic</button>
        {/* <StyledLink to='/home'>Start songbird basic</StyledLink> */}
      </PromoContent>
    </PromoPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
