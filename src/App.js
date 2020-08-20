import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { fadeInAnimation } from './styles/animation';
import { initTheme } from './styles/theme';

import Promo from './pages/promo-page';
import Home from './pages/home-page';
import NotFound from './pages/not-found-page';

import bgLight from '../public/bg-light.png';
import bgDark from '../public/bg-dark.png';

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

    background: url(${props => props.theme.id === 'lightTheme' ? bgLight : bgDark});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    font-family: Arial, Helvetica, sans-serif;
    font-size: ${props => props.theme.all.fontSize.main};
    line-height: 1;
    font-weight: 500;
    color: ${props => props.theme.main.color};

    transition: background 0.5s linear, color 0.1s linear;
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
  animation: ${fadeInAnimation} 0.3s linear;
`;

Container.displayName = 'AppContainerStyled';

const App = () => {
  const [theme, setTheme] = useState(initTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                path='/promo'
                component={(props) => <Promo {...props} theme={theme} setTheme={setTheme} />}
              />
              <Route component={NotFound} />
            </Switch>
          </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
