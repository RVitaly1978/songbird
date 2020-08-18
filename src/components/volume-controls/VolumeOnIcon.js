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

const VolumeOnIcon = ({ iconTitle, onClick, id }) => (
  <VolumeIcon
    id={id}
    onClick={onClick}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={iconTitle}
  >
    <title id={iconTitle}>Volume on icon</title>
    <path
      d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49
        7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71
        2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z">
    </path>
  </VolumeIcon>
);

export default VolumeOnIcon;
