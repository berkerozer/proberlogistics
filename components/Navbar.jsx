import { FiMenu } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';

export const Navbar = () => {
  let isMenuOpen = false;

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

  return (
    <>
      <div
        id='navbar'
        className='h-24 transition-all fixed flex flex-wrap items-center top-0 w-full bg-white z-30 px-10 overflow-hidden'
      >
        <div className='logo'>
          {/* <img src='images/logo.png' alt='' className='h-20' /> */}
          <h2 className='font-semibold text-2xl text-blue-900'>
            Prober Logistics
          </h2>
        </div>
        <div className='menu ml-10 hidden md:block'>
          <ul className='p-0 m-0 flex space-x-8 font-bold uppercase text-sm'>
            <li>
              <a href='#' className='text-blue-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>SHEQ</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='settings ml-auto hidden md:block'>
          <img
            src='images/english.jpg'
            alt=''
            className='w-10 rounded-full border border-black'
          />
        </div>
        <div
          onClick={mobilMenu}
          className='mobil ml-auto md:hidden border p-3 rounded-full border-black'
        >
          <FiMenu id='menu' className='text-lg' />
          <VscClose id='close' className='text-lg hidden' />
        </div>

        <div className='menu-mobil ml-10 md:hidden w-full'>
          <ul className='p-0 m-0 flex flex-col font-bold uppercase text-lg text-center space-y-8 mt-8'>
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
