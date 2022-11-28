import React from 'react';
import dashboard from "../assets/DeveloperDashboard.png";

const DeveloperHero = props => {
  return (
    <div class = "relative z-40 space-y-6 max-w-5xl object-center m-auto px-10 lg:px-0">
      <div class = "z-40 h-10"> </div>
      <h1 class="z-40 text-center text-4xl font-extrabold"> Customer Data Delivered to You </h1>
      <h1 class = "z-40 text-center text-xl font-medium"> Maids table how learn drift but purse stand yet set. Music me house could among oh as their. Piqued our sister shy nature almost his wicket. Hand dear so we hour to. He we be hastily offence effects he service.  </h1>
      <img src={dashboard} class="border-2" />
    </div>

  );
};

export default DeveloperHero;