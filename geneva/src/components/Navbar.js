import React from 'react';
import logo from "./logo.png";
import { Menu } from '@headlessui/react';
import { useState } from 'react'

// import {navLinks} from "../constants.js"; 

//move this to constants.js 
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Developers', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Blog', href: '#' },
]

const Navbar = props => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div class="flex z-0">
      <svg class="z-0 relative w-full inset-x-0 top-0" viewBox="0 0 303 88">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polygon id="Path" fill="#D8D8D8" points="0 0 0 87.890625 303 27.3398438 303 0"></polygon>
        </g>
      </svg>

      <div class= "container mx-auto p-6 z-10 absolute">
        <div class="flex items-center justify-between">
          <div class="flex pt-2 relative container space-x-2 mx-auto">
            <img src={logo} class="w-8 h-8" />
            <h1 class="place-self-center text-lg">Geneva</h1>
          </div>

          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-heavy text-gray-900 hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>

        </div>

        <div className=" lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Log in
          </a>
        </div>
      </div>
    </div>

  );
};

export default Navbar;