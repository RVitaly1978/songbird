import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../logo/index';
import Score from '../score/index';
import Pagination from '../pagination/index';

const HeaderContainer = styled.div`
  width: 100%;
`;

const TopPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const PaginationPanel = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;

  background-color: #008966;
  color: #fff;
  border-radius: 0.25rem;

  font-weight: 500;
  text-decoration: none;

  transition: background-color 0.3s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      background-color: #00bc8c;
    }
  }
`;

HeaderContainer.displayName = 'HeaderContainerStyled';
TopPanel.displayName = 'TopPanelStyled';
PaginationPanel.displayName = 'PaginationPanelStyled';
StyledLink.displayName = 'StyledLinkStyled';

const Header = () => {
  return (
    <HeaderContainer>
      <TopPanel>
        <Logo />
        <Score score={5} />
        <StyledLink to='/promo'>Exit</StyledLink>
      </TopPanel>
      <PaginationPanel>
        <Pagination />
      </PaginationPanel>
    </HeaderContainer>
  );
};

export default Header;
