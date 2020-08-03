import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

const ScoreContainer = styled.div`
  margin-right: 3rem;

  @media ${device.mobileM} {
    margin-right: 0;
  }
`;

const ScoreCount = styled.span`
  color: ${props => props.theme.secondary.color};
  font-weight: 700;
`;

ScoreContainer.displayName = 'ScoreContainerStyled';
ScoreCount.displayName = 'ScoreCountStyled';

const Score = ({ score }) => {
  return (
    <ScoreContainer>
      <span>Score: </span>
      <ScoreCount>{score ? score : 0}</ScoreCount>
    </ScoreContainer>
  );
};

export default Score;
