import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components"
import { Header } from './Components/Nav/index';
import { GlobalStyles } from './GlobalStyle/GlobalStyles';
import { Home } from './routes/Home';

function App() {

  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const theme = {
    primaryColor: "##F9522A",
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

          <GlobalStyles/>

          <Header isOpen={isOpen} setIsOpen={setIsOpen}/>

          <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>

        </ThemeProvider>

      </Router>


    </React.Fragment>
  );
}

export default App;
