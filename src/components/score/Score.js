import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

const ScoreContainer = styled.div`
  margin-right: 3rem;

  font-size: 1.2em;
  font-weight: 700;

  color: ${props => props.theme.secondary.color};

  @media ${device.mobileM} {
    margin-right: 0;
  }
`;

const ScoreCount = styled.span`
  color: ${props => props.theme.secondary.color};
`;

const MaxScoreCount = styled.span`
  color: ${props => props.theme.main.borderColor};
`;

ScoreContainer.displayName = 'ScoreContainerStyled';
ScoreCount.displayName = 'ScoreCountStyled';

const Score = ({ score, maxScore }) => {
  return (
    <ScoreContainer>
      <span>Score: </span>
      <ScoreCount>{score ? score : 0}</ScoreCount>
      <MaxScoreCount>{maxScore ? ` / ${maxScore}` : null}</MaxScoreCount>
    </ScoreContainer>
  );
};

export default Score;
