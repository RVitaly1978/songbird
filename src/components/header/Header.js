import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { device } from '../../styles/media';

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
  padding: 0.75rem 1.5rem;

  background-color: ${props => props.theme.secondary.color};
  border-radius: ${props => props.theme.all.borderRadius};

  color: inherit;

  font-weight: bold;
  text-decoration: none;

  transition: background-color 0.3s linear;

  cursor: pointer;

  @media (pointer: fine) {
    :hover {
      background-color: ${props => props.theme.secondary.hoverColor};
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

const Header = (props) => {
  const { data, levels, activeLevel, score, maxScore } = props;

  return (
    <HeaderContainer>
      <TopPanel>
        <Logo />
        <InfoPanel>
          <Score score={score} maxScore={maxScore} />
          <StyledLink to='/'>Exit</StyledLink>
        </InfoPanel>
      </TopPanel>
      <PaginationPanel>
        <Pagination data={data} levels={levels} activeLevel={activeLevel} />
      </PaginationPanel>
    </HeaderContainer>
  );
};

export default connect(mapStateToProps)(Header);
