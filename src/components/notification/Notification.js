import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { deleteNotification } from '../../store/action-creators';

import Button from '../button';

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  padding: ${props => props.theme.all.paddingMobile};

  background-color: ${(props) => {
    if (props.type === 'error') {
      return props.theme.all.errorColor;
    } else if (props.type === 'success') {
      return props.theme.all.successColor;
    }
    return props.theme.main.bgColor;
  }};

  border-radius: ${props => props.theme.all.borderRadius};

  font-size: ${props => props.theme.all.fontSize.small};
  line-height: 1;

  user-select: none;
`;

const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: ${props => props.theme.all.paddingMobile};

  border-bottom: 1px solid ${(props) => props.theme.main.borderColor};
`;

const Title = styled.h3`
  font-size: 1.2em;
  font-weight: 700;

  text-transform: capitalize;
`;

const Content = styled.p`
  width: 100%;
  margin-top: ${props => props.theme.all.marginMobile};

  line-height: 1.6;
`;

const CloseButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
`;

NotificationContainer.displayName = 'NotificationContainerContainerStyled';
NotificationHeader.displayName = 'NotificationHeaderContainerStyled';
Title.displayName = 'TitleStyled';
Content.displayName = 'ContentStyled';
CloseButton.displayName = 'CloseButtonStyled';

const mapDispatchToProps = (dispatch) => ({
  deleteNotification: (id) => dispatch(deleteNotification(id))
});

const Notification = ({
  id, type, notification, delay = '5000',
  deleteNotification,
}) => {
  useEffect(() => {
    let canceled = false;
    setTimeout(() => {
      if (!canceled) {
        deleteNotification(id);
      }
    }, Number(delay));

    return () => {
      canceled = true;
    };
  }, [deleteNotification, id, delay]);

  const handleClick = () => {
    deleteNotification(id);
  };

  return (
    <NotificationContainer type={type}>
      <NotificationHeader type={type}>
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

export default connect(null, mapDispatchToProps)(Notification);
