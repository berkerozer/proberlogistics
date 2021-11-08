import Content from '../components/Content';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const sheq = () => {
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
        <div className='flex flex-wrap'>
          <div className='rounded-full flex text-center items-center w-72 cursor-pointer shadow hover:shadow-none transition-all h-72 border-4 text-xs px-8 hover:bg-green-600 hover:text-white m-4'>
            <p>
              Prober Logistics aims to meet and, where possible, exceed our
              industries’ strict Safety, Health, Environment and Quality (SHEQ)
              standards and regulations.
            </p>
          </div>
          <div className='rounded-full flex text-center items-center w-72 cursor-pointer shadow hover:shadow-none transition-all h-72 border-4 text-xs px-8 hover:bg-green-600 hover:text-white m-4'>
            <p>
              We are committed to quality and continuous improvement in all
              aspects of our operations in order to remain among the leaders in
              SHEQ performance of our industries.
            </p>
          </div>
          <div className='rounded-full flex text-center items-center w-72 cursor-pointer shadow hover:shadow-none transition-all h-72 border-4 text-xs px-8 hover:bg-green-600 hover:text-white m-4'>
            <p>
              We strive to protect the health and safety of the people working
              on our sites, the communities in which we operate, and the users
              of our products.
            </p>
          </div>
          <div className='rounded-full flex text-center items-center w-72 cursor-pointer shadow hover:shadow-none transition-all h-72 border-4 text-xs px-8 hover:bg-green-600 hover:text-white m-4'>
            <p>
              Our main goal is to minimize the environmental effects of our
              operations, as well as of the storage, transport, use and disposal
              of our products, and to meet or exceed our customers’ requirements
              for all the products and services we provide.
            </p>
          </div>
          <div className='rounded-full flex text-center items-center w-72 cursor-pointer shadow hover:shadow-none transition-all h-72 border-4 text-xs px-8 hover:bg-green-600 hover:text-white m-4'>
            <p>
              Prober Logistics has embraced sustainability, understanding it as
              an obligation towards people and society and as a strategy in
              which economic success is coupled with social equity and
              environmental responsibility. This principle of balancing ‘people,
              planet and profit’ forms the basis of our sustainability
              understanding.
            </p>
          </div>
          <div className='rounded-full flex text-center items-center w-72 cursor-pointer shadow hover:shadow-none transition-all h-72 border-4 text-xs px-8 hover:bg-green-600 hover:text-white m-4'>
            <p>
              Our products contribute towards a sustainable future, both
              directly and as the basis for innovations by our customers. Our
              conduct is rooted in the fundamental principles of protecting
              people and the environment. We strive for good and fair working
              conditions for our employees
            </p>
          </div>
          <div className='rounded-full flex text-center items-center w-72 cursor-pointer shadow hover:shadow-none transition-all h-72 border-4 text-xs px-8 hover:bg-green-600 hover:text-white m-4'>
            <p>
              Our every behavior is based on the basic principles of protecting
              people and the environment. We strive to ensure the continuity of
              being a good example to everyone, with our policy of treating
              everything well and fairly not only to our employees and service
              providers, but also to everything between heaven and earth.
            </p>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default sheq;
