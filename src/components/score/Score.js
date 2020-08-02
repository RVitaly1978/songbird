import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  margin-right: 2rem;
  margin-left: auto;
`;

const ScoreCount = styled.span`
  color: #008966;
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
