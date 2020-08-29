import React from 'react';
import styled from 'styled-components';

const IconContainerStyled = styled.div`
  position: relative;

  width: 1em;
  height: 1em;
  padding: 0;

  color: inherit;
  font-size: inherit;
  line-height: 1;

  border: none;
  background-color: inherit;
  border-radius: inherit;

  outline: none;

  pointer-events: none;

  user-select: none;
`;

const IconLineStyled = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  display: inline-block;

  width: calc(100% - 0.4em);
  height: 0.1em;

  background-color: ${props => props.theme.main.color};

  border-radius: 0.05em;

  &:first-child {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:last-child {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

IconContainerStyled.displayName = 'IconContainerStyled';
IconLineStyled.displayName = 'IconLineStyled';

const CloseButtonIcon = () => {
  return (
    <IconContainerStyled>
      <IconLineStyled />
      <IconLineStyled />
    </IconContainerStyled>
  );
};

export default CloseButtonIcon;
