import React from 'react';
import styled from 'styled-components';

const HeaderContent = styled.div`
  width: 40rem;
`;

const Header = ({ children }) => {
  return (
    <HeaderContent>
      Songbird
      { children }
    </HeaderContent>
  );
};

export default Header;
