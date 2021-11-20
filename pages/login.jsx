import Button from '../components/Button';
import { Footer } from '../components/Footer';
import Input from '../components/Input';
import { Navbar } from '../components/Navbar';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const loginForm = (e) => {
  e.preventDefault();

  const auth = getAuth();
  signInWithEmailAndPassword(auth, e.target.email.value, e.target.pass.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = './admin/';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const login = () => {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <form className='w-80' onSubmit={loginForm}>
          <Input
            type='email'
            placeholder='example@site.com'
            id='email'
            name='email'
          />
          <Input type='password' placeholder='******' id='pass' name='pass' />
          <Button>Sign In</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default login;
