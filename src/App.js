import React from 'react';
import{BrowserRouter} from "react-router-dom";

import Banner from './components/Banner';
import NavNav from './components/NavNav';
import RoutesRoute from './components/RoutesRoute';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container>
      <Banner/>
      <BrowserRouter>
        <NavNav/>
        <hr />
        <RoutesRoute/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
