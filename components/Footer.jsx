import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div
      className='text-white'
      style={{
        backgroundImage: `url('images/footer_bg.png')`,
      }}
    >
      <div className='flex px-8 md:px0 md:mx-auto flex-col md:flex-row container py-16 border-b border-gray-600 space-y-8 md:space-y-0'>
        <div className='md:w-1/4'>
          <h1 className='text-lg font-semibold '>ABOUT OUR COMPANY</h1>
          <div className='w-10 h-1 mb-8 bg-blue-300 '></div>
          {/* <img src='images/logo_white_footer.png' alt='' /> */}
          <p className='mt-4 mr-8 text-xs font-extralight'>
            Prober Logistics has acquired superior service quality habit with
            honesty, transparency, reliability, and lucidity. Prober Logistics
            produces the most rational solutions with timely, cost- efficient,
            socially and environmentally sensitive service principles to all of
            its customers as a solution partner.
          </p>
        </div>
        <div className='md:w-1/4'>
          <h1 className='text-lg font-semibold '>USEFUL LINKS</h1>
          <div className='w-10 h-1 mb-8 bg-blue-300 '></div>
          <ul className='space-y-4 text-xs font-extralight'>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Company Timeline</a>
            </li>
            <li>
              <a href='#'>History</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='md:w-1/4'>
          <h1 className='text-lg font-semibold '>SERVICES</h1>
          <div className='w-10 h-1 mb-8 bg-blue-300 '></div>
          <ul className='space-y-4 text-xs font-extralight'>
            <li>
              <a href='#'>Intermodal</a>
            </li>
            <li>
              <a href='#'>Warehousing</a>
            </li>
            <li>
              <a href='#'>Logistics</a>
            </li>
            <li>
              <a href='#'>Project Transport</a>
            </li>
            <li>
              <a href='#'>Air Freight</a>
            </li>
            <li>
              <a href='#'>Sea Freight</a>
            </li>
          </ul>
        </div>
        <div className='md:w-1/4'>
          <h1 className='text-lg font-semibold '>CONTACT INFO</h1>
          <div className='w-10 h-1 mb-8 bg-blue-300 '></div>
          <p className='mr-8 text-xs font-extralight'>
            Büyükbakkalköy Mh. Samandıra Yolu Sk. No: 24 <br />
            34858 Maltepe / İSTANBUL
            <br />
            <br />
            Mail : info@proberlogistics.com
          </p>
          <h1 className='mt-8 text-lg font-semibold '>NEWSLETTER</h1>
          <div className='w-10 h-1 mb-8 bg-blue-300 '></div>
          <input
            type='text'
            className='px-4 py-2 bg-transparent border-2 border-white rounded-3xl'
            placeholder='Email Address'
          />
        </div>
      </div>
      <div className='flex items-center px-10'>
        <p className='text-xs font-extralight'>
          © 2021 Logistic - All Rights Reserved
        </p>
        <div className='flex ml-auto text-2xl social'>
          <span className='p-4 border-l border-r border-gray-600'>
            <FaFacebookF />
          </span>
          <span className='p-4 border-r border-gray-600'>
            <FaTwitter />
          </span>
          <span className='p-4 border-r border-gray-600'>
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};
