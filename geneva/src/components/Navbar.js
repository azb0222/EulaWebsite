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

    //       <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
    //         {navigation.map((item) => (
    //           <a key={item.name} href={item.href} className="font-heavy text-gray-900 hover:text-gray-900">
    //             {item.name}
    //           </a>
    //         ))}
    //       </div>

    //       <Menu as="div" className="inline-block lg:flex lg:min-w-0 lg:flex-1 lg:justify-end z-10">
    //         <Menu.Button className="text-xl bg-genevaPurple text-white px-5 py-2 rounded-lg font-bold divide-y">
    //           Menu
    //         </Menu.Button>
    //         <Menu.Items>
    //           {navigation.map((item) => (
    //             <Menu.Item>
    //               {({ active }) => (
    //                 <button
    //                   className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //                 >
    //                   {item.name}
    //                 </button>
    //               )}
    //             </Menu.Item>
    //           ))}
    //         </Menu.Items>
    //       </Menu>
    //     </div>
    //   </div>
    // </div>


    <div>
      <div class="flex relative container space-x-2 ml-4 mt-7 gap-x-0">
        <img src={logo} class="w-8 h-8" />
        <h1 class="place-self-center text-lg font-semibold">Geneva</h1>
      </div>

      
      <button class = "inline">
        hi hi hi 
      </button>

    </div>

  );
};

export default Navbar;