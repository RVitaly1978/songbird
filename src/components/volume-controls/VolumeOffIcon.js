import React from 'react';
import styled from 'styled-components';

const VolumeIcon = styled.svg`
  fill: ${props => props.theme.secondary.color};

  transition: fill 0.3s linear;

  cursor: pointer;

  user-select: none;

  & path {
    pointer-events: none;
  }

  &:disabled {
    pointer-events: none;
    fill: ${props => props.theme.main.borderColor};
    opacity: 0.25;
  }

  @media (pointer: fine) {
    :hover {
      fill: ${props => props.theme.secondary.hoverColor};
    }
  }
`;

VolumeIcon.displayName = 'VolumeIconStyled';

const VolumeOffIcon = (props) => {
  const { iconTitle, onClick, id } = props;

  return (
    <VolumeIcon
      {...props}
      id={id}
      onClick={onClick}
      width="30"
      height="30"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={iconTitle}
    >
      <title id={iconTitle}>Volume off icon</title>
      <path
        d="M3 9h4l5-5v16l-5-5H3V9m13.59 3L14 9.41L15.41 8L18 10.59L20.59 8L22 9.41L19.41
        12L22 14.59L20.59 16L18 13.41L15.41 16L14 14.59L16.59 12z">
      </path>
    </VolumeIcon>
  );
};

export default VolumeOffIcon;
