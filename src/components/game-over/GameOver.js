import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';
import { fadeInAnimation } from '../../styles/animation';

import Button from '../button';
import Spinner from '../spinner';

const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 74.8rem;
  margin: ${props => props.theme.all.margin} auto;
  padding: ${props => props.theme.all.padding};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.main};
  line-height: 1;

  user-select: none;

  animation: ${fadeInAnimation} 0.3s linear;

  @media ${device.mobileL} {
    margin: ${props => props.theme.all.marginMobile} auto;
    padding: ${props => props.theme.all.paddingMobile};
  }
`;

const Title = styled.h3`
  font-size: 2em;
  font-weight: 700;

  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.all.margin};
  padding-bottom: ${props => props.theme.all.padding};

  border-bottom: 1px solid ${props => props.theme.main.borderColor};

  line-height: 1.6;
  text-align: center;

  @media ${device.mobileL} {
    margin-top: ${props => props.theme.all.marginMobile};
    padding-bottom: ${props => props.theme.all.paddingMobile};
  }
`;

const ContentMarked = styled.span`
  font-weight: 700;
  color: ${props => props.theme.secondary.color};
`;

const PrizeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 3rem;
  margin-top: ${props => props.theme.all.margin};

  line-height: 1.6;
  font-weight: 700;
  text-align: center;
`;

const PrizeLoader = styled.div`
  position: relative;

  min-width: 3rem;
  min-height: 3rem;
  margin-right: 0.75rem;

  line-height: 1;
`;

const GameOverButton = styled(Button)`
  margin-top: ${props => props.theme.all.margin};

  @media ${device.mobileL} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

GameOverContainer.displayName = 'GameOverContainerContainerStyled';
Title.displayName = 'TitleStyled';
Content.displayName = 'ContentStyled';
ContentMarked.displayName = 'ContentMarkedStyled';
PrizeContent.displayName = 'PrizeContentStyled';
PrizeLoader.displayName = 'PrizeLoaderStyled';
GameOverButton.displayName = 'GameOverButtonStyled';

const GameOver = ({ score, maxScore, onClick, isLoading }) => {
  const Prise = isLoading
      ? <PrizeContent>
          <PrizeLoader><Spinner width='3rem' height='3rem'/></PrizeLoader>
          Подождите и будет сюрприз...
        </PrizeContent>
      : <PrizeContent>
          Наслаждайтесь победой!!!
        </PrizeContent>;

  const endedGame = (
    <>
      <Title>Поздравляем!!!</Title>
      <Content>
        <span>Вы прошли викторину и набрали </span>
        <ContentMarked>{score}</ContentMarked>
        <span> из </span>
        <ContentMarked>{maxScore}</ContentMarked>
        <span> возможных баллов</span>
      </Content>
    </>
  );

  const winGame = (
    <>
      <Title>Ура!!! Поздравляем!!!</Title>
      <Content>
        <span>Вы прошли викторину и набрали максимальное количество баллов </span>
        <ContentMarked>{maxScore}</ContentMarked>
        <span>!<br />Вы мой герой!</span>
        {Prise}
      </Content>
    </>
  );

  return (
    <GameOverContainer>
      {(score === maxScore)
        ? winGame
        : endedGame}
      {(score !== maxScore)
        && <GameOverButton
              id='RESTART_GAME'
              label='Повторить еще раз'
              onClick={onClick}
            />}
      <GameOverButton
        id='NEW_GAME'
        label='Новая игра'
        onClick={onClick}
      />
    </GameOverContainer>
  );
};

export default GameOver;
