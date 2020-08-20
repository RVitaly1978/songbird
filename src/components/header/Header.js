import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';
import { fadeInAnimation } from '../../styles/animation';

import Logo from '../logo';
import Score from '../score';
import Pagination from '../pagination';
import { CloseButtonIcon } from '../icons';

const HeaderContainer = styled.div`
  width: 100%;

  animation: ${fadeInAnimation} 0.3s linear;
`;

const TopPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media ${device.mobileM} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const InfoPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobileM} {
    justify-content: space-between;

    width: 100%;
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

const PaginationPanel = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.all.margin};

  @media ${device.mobileM} {
    margin-top: ${props => props.theme.all.marginMobile};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  background-color: ${props => props.theme.secondary.color};
  border-radius: ${props => props.theme.all.borderRadius};

  font-size: 3.0rem;
  line-height: 0;
  color: inherit;

  cursor: pointer;

  transition: opacity 0.3s linear;

  &:disabled {
    pointer-events: none;
    opacity: 0.2;
  }

  @media (pointer: fine) {
    :hover {
      opacity: 0.75;
    }
  }
`;

HeaderContainer.displayName = 'HeaderContainerStyled';
TopPanel.displayName = 'TopPanelStyled';
InfoPanel.displayName = 'InfoPanelStyled';
PaginationPanel.displayName = 'PaginationPanelStyled';
StyledLink.displayName = 'StyledLinkStyled';

const mapStateToProps = ({ data, levels, activeLevel, score, maxScore }) => {
  return {
    data,
    levels,
    activeLevel,
    score,
    maxScore,
  };
};

const Header = ({ data, levels, activeLevel, score, maxScore }) => {
  return (
    <HeaderContainer>
      <TopPanel>
        <Logo />
        <InfoPanel>
          <Score score={score} maxScore={maxScore} />
          <StyledLink to='/promo'>
            <CloseButtonIcon />
          </StyledLink>
        </InfoPanel>
      </TopPanel>
      <PaginationPanel>
        <Pagination data={data} levels={levels} activeLevel={activeLevel} />
      </PaginationPanel>
    </HeaderContainer>
  );
};

export default connect(mapStateToProps)(Header);
