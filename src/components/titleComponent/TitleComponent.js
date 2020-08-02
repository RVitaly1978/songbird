import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.p`
  padding-bottom: 2rem;

  border-bottom: 1px solid #444;

  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  color: #008966;
  letter-spacing: 0.25rem;

  user-select: none;
`;

TitleContainer.displayName = 'TitleContainerStyled';

const TitleComponent = () => {
  return (
    <TitleContainer>
      ******
    </TitleContainer>
  );
};

export default TitleComponent;
