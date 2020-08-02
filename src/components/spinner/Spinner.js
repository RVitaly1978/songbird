import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border-radius: inherit;

  pointer-events: none;
`;

const DonutSpinner = styled.div`
  width: 4rem;
  height: 4rem;

  border: 0.5rem solid rgba(0, 188, 140, 0.1);
  border-top-color: #008966;
  border-radius: 50%;

  animation: ${spinAnimation} 1.5s infinite linear;
`;

SpinnerContainer.displayName = 'SpinnerContainerStyled';
DonutSpinner.displayName = 'DonutSpinnerStyled';

function Spinner() {
  return (
    <SpinnerContainer>
      <DonutSpinner />
    </SpinnerContainer>
  );
}

export default Spinner;
