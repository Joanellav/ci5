import React from 'react';
import{BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import {Alert, Container} from 'react-bootstrap'

function App() {
  return (
    <Container>

    
      <Alert variant="secondary" className="mt-1">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
      <BrowserRouter>
        <nav>
          <Link to="/" className="btn btn-dark">Home </Link>
          <Link to="/about" className="btn btn-dark">About</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
