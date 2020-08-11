import React from 'react';
import styled from 'styled-components';

import { turnOn, turnOff } from '../../styles/animation';

const SwitcherStyled = styled.span`
  position: relative;

  display: inline-block;

  width: 8rem;
  height: 3.5rem;
  margin: 0;

  border-radius: 1.75rem;

  overflow: hidden;

  opacity: 0.75;

  transition: opacity 0.2s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      opacity: 1;
    }
  }
`;

const InputStyled = styled.input`
  appearance: none;

  position: relative;

  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  border-radius: inherit;
  background-color: black;

  outline:none;

  font-family: inherit;

  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    font-weight: 700;
    text-transform: uppercase;

    transition: color 0.2s ease-out;
  }

  &:before {
    content: attr(data-on);
    color: black;
  }

  &:after {
    content: attr(data-off);
    color: white;
  }

  &:checked {
    &:after {
      color: transparent;
    }
  }

  &:checked + label {
    left: 0;
    animation: ${turnOn} 0.2s ease-out;
  }

  &:not(:checked) {
    &:before {
      color: transparent;
    }
  }

  &:not(:checked) + label {
    left: 100%;
    animation: ${turnOff} 0.2s ease-out;
  }
`;

const LabelStyled = styled.label`
  display: inline-block;

  position: absolute;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  border-radius: inherit;

  background-color: white;

  pointer-events: none;
`;

SwitcherStyled.displayName = 'SwitcherStyled';
InputStyled.displayName = 'InputStyled';
LabelStyled.displayName = 'LabelStyled';

const ToggleSwitcher = (props) => {
  const {
    id='switcher',
    labelOn = 'ON',
    labelOff = 'OFF',
    isChecked = true,
    onChange = () => {},
    dataTitle = null,
    dataPlacement = null,
    isDisabled = false,
  } = props;

  return (
    <SwitcherStyled
      {...props}
      data-title={dataTitle}
      data-placement={dataPlacement}
      disabled={isDisabled}
    >
      <InputStyled
        type='checkbox'
        id={id}
        onChange={(evt) => onChange(evt)}
        data-on={labelOn}
        data-off={labelOff}
        checked={isChecked}
      />
      <LabelStyled htmlFor={id}></LabelStyled>
    </SwitcherStyled>
  );
};

export default ToggleSwitcher;
