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
      <div className='flex px-10 py-16 border-b border-gray-600'>
        <div className='w-1/4'>
          <h1 className=' text-lg font-semibold'>ABOUT OUR COMPANY</h1>
          <div className=' w-10 h-1 bg-blue-300 mb-8'></div>
          {/* <img src='images/logo_white_footer.png' alt='' /> */}
          <p className='font-extralight text-xs mt-4 mr-8'>
            Prober Logistics has acquired superior service quality habit with
            honesty, transparency, reliability, and lucidity. Prober Logistics
            produces the most rational solutions with timely, cost- efficient,
            socially and environmentally sensitive service principles to all of
            its customers as a solution partner.
          </p>
        </div>
        <div className='w-1/4'>
          <h1 className=' text-lg font-semibold'>USEFUL LINKS</h1>
          <div className=' w-10 h-1 bg-blue-300 mb-8'></div>
          <ul className='font-extralight text-xs space-y-4'>
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
        <div className='w-1/4'>
          <h1 className=' text-lg font-semibold'>SERVICES</h1>
          <div className=' w-10 h-1 bg-blue-300 mb-8'></div>
          <ul className='font-extralight text-xs space-y-4'>
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
        <div className='w-1/4'>
          <h1 className=' text-lg font-semibold'>CONTACT INFO</h1>
          <div className=' w-10 h-1 bg-blue-300 mb-8'></div>
          <p className='font-extralight text-xs mr-8'>
            Address : Istanbul, Turkey
            <br />
            <br />
            Mail : info@proberlogistics.com
          </p>
          <h1 className=' text-lg font-semibold mt-8'>NEWSLETTER</h1>
          <div className=' w-10 h-1 bg-blue-300 mb-8'></div>
          <input
            type='text'
            className=' bg-transparent border-2 border-white rounded-3xl px-4 py-2'
            placeholder='Email Address'
          />
        </div>
      </div>
      <div className='flex items-center px-10'>
        <p className='font-extralight text-xs'>
          © 2021 Logistic - All Rights Reserved
        </p>
        <div className='social flex ml-auto text-2xl'>
          <span className='p-4 border-r border-l border-gray-600'>
            <FaFacebookF />
          </span>
          <span className='p-4 border-r border-gray-600'>
            <FaTwitter />
          </span>
          <span className='p-4 border-r border-gray-600'>
            <FaLinkedinIn />
          </span>
          <span className='p-4 border-r border-gray-600'>
            <FaGooglePlusG />
          </span>
        </div>
      </div>
    </div>
  );
};
