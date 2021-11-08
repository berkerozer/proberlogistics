import Content from '../components/Content';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className='md:container md:mx-auto'>
        <img
          src='https://backtobasics-nutrition.com/wp-content/uploads/2015/07/safety-workforce1-1080x425.jpg'
          alt=''
          className='mt-24 w-screen'
        />
      </div>
      <Content title='SHEQ (SAFETY, HEALTH, ENVIRONMENT, QUALITY)'>
        tests
      </Content>
      <Footer />
    </>
  );
};

export default Contact;
