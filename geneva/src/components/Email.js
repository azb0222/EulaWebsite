import React, { useState } from 'react';
import dashboard from "../assets/DeveloperDashboard.png";

const DeveloperHero = props => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (

    <form class="w-full max-w-sm bg-emailBoxBackground inline-block">
      <div class=" py-2 flex justify-between">
        <input class="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Email" aria-label="Email" />
        <button class="flex-shrink-0 relative inset-y-0 right-0  bg-submitButtonBackground hover:bg-genevaPurple text-sm text-white py-1 px-2 rounded mr-4"
          type="button"
          onClick={() => setEmailSubmitted(true)}
        >
          Sign Up
        </button>
      </div>
    </form>

  );
};

export default DeveloperHero;