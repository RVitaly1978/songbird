import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';
import { lightTheme, darkTheme } from '../../styles/theme';
import { fadeInAnimation } from '../../styles/animation';
import { newGameBirdsBasic, newGameAnimalsBasic } from '../../store/action-creators';

import Button from '../../components/button';
import Logo from '../../components/logo';
import ToggleSwitcher from '../../components/toggle-switcher';
import VolumeControls from '../../components/volume-controls';

const PromoPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: ${props => props.theme.all.padding};

  user-select: none;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile};
  }
`;

const PromoContent = styled.div`
  width: 100%;
  max-width: 74.8rem;
  padding: ${props => props.theme.all.padding};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.main};
  line-height: 1.6;
  text-align: center;

  transform: translateY(calc(-50vh + 50%));

  pointer-events: ${props => props.disabled ? 'none' : 'unset'};
  opacity: ${props => props.disabled ? '0' : 'unset'};

  animation: ${fadeInAnimation} 0.3s linear;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile};
  }
`;

const PromoControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: ${props => props.theme.all.padding};

  border-bottom: 1px solid ${props => props.theme.main.borderColor};

  line-height: 1;

  @media ${device.mobileL} {
    padding-bottom: ${props => props.theme.all.paddingMobile};
  }
`;

const PromoTitle = styled.p`
  width: 100%;
  margin-top: 2.5em;
  padding-bottom: 2.5em;

  border-bottom: 1px solid ${props => props.theme.main.borderColor};

  font-size: 1.25em;
  line-height: 1.6;
  font-weight: 700;
  text-align: center;

  @media ${device.mobileL} {
    font-size: 1em;
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

  padding: ${props => props.theme.all.padding};

  user-select: none;

  animation: ${fadeInAnimation} 0.3s linear;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile};
  }
`;

const PromoModalContent = styled.div`
  width: 100%;
  max-width: 74.8rem;
  padding: ${props => props.theme.all.padding};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.main};
  line-height: 1.6;
  text-align: center;

  @media ${device.mobileL} {
    padding: ${props => props.theme.all.paddingMobile};
  }
`;

PromoPage.displayName = 'PromoPageStyled';
PromoControls.displayName = 'PromoControlsStyled';
PromoContent.displayName = 'PromoContentStyled';
PromoTitle.displayName = 'PromoTitleStyled';
PromoButton.displayName = 'PromoButtonStyled';
PromoModal.displayName = 'PromoModalStyled';
PromoModalContent.displayName = 'PromoModalContentStyled';

const mapStateToProps = ({ data }) => {
  return { data };
};

const mapDispatchToProps = (dispatch) => ({
  newGameBirdsBasic: () => dispatch(newGameBirdsBasic()),
  newGameAnimalsBasic: () => dispatch(newGameAnimalsBasic()),
});

const Promo = ({ data, theme, setTheme, newGameBirdsBasic, newGameAnimalsBasic }) => {
  const history = useHistory();
  const [newGameId, setNewGameId] = useState(null);

  const mapButtonIdToActions = (id) => {
    const map = {
      NEW_GAME_BIRDS_BASIC: newGameBirdsBasic,
      NEW_GAME_ANIMALS_BASIC: newGameAnimalsBasic,
    };
    return map[id];
  };

  const handleThemeChange = (evt) => {
    const { checked } = evt.target;
    const theme = checked ? darkTheme : lightTheme;
    localStorage.setItem('songBirdTheme', JSON.stringify(theme.id));
    setTheme(theme);
  };

  const handleGameSelect = (evt) => {
    const { id } = evt.target;

    if (id === 'CONTINUE') {
      history.push('/');
      return;
    }

    if (!data.length) {
      mapButtonIdToActions(id)();
      history.push('/');
    } else {
      setNewGameId(id);
    }
  };

  const handleModalSelect = (evt) => {
    const { id } = evt.target;

    if (id === 'CONTINUE') {
      history.push('/');
      return;
    }

    mapButtonIdToActions(newGameId)();
    setNewGameId(null);
    history.push('/');
  };

  const modalElement = (
    <PromoModal>
      <PromoModalContent>
        <PromoTitle>
          {'У вас есть незаконченная игра.'}
          <br />
          {'Вы хотите начать новую или продолжить начатую?'}
        </PromoTitle>
        <PromoButton
          id='NEW_GAME'
          label='Начать новую игру'
          onClick={handleModalSelect}
        />
        <PromoButton
          id='CONTINUE'
          label='Продолжить'
          onClick={handleModalSelect}
        />
      </PromoModalContent>
    </PromoModal>
  );

  return (
    <PromoPage>
      {newGameId && modalElement}
      <Logo />
      <PromoContent disabled={newGameId}>
        <PromoControls>
          <ToggleSwitcher
            labelOn='Dark'
            labelOff='Light'
            onChange={handleThemeChange}
            isChecked={theme.id === 'darkTheme' ? true : false}
          />
          <VolumeControls />
        </PromoControls>
        <PromoTitle>
          {'А я милого узнаю а по походке...'}
          <br />
          {'А ты меня угадаешь?'}
        </PromoTitle>
        <PromoButton
          id='NEW_GAME_BIRDS_BASIC'
          label='Начать "Song bird"'
          onClick={handleGameSelect}
        />
        <PromoButton
          id='NEW_GAME_ANIMALS_BASIC'
          label='Начать "Roar animal"'
          onClick={handleGameSelect}
        />
        <br />
        <PromoButton
          id='CONTINUE'
          label='Продолжить начатую игру'
          onClick={handleGameSelect}
          isDisabled={!data.length}
        />
      </PromoContent>
    </PromoPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
