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

  transition: opacity 0.3s linear;

  cursor: pointer;

  user-select: none;

  &:disabled {
    pointer-events: none;
    background-color: ${props => props.theme.main.borderColor};
    opacity: 0.25;
  }

  @media (pointer: fine) {
    :hover {
      opacity: 0.75;
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
    label = null,
    onClick = () => {},
    Icon = null,
    dataTitle = null,
    dataPlacement = null,
    isDisabled = false,
  } = props;

  const IconComponent = Icon
    ? <Icon />
    : null;

  const LabelComponent = label
    ? <LabelStyled>{label}</LabelStyled>
    : null;

  return (
    <ButtonStyled
      {...props}
      type="button"
      id={id}
      data-title={dataTitle}
      data-placement={dataPlacement}
      disabled={isDisabled}
      onClick={(evt) => onClick(evt)}
    >
      {IconComponent}
      {(label && Icon) && ' '}
      {LabelComponent}
    </ButtonStyled>
  );
};

export default Button;
