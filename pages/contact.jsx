import Content from '../components/Content';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { MapContainer } from '../components/Map';

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className='md:container md:mx-auto'>
        <MapContainer />
      </div>
      <Content title='SHEQ (SAFETY, HEALTH, ENVIRONMENT, QUALITY)'>
        tests
      </Content>
      <Footer />
    </>
  );
};

//AIzaSyBHlZGwLOIhfP3BSIMevjce-xCeP8sXsy8

export default Contact;
