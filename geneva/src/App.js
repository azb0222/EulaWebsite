import React from 'react'
import styles from './styles'
import { Navbar, Hero, Footer, Service } from './components'; 

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
      <Hero />
      <Footer />
      <Service />
    </div>
   
); 


export default App