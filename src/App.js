import React from 'react';
import{BrowserRouter} from "react-router-dom";

import Banner from './components/Banner';
import NavNav from './components/NavNav';
import RoutesRoute from './components/RoutesRoute';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavNav/>
        <Banner/>
        <hr />
        <RoutesRoute/>
      </BrowserRouter>
        <hr />
        <hr />
        <p>Uninorte 2021. Desarrollado con fines academicos para el curso de programación en MINTIC</p>
    </Container>
  );
}

export default App;
