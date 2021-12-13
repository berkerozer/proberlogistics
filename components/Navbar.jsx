import Link from 'next/link';

import { FiMenu } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';

import MobileMenu from './MobilMenu';

import { services } from '../data';

export const Navbar = () => {
  let isServicesOpen = false;

  const servicesOpen = () => {
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
        className='fixed top-0 z-30 items-center hidden w-full h-24 transition-all bg-white shadow md:flex'
      >
        <div className='container flex flex-wrap items-center mx-auto'>
          <div className='logo'>
            <img src='/images/logo.png' alt='' className='h-16' />
            {/* <h2 className='text-2xl font-semibold text-blue-900'>
            Prober Logistics
          </h2> */}
          </div>
          <div className='ml-10 menu'>
            <ul className='flex p-0 m-0 space-x-8 text-sm font-bold uppercase'>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a>About Us</a>
                </Link>
              </li>
              <li className='relative'>
                <button
                  className='text-sm font-bold uppercase'
                  onClick={servicesOpen}
                >
                  Services
                </button>
                <div
                  className='absolute hidden bg-white shadow w-60 -left-4 top-8'
                  id='services'
                >
                  <ul className='capitalize'>
                    {services.map((service) => (
                      <li className='px-6 py-3 hover:shadow'>
                        <Link href={`/services/${service.slug}`}>
                          <a>{service.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link href='/sheq'>
                  <a>SHEQ</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='ml-auto settings'>
            <img
              src='/images/english.jpg'
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
