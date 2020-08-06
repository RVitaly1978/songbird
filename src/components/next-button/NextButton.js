import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

import Button from '../button/index';

const NextButtonStyled = styled(Button)`
  margin-top: ${props => props.theme.all.margin};

  @media ${device.mobileM} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

NextButtonStyled.displayName = 'NextButtonStyled';

const NextButton = (props) => {
  return (
    <NextButtonStyled {...props} />
  );
};

export default NextButton;
