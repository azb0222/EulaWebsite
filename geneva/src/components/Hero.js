import React from 'react';
import GenevaRegister from "../assets/GenevaRegisterResized.png";
import Email from './Email';

const Hero = props => {
  return (
    <div class = "grid grid-rows-2 m-5 h-[28rem] max-w-5xl mx-auto ">
         
      <div class = " m-auto sm:ml-20 mt-28 flex flex-col place-content-center space-y-10 z-10 w-full max-w-sm">
        <h1 class="text-5xl font-bold text-center"> One Account. Personalization Everywhere. Personalization Everywhere. </h1>
        <h1 class = "text-center font-medium text-lg"> insert some bullshit here insert some bullshit here insert some bullshit here</h1>
        <Email />
      </div>
      <img class = "absolute top-0 z-0 lg:inset-y-0 md:mx-40 aspect-video invisible sm:visible"src={GenevaRegister} />
    </div>


    // <div>
    //   <div class = "bg-green-100 inline w ">
    //     tester1
    //   </div>
    //   <div>
    //     tester2
    //   </div>
    // </div>
  );
};

export default Hero;
