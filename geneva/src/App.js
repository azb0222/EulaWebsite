import React from 'react'
import styles from './styles'
import { Navbar, Hero, Footer } from './components'; 

//create context, place it in usercontext Variable 
export const App = () => (
  //App wraps our entire application 
    <div>
      <div className = {`${styles.paddingX} ${styles.flexCenter}`}> 
        <h1 className = {`$${styles.heading2}`}> hello hello </h1>
        Hero (Sign Up render)  should animate image switch tbh. has email sign up
        Render 2 (three apps integrating)
        Partners (once we get there)
        eventually include create account button 

        <Navbar />
      </div>

      <div className = {`${styles.flexStart}`}> 
        <div className = {`${styles.boxWidth}`}>

        <Hero />

        </div>
      </div>

    </div>
); 


export default App