import Link from 'next/link';

const MobilMenu = () => {
  let service = false;
  const btnHandler = () => {
    if (service) {
      document.getElementById('service-mobile-menu').classList.add('hidden');
      service = false;
    } else {
      document.getElementById('service-mobile-menu').classList.remove('hidden');
      service = true;
    }
  };

  return (
    <nav
      role='navigation'
      className='md:hidden flex justify-between items-center fixed top-0 h-24 bg-gray-800 px-8 z-40 w-screen transition-all shadow'
      id='mobilNavbar'
    >
      <div id='menuToggle' className='transition-all'>
        <input type='checkbox' />
        <span></span>
        <span></span>
        <span></span>

        <ul
          id='menu'
          className='flex flex-col space-y-4 h-screen fixed top-0 text-white pl-10 text-xl transition-all'
        >
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
          <li>
            <button onClick={btnHandler}>Services</button>
          </li>
          <li id='service-mobile-menu' className='hidden'>
            <ul className='space-y-4 text-xs capitalize pl-4 border-l '>
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
      <div className='logo'>
        <img src='images/logo.png' alt='' className='h-10' />
      </div>
    </nav>
  );
};

export default MobilMenu;
