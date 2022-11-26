import React from 'react'
import styles from './styles'
import { Navbar, Hero, Footer, Service, ServiceBox, DeveloperHero, Email } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => (
  // <div>
  //   <div className = {`${styles.paddingX} ${styles.flexCenter}`}> 
  //     <h1 className = {`$${styles.heading2}`}> hello hello </h1>

  //     <Navbar />
  //   </div>

  //   <div className = {`${styles.flexStart}`}> 
  //     <div className = {`${styles.boxWidth}`}>

  //     <Hero />

  //     </div>
  //   </div>

  // </div>
  <div>
    <Navbar />
    <div className="h-70">
    </div>
    <Hero />

    <BrowserRouter>
      <Routes>
      <Route path = "/developers">
          <DeveloperHero />
          <ServiceBox />
        </Route>
      </Routes>
        
    </BrowserRouter>
  </div>

);


export default App