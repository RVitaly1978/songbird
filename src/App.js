import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { device } from './styles/media';
import { fadeInAnimation } from './styles/animation';
import { initTheme } from './styles/theme';

import Promo from './pages/promo-page';
import Home from './pages/home-page';
import NotFound from './pages/not-found-page';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;

    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;

    background-color: ${props => props.theme.main.bodyColor};

    font-family: Arial, Helvetica, sans-serif;
    font-size: ${props => props.theme.all.fontSize.main};
    line-height: 1;
    font-weight: 500;
    color: ${props => props.theme.main.color};

    transition: background-color 0.1s linear, color 0.1s linear;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  :focus {
    outline: none;
  }

  h1, h2, h3, div, p, ul, li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;

const Container = styled.div`
  padding: 0 ${props => props.theme.all.padding};

  animation: ${fadeInAnimation} 0.3s linear;

  @media ${device.mobileL} {
    padding: 0 ${props => props.theme.all.paddingMobile};
  }
`;

Container.displayName = 'AppContainerStyled';

const App = () => {
  const [theme, setTheme] = useState(initTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/promo' component={(props) => <Promo {...props} setTheme={setTheme} />} />
              <Route component={NotFound} />
            </Switch>
          </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
