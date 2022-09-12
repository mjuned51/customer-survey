import './App.css';
import React,{ useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from "./PageFive";
import Welcome from "./Welcome";
import Home from './Home';

function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route index path='/' element={<Welcome />} />
          <Route path="/1" element={<PageOne />} />
          <Route path="/2" element={<PageTwo />} />
          <Route path="/3" element={<PageThree />} />
          <Route path="/4" element={<PageFour />} />
          <Route path="/5" element={<PageFive />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* </Route> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
