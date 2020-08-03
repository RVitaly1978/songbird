import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

const ButtonStyled = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: ${props => props.theme.all.margin};
  padding: 1.25rem;

  color: inherit;

  font: inherit;
  font-weight: bold;

  border: none;
  background-color: ${props => props.theme.secondary.color};
  border-radius: ${props => props.theme.all.borderRadius};

  outline: none;

  transition: color 0.3s linear, background-color 0.3s linear;

  cursor: pointer;

  user-select: none;

  @media (pointer: fine) {
    :hover {
      background-color: ${props => props.theme.secondary.hoverColor};
    }
  }

  @media ${device.mobileM} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

const LabelStyled = styled.span`
  pointer-events: none;
`;

ButtonStyled.displayName = 'ButtonStyled';
LabelStyled.displayName = 'LabelStyled';

const NextButton = (props) => {
  const {
    id,
    isDisabled = false,
    label = '',
    clickHandler = () => {},
    icon = null,
    dataTitle = null,
    dataPlacement = null,
  } = props;

  return (
    <ButtonStyled
      type="button"
      id={id}
      data-title={dataTitle}
      data-placement={dataPlacement}
      disabled={isDisabled}
      onClick={() => clickHandler(id)}
    >
      {icon}
      {(label && icon) && ' '}
      <LabelStyled>{label}</LabelStyled>
    </ButtonStyled>
  );
};

export default NextButton;
