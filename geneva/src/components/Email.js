import React, { useState } from 'react';
import dashboard from "../assets/DeveloperDashboard.png";

const DeveloperHero = props => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (

    <form class="w-full max-w-sm bg-emailBoxBackground inline-block rounded-full">
      <div class="flex justify-between">
        <input class="ml-4 my-4 appearance-none bg-transparent border-none w-full mr-3 py-1 pl-2 leading-tight focus:outline-none" type="text" placeholder="Enter Your Email" aria-label="Email" />
        <button class="flex-shrink-0 relative inset-y-0 right-0  bg-submitButtonBackground hover:bg-genevaPurple text-sm text-white py-1 px-4 rounded-full"
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