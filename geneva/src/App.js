import React from 'react'
import styles from './styles'
import { Navbar, Hero, Footer } from './components'; 

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
      {/* <h1 class = "text-2xl"> 
        Geneva
      </h1> */}
      <Navbar />
      {/* <Hero /> */}
    </div>
   
); 


export default App