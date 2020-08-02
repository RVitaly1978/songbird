import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 2rem;
  padding: 1.25rem;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;

  background-color: #008966;

  border: 1px solid #444;
  border-radius: 0.5rem;

  outline: none;

  transition: color 0.3s linear, background-color 0.3s linear;

  cursor: pointer;
  user-select: none;

  @media (pointer: fine) {
    :hover {
      background-color: #00bc8c;
    }
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
    isActive = false,
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
