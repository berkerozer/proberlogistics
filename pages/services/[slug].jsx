import { Navbar } from '../../components/Navbar';
import Content from '../../components/Content';
import { Footer } from '../../components/Footer';
import { GiAirplaneDeparture, GiCargoCrate } from 'react-icons/gi';
import { FaTruckLoading } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { services } from '../../data';

const SereviceComponent = ({ service }) => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto mt-32 mb-8 space-x-4 md:flex'>
        <div className='md:w-2/3'>
          <h1 className='mb-4 text-3xl font-semibold capitalize'>
            {service.title}
          </h1>
          <p dangerouslySetInnerHTML={{ __html: service.content }} />
          <div className='flex mt-16 space-x-32'>
            <span className='p-4 text-white bg-blue-400 rounded-xl text-8xl'>
              <GiAirplaneDeparture />
            </span>
            <span className='p-4 text-white bg-blue-400 rounded-xl text-8xl'>
              <FaTruckLoading />
            </span>
            <span className='p-4 text-white bg-blue-400 rounded-xl text-8xl'>
              <GiCargoCrate />
            </span>
          </div>
        </div>
        <div className='flex flex-col w-full space-y-4 md:w-1/3'>
          <h3 className='text-xl font-semibold uppercase'>Any Questions ?</h3>
          <hr />
          <img src='/images/operator.jpg' alt='' />
          <a
            href='#'
            className='py-2 text-center text-white bg-blue-400 rounded'
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const posts = services;
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filterSlug = (service) => {
    if (service.slug === params.slug) {
      return true;
    }
    return false;
  };
  const service = services.filter(filterSlug)[0];
  return { props: { service } };
}

export default SereviceComponent;
