import React from 'react';
import logo from "../assets/logo.png";
import { Menu } from '@headlessui/react';
import { useState } from 'react'

// import {navLinks} from "../constants.js"; 

//move this to constants.js 
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Developers', href: './pages/Developers.js' },
  { name: 'About Us', href: './pages/AboutUs.js' },
  { name: 'Blog', href: '#' },
]

const Navbar = props => {
  return (
    // <div class="flex z-0">
    //   <div class="container mx-auto p-6 z-10 absolute">
    //     <div class="flex items-center justify-between">
    //       <div class="flex pt-2 relative container space-x-2 mx-auto">
    //         <img src={logo} class="w-8 h-8" />
    //         <h1 class="place-self-center text-lg">Geneva</h1>
    //       </div>


    //     </div>
    //   </div>
    // </div>


    // <div class="flex">
    

    //   <div className="">
    //     {navigation.map((item) => (
    //       <a key={item.name} href={item.href} className="font-heavy text-gray-900 hover:text-gray-900">
    //         {item.name}
    //       </a>
    //     ))}
    //   </div>

    //   <Menu as="div" className="inline-block lg:flex lg:min-w-0  z-10">
    //     <Menu.Button className="inline bg-genevaPurple py-2 px-4 text-white rounded-lg divide-y">
    //       Menu
    //     </Menu.Button>
    //     <Menu.Items>
    //       {navigation.map((item) => (
    //         <Menu.Item>
    //           {({ active }) => (
    //             <button
    //               className={`${active ? 'bg-emailBoxBackground text-black' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //             >
    //               {item.name}
    //             </button>
    //           )}
    //         </Menu.Item>
    //       ))}
    //     </Menu.Items>
    //   </Menu>
    // </div>

    <div class = "flex justify-evenly">
       <div class="flex relative container space-x-2 ml-4 mt-7 gap-x-0">
        <img src={logo} class="w-8 h-8" />
        <h1 class="place-self-center text-lg font-semibold">Geneva</h1>
      </div>

        <div class="hidden lg:flex lg:justify-center lg:gap-x-12  mr-4 mt-7">
          <a href="../pages/AboutUs" class="font-semibold text-gray-900 hover:text-gray-900">Home</a>

          <a href="../pages/Developers" class="font-semibold text-gray-900 hover:text-gray-900">Developers</a>

          <a href="#" class="font-semibold text-gray-900 hover:text-gray-900">FAQs</a>

          <a href="#" class="font-semibold text-gray-900 hover:text-gray-900">About Us</a>
        </div>


          
      <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
    </div>


  );
};

export default Navbar;