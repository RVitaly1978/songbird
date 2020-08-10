import React from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';
import { fadeInAnimation } from '../../styles/animation';

import Notification from '../notification';

const NotificationsContainer = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  max-width: 60rem;
  margin: ${props => props.theme.all.margin} auto;
  padding: 0 ${props => props.theme.all.padding};

  background-color: transparent;

  line-height: 1;

  user-select: none;

  @media ${device.mobileL} {
    margin: ${props => props.theme.all.marginMobile} auto;
    padding: 0 ${props => props.theme.all.paddingMobile};
  }
`;

const NotificationsList = styled.ul`
  width: 100%;

  li + li {
    margin-top: ${props => props.theme.all.margin};

    @media ${device.mobileL} {
      margin-top: ${props => props.theme.all.marginMobile};
    }
  }
`;

const NotificationsItem = styled.li`
  width: 100%;

  animation: ${fadeInAnimation} 0.3s linear;
`;

NotificationsContainer.displayName = 'NotificationsContainerContainerStyled';
NotificationsList.displayName = 'NotificationsListStyled';
NotificationsItem.displayName = 'NotificationsItemStyled';

const NotificationList = ({ notifications }) => {
  const NotificationList = notifications
    .map((obj) => {
      return (
        <NotificationsItem key={obj.id}>
          <Notification
            id={obj.id}
            type={obj.type}
            notification={obj.notification}
          />
        </NotificationsItem>
      );
    });

  return (
    <NotificationsContainer>
      <NotificationsList>
        {NotificationList}
      </NotificationsList>
    </NotificationsContainer>
  );
};

export default NotificationList;
