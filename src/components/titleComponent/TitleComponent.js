import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.p`
  padding-bottom: ${props => props.theme.all.padding};

  border-bottom: 1px solid ${props => props.theme.main.borderColor};

  font-size: ${props => props.theme.all.fontSize.large};
  line-height: 1;
  font-weight: 700;
  color: ${props => props.theme.secondary.color};
  letter-spacing: 0.25rem;

  user-select: none;
`;

TitleContainer.displayName = 'TitleContainerStyled';

const TitleComponent = ({ hasCorrect, content }) => {
  return (
    <TitleContainer>
      {hasCorrect ? content : '******'}
    </TitleContainer>
  );
};

export default TitleComponent;
