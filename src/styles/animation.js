import { keyframes } from 'styled-components';

export const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const spinAnimation = keyframes`
  to { transform: rotate(360deg); }
`;

export const turnOn = keyframes`
  0% { left: 100%; }
  100% { left: 0%; }
`;

export const turnOff = keyframes`
  0% { left: 0%; }
  100% { left: 100%; }
`;
