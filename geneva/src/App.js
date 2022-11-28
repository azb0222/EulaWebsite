import React from 'react'
import styles from './styles' //use this for common styles ie <div className = {`${styles.paddingX} ${styles.flexCenter}`}> 
import { Navbar, Hero, Footer, Service, ServiceBox, DeveloperHero, Email } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Developers from './pages/Developers';
import FAQs from './pages/FAQs';
import AboutUs from './pages/AboutUs'; 
import Home from './pages/Home'; 

export const App = () => (
  <div>
       <svg class="absolute z-0  w-full inset-x-0 top-0" viewBox="0 0 303 88">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polygon id="Path" fill="#F5F5F5" points="0 0 0 87.890625 303 27.3398438 303 0"></polygon>
         </g>
      </svg>
    <Navbar />
        

    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Developers" element={<Developers class ="z-10" />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
  </div>

);


export default App