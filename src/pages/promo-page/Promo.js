import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';
import { lightTheme, darkTheme } from '../../styles/theme';
import { fadeInAnimation } from '../../styles/animation';

import Button from '../../components/button';

const PromoPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.all.padding} 0;

  user-select: none;

  animation: ${fadeInAnimation} 0.3s linear;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile} 0;
  }
`;

const PromoContent = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: ${props => props.theme.all.padding};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.main};
  line-height: 1.6;
  text-align: center;

  pointer-events: ${props => props.disabled ? 'none' : 'unset'};

  @media ${device.mobileL} {
    width: ${props => props.theme.all.paddingMobile} 0;
    padding: ${props => props.theme.all.paddingMobile};
  }
`;

const PromoTitle = styled.p`
  width: 100%;
  padding-bottom: ${props => props.theme.all.padding};

  border-bottom: 1px solid ${props => props.theme.main.borderColor};

  font-size: 1.25em;
  line-height: 1.6;
  font-weight: 700;
  text-align: center;

  @media ${device.mobileL} {
    padding-bottom: ${props => props.theme.all.paddingMobile};
  }
`;

const PromoButton = styled(Button)`
  margin-top: ${props => props.theme.all.margin};

  @media ${device.mobileL} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

const PromoModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  user-select: none;

  background-color: ${props => props.theme.main.bodyColor};

  animation: ${fadeInAnimation} 0.3s linear;
`;

PromoPage.displayName = 'PromoPageStyled';
PromoContent.displayName = 'PromoContentStyled';
PromoTitle.displayName = 'PromoTitleStyled';
PromoButton.displayName = 'PromoButtonStyled';
PromoModal.displayName = 'PromoModalStyled';

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
    } else if (id === 'CONTINUE') {
      history.push('/');
    }
  };

  const handleMessageSelect = (evt) => {
    const { id } = evt.target;

    if (id === 'NEW_GAME_BIRDS_BASIC') {
      newGameBirdsBasic();
      history.push('/');
    } else if (id === 'CONTINUE') {
      history.push('/');
    }
  };

  const messageElement = (
    <PromoModal>
      <PromoContent>
        <PromoTitle>
          {'У вас есть начатая игра.'}
          <br />
          {'Вы хотите начать новую или продолжить начатую?'}
        </PromoTitle>
        <PromoButton
          id='CONTINUE'
          label='Продолжить?'
          onClick={handleMessageSelect}
        />
        <PromoButton
          id='NEW_GAME_BIRDS_BASIC'
          label='Начать новую игру?'
          onClick={handleMessageSelect}
        />
      </PromoContent>
    </PromoModal>
  );

  return (
    <PromoPage>
      {isMessage && messageElement}
      <button id={'light'} onClick={handleThemeChange}>Light</button>
      <button id={'dark'} onClick={handleThemeChange}>Dark</button>
      <PromoContent disabled={isMessage}>
        <PromoTitle>
          {'А я милого узнаю а по походке...'}
          <br />
          {'А ты меня угадаешь?'}
        </PromoTitle>
        <PromoButton
          id='NEW_GAME_BIRDS_BASIC'
          label='Начать "Songbird-basic"'
          onClick={handleGameSelect}
        />
        <PromoButton
          id='NEW_GAME_BIRDS_BASIC'
          label='Начать "Songbird-advance"'
          isDisabled={true}
          onClick={handleGameSelect}
        />
        <br />
        <PromoButton
          id='CONTINUE'
          label='Продолжить'
          onClick={handleGameSelect}
          isDisabled={!data.length}
        />
      </PromoContent>
    </PromoPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
