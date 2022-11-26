import React from 'react';
import GenevaRegister from "../assets/GenevaRegister.png";
import Email from './Email';

const Hero = props => {
  return (
    <div class = "flex flex-row m-5">
      <div class = "flex flex-col place-content-center">
        <h1 className="text-3xl font-bold mb-10 "> One Account. Personalization Everywhere. </h1>
        <Email />
      </div>
      <img src={GenevaRegister} />
    </div>
  );
};

export default Hero;
