import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
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

  &:disabled {
    pointer-events: none;
    background-color: ${props => props.theme.main.borderColor};
  }

  @media (pointer: fine) {
    :hover {
      background-color: ${props => props.theme.secondary.hoverColor};
    }
  }
`;

const LabelStyled = styled.span`
  pointer-events: none;
`;

ButtonStyled.displayName = 'ButtonStyled';
LabelStyled.displayName = 'LabelStyled';

const Button = (props) => {
  const {
    id,
    label = '',
    onClick = () => {},
    icon = null,
    dataTitle = null,
    dataPlacement = null,
    isDisabled = false,
  } = props;

  return (
    <ButtonStyled
      type="button"
      id={id}
      data-title={dataTitle}
      data-placement={dataPlacement}
      disabled={isDisabled}
      onClick={(evt) => onClick(evt)}
    >
      {icon}
      {(label && icon) && ' '}
      <LabelStyled>{label}</LabelStyled>
    </ButtonStyled>
  );
};

export default Button;
