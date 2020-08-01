import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PromoPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  padding: 1rem;

  user-select: none;
`;

const PromoContent = styled.div`
  max-width: 60rem;
  padding: 2rem;

  background-color: #303030;
  border: 1px solid #444;
  border-radius: 0.25rem;

  font-size: 24px;
  line-height: 1.6;
  text-align: center;
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

const Promo = () => (
  <PromoPage>
    <PromoContent>
      <p>Songbird quiz</p>
      <StyledLink to='/'>Start songbird basic</StyledLink>
    </PromoContent>
  </PromoPage>
);

export default Promo;
