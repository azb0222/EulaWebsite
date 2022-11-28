import React from 'react';
import logo from "../assets/logo.png";
import { Menu } from '@headlessui/react';
import { useState } from 'react'
import { Link } from "react-router-dom";
// import {navLinks} from "../constants.js"; 

//move this to constants.js 
const navigation = [
  { name: 'Home', href: '/Home' },
  { name: 'Developers', href: '/Developers' },
  { name: 'About Us', href: '/AboutUs' },
  { name: 'Blog', href: '/Blog' },
]



const Navbar = props => {

  let background = "";
  const [currentLink, setCurrentLink] = useState('home');

  switch (currentLink) {
    case 'flash':
      background = "bg-genevaPurple rounded-full";
      break;
    case 'sets':
      background = { backgroundColor: 'blue' };
      break;
    case 'new':
      background = { backgroundColor: 'green' };
      break;
    case 'about':
      background = { backgroundColor: 'yellow' };
      break;
    case 'login':
      background = { backgroundColor: 'cyan' };
      break;
    default:
      background = {}
  }

  return (


    <div class="flex">

      <div class="flex relative container space-x-2 ml-4 mt-7 gap-x-0 block-inline">
        <img src={logo} class="w-8 h-8 my-auto" />
        <h1 class="m-auto text-xl font-bold">Geneva</h1>
      </div>

      <div class="hidden lg:flex lg:justify-center lg:gap-x-12  mr-4 mt-7 z-10 text-lg">
        <a href="/Home" class={`${background} font-semibold text-gray-900 hover:text-gray-900`} onClick={() => setCurrentLink('flash')} >Home</a>
        {/* <a href="/Home" style={background} class="font-semibold text-gray-900 hover:text-gray-900 ${background}" onClick={() => setCurrentLink('flash')}>Home</a> */}

        <a href="/Developers" class="font-semibold text-gray-900 hover:text-gray-900">Developers</a>

        <a href="/FAQs" class="font-semibold text-gray-900 hover:text-gray-900">FAQs</a>

        <a href="/AboutUs" class="font-semibold text-gray-900 hover:text-gray-900">About Us</a>
      </div>

      <div>

      </div>

      <Menu as="div" className="inline-block lg:flex lg:min-w-0  z-10">
        <Menu.Button className="lg:hidden mr-4 mt-6 flex-shrink-0 relative inset-y-0 right-0 bg-genevaPurple text-white py-2 px-7 rounded-lg font-bold text-lg">
          Menu
        </Menu.Button>
        <Menu.Items class="absolute bg-menuBackground rounded-md py-4 mt-6 right-4 px-2 z-50 lg:hidden">
          {navigation.map((item) => (
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active ? 'bg-emailBoxBackground text-black' : 'text-gray-900'} group flex w-full items-center rounded-md py-2 mr-4 px-14 font-semibold text-md`}
                  href={item.href}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>

      </Menu>

    </div>
  );
};

export default Navbar;

