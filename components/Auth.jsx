import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Loader from 'react-loader-spinner';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/config';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const Auth = (props) => {
  const router = useRouter();

  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('./login');
      } else {
        setAuth(true);
      }
    });
  });

  if (!isAuth) {
    return (
      <div className='flex items-center justify-center w-full h-screen'>
        <Loader type='Circles' color='#00BFFF' height={80} width={80} />
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
};

export default Auth;
