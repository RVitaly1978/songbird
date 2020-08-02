import { keyframes } from 'styled-components';

export const fadeInAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const spinAnimation = keyframes`
  to { transform: rotate(360deg); }
`;
