import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

import Button from '../button';

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding: ${props => props.theme.all.paddingMobile};

  background-color: ${props => props.theme.main.bgColor};
  border: 1px solid ${props => props.theme.main.borderColor};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.main};
  line-height: 1;

  user-select: none;
`;

const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: ${props => props.theme.all.paddingMobile};

  border-bottom: 1px solid ${props => props.theme.main.borderColor};
`;

const Title = styled.h3`
  font-weight: 700;

  text-transform: capitalize;
`;

const Content = styled.p`
  width: 100%;
  margin-top: ${props => props.theme.all.marginMobile};

  line-height: 1.6;
`;

const CloseButton = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

NotificationContainer.displayName = 'NotificationContainerContainerStyled';
NotificationHeader.displayName = 'NotificationHeaderContainerStyled';
Title.displayName = 'TitleStyled';
Content.displayName = 'ContentStyled';
CloseButton.displayName = 'CloseButtonStyled';

const Notification = ({ id, type, notification, delay = '3' }) => {
  const handleClick = (evt) => {
    console.log(evt.target.id);
  };

  return (
    <NotificationContainer>
      <NotificationHeader>
        <Title>{type}</Title>
        <CloseButton
          id='close'
          label='X'
          onClick={handleClick}
        />
      </NotificationHeader>
      <Content>
        {notification}
      </Content>
    </NotificationContainer>
  );
};

export default Notification;
