import Link from 'next/link';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/config';

import { getAuth, signOut } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const signout = () => {
  signOut(auth)
    .then(() => {
      window.location.href = './';
    })
    .catch((error) => {
      // An error happened.
    });
};

const Adminnav = () => {
  return (
    <div className='w-1/5 h-screen py-8 text-center text-white bg-blue-400'>
      <h3 className='text-2xl'>Admin Navbar</h3>
      <ul className='pt-4 space-y-4'>
        <li>
          <Link href='./admin'>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href='./admin'>
            <a>General Settings</a>
          </Link>
        </li>
        <li>
          <a href='#'>Menu Settings</a>
        </li>
        <li>
          <a href='#'>Pages</a>
        </li>
        <li>
          <button onClick={signout}>Sign Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Adminnav;
