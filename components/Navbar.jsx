import Link from 'next/link';

import { FiMenu } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';

import MobileMenu from './MobilMenu';

export const Navbar = () => {
  let isServicesOpen = false;

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
        className='hidden md:flex items-center fixed top-0 z-30 w-full h-24 transition-all bg-white shadow'
      >
        <div className='container mx-auto flex flex-wrap items-center'>
          <div className='logo'>
            <img src='images/logo.png' alt='' className='h-16' />
            {/* <h2 className='text-2xl font-semibold text-blue-900'>
            Prober Logistics
          </h2> */}
          </div>
          <div className='ml-10 menu'>
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
                  className='shadow absolute hidden bg-white w-60 -left-4 top-8'
                  id='services'
                >
                  <ul className='capitalize'>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>ROAD FREIGHT</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>SEA FREIGHT</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>AIR FREIGHT</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>INTERMODAL</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>WAREHOUSING</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>HEAVY TRANSPORT & SPECIAL PROJECTS</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>FINE ART LOGISTICS</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>RAIL FREIGHT</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>DOMESTIC TRANSPORTATION</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>INSURANCE</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
                      <a href='#'>E-COMMERCE LOGISTICS</a>
                    </li>
                    <li className='hover:shadow py-3 px-6'>
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

          <div className='ml-auto settings'>
            <img
              src='images/english.jpg'
              alt=''
              className='w-10 border border-black rounded-full'
            />
          </div>
        </div>
      </div>

      <MobileMenu />
    </>
  );
};
