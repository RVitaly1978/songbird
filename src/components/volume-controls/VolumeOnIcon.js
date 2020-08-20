import React from 'react';
import styled from 'styled-components';

const VolumeIcon = styled.svg`
  fill: ${props => props.theme.secondary.color};

  transition: opacity 0.3s linear;

  cursor: pointer;

  user-select: none;

  & path {
    pointer-events: none;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.20;
  }

  @media (pointer: fine) {
    :hover {
      opacity: 0.75;
    }
  }
`;

VolumeIcon.displayName = 'VolumeIconStyled';

const VolumeOnIcon = (props) => {
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
      <title id={iconTitle}>Volume on icon</title>
      <path
        d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49
          7-8.77c0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71
          2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z">
      </path>
    </VolumeIcon>
  );
};

export default VolumeOnIcon;
