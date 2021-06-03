import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components"
import { Header } from './Components/index';
import { GlobalStyles } from './GlobalStyle/GlobalStyles';

function App() {

  const theme = {
    defaultColor: "#fff",
    LightText: "#4d4d4d"
  }

  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>

        </Route>
      </Router >
    )
  }

  return (
    <React.Fragment>

      <Router>

        <ThemeProvider theme={theme}>

          <GlobalStyles />

          <Header />

          <Switch>
            <Route path="/" exact>

            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>

        </ThemeProvider>

      </Router>


    </React.Fragment>
  );
}

export default App;
