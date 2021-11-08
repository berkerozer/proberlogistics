import Content from '../components/Content';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const about = () => {
  return (
    <>
      <Navbar />
      <div className='md:container md:mx-auto'>
        <img src='resimler/0.jpg' alt='' className='mt-24 md:mt-0 w-screen' />
      </div>
      <Content title='company'>
        <h2 className='text-xl'>About Us</h2>
        <p>
          Prober Logistics has acquired superior service quality habit with
          honesty, transparency, reliability, and lucidity. Prober Logistics
          produces the most rational solutions with timely, cost-efficient,
          socially and environmentally sensitive service principles to all of
          its customers as a solution partner.
        </p>
        <br />
        <h2 className='text-xl'>Vision</h2>
        <p>
          OUR VISION is to be the logistics solution partner for all of the
          companies that are in our portfolio with integrated logistics
          solutions thus to help the development of itself and its customers.
        </p>
        <br />
        <h2 className='text-xl'>Mission</h2>
        <p>
          OUR MISSION is to remain loyal to this innovative, reliable and
          constantly developing logistic brand profile formed by its 30 years of
          experience in the sector with it's dynamic, experienced and customer
          satisfaction-oriented team.
        </p>
      </Content>
      <Footer />
    </>
  );
};

export default about;
