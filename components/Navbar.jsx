import Link from 'next/link';

import { FiMenu } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';

export const Navbar = () => {
  let isMenuOpen = false;
  let isServicesOpen = false;

  const mobilMenu = () => {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    if (!isMenuOpen) {
      navbar.style.height = 100 + 'vh';
      menu.classList.add('hidden');
      close.classList.remove('hidden');
    } else {
      navbar.style.height = 6 + 'rem';
      close.classList.add('hidden');
      menu.classList.remove('hidden');
    }
    isMenuOpen = !isMenuOpen;
  };

  const services = () => {
    if (isServicesOpen) {
      document.getElementById('services').classList.add('hidden');
      isServicesOpen = !isServicesOpen;
    } else {
      document.getElementById('services').classList.remove('hidden');
      isServicesOpen = !isServicesOpen;
    }
  };

  return (
    <>
      <div
        id='navbar'
        className='fixed top-0 z-30 flex flex-wrap items-center w-full h-24 px-10 transition-all bg-white'
      >
        <div className='logo'>
          <img src='images/logo.png' alt='' className='h-16' />
          {/* <h2 className='text-2xl font-semibold text-blue-900'>
            Prober Logistics
          </h2> */}
        </div>
        <div className='hidden ml-10 menu md:block'>
          <ul className='flex p-0 m-0 space-x-8 text-sm font-bold uppercase'>
            <li>
              <Link href='./'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='./about'>
                <a>About Us</a>
              </Link>
            </li>
            <li className='relative'>
              <button
                className='text-sm font-bold uppercase'
                onClick={services}
              >
                Services
              </button>
              <div
                className='absolute hidden px-8 py-4 bg-white border border-blue-300 rounded-md w-60 -left-4 top-8'
                id='services'
              >
                <ul className='space-y-4 capitalize'>
                  <li>
                    <a href='#'>ROAD FREIGHT</a>
                  </li>
                  <li>
                    <a href='#'>SEA FREIGHT</a>
                  </li>
                  <li>
                    <a href='#'>AIR FREIGHT</a>
                  </li>
                  <li>
                    <a href='#'>INTERMODAL</a>
                  </li>
                  <li>
                    <a href='#'>WAREHOUSING</a>
                  </li>
                  <li>
                    <a href='#'>HEAVY TRANSPORT & SPECIAL PROJECTS</a>
                  </li>
                  <li>
                    <a href='#'>FINE ART LOGISTICS</a>
                  </li>
                  <li>
                    <a href='#'>RAIL FREIGHT</a>
                  </li>
                  <li>
                    <a href='#'>DOMESTIC TRANSPORTATION</a>
                  </li>
                  <li>
                    <a href='#'>INSURANCE</a>
                  </li>
                  <li>
                    <a href='#'>E-COMMERCE LOGISTICS</a>
                  </li>
                  <li>
                    <a href='#'>CUSTOMS CLEARANCE</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href='./sheq'>
                <a>SHEQ</a>
              </Link>
            </li>
            <li>
              <Link href='./contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className='hidden ml-auto settings md:block'>
          <img
            src='images/english.jpg'
            alt=''
            className='w-10 border border-black rounded-full'
          />
        </div>
        <div
          onClick={mobilMenu}
          className='p-3 ml-auto border border-black rounded-full mobil md:hidden'
        >
          <FiMenu id='menu' className='text-lg' />
          <VscClose id='close' className='hidden text-lg' />
        </div>

        <div className='w-full ml-10 menu-mobil md:hidden'>
          <ul className='flex flex-col p-0 m-0 mt-8 space-y-8 text-lg font-bold text-center uppercase'>
            <li>
              <a href='#' className='text-blue-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Hsql</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
