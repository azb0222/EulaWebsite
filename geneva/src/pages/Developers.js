import React from 'react';
import DeveloperHero from '../components/DeveloperHero';
import Services from '../components/ServiceBox';

const Developers = props => {
  return (
    <div class = "space-y-20">
      <DeveloperHero />
      <Services />
      <h1 class = "text-center text-4xl font-extrabold"> Talk to Us </h1>

    </div>
  );
};

export default Developers;