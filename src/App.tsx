import React, { useState } from 'react';
import { GlobalStyles } from './GlobalStyle/GlobalStyles';
import * as s from "./style.app"

function App() {

  return (
    <React.Fragment>
      <GlobalStyles />

      <s.Wrapper>
        <div className="txt">
          <img src="https://image.flaticon.com/icons/png/512/1038/1038726.png" alt="imagem palhaço" />
          <h1>aguarde um minuto...</h1>
        </div>

        <s.Loading>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
        </s.Loading>

      </s.Wrapper>


    </React.Fragment>
  );
}

export default App;
