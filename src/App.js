import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import history from './utils/history';
import Promo from './pages/promoPage/index';
import Home from './pages/homePage/index';
import NotFound from './pages/notFoundPage/index';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    background-color: #222;

    font-family: Arial, Helvetica, sans-serif;
    @include font ($size: 1.6rem, $height: 1, $weight: 700);
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 500;
    color: #fff;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  :focus {
    outline: none;
  }

  h1, h2, h3, div, p {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  padding: 0 1rem;
`;

Container.displayName = 'AppContainerStyled';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter history={history}>
        <Container>
          <Switch>
            <Route path='/promo' component={Promo} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
