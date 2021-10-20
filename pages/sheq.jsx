import Content from '../components/Content';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const sheq = () => {
  return (
    <>
      <Navbar />
      <Content title='SHEQ (SAFETY, HEALTH, ENVIRONMENT, QUALITY)'>
        <p>
          Prober Logistics aims to meet and, where possible, exceed our
          industries’ strict Safety, Health, Environment and Quality (SHEQ)
          standards and regulations.
        </p>
        <br />
        <p>
          We are committed to quality and continuous improvement in all aspects
          of our operations in order to remain among the leaders in SHEQ
          performance of our industries.
        </p>
        <br />
        <p>
          We strive to protect the health and safety of the people working on
          our sites, the communities in which we operate, and the users of our
          products.
        </p>
        <br />
        <p>
          Our main goal is to minimize the environmental effects of our
          operations, as well as of the storage, transport, use and disposal of
          our products, and to meet or exceed our customers’ requirements for
          all the products and services we provide.
        </p>
        <br />
        <p>
          Prober Logistics has embraced sustainability, understanding it as an
          obligation towards people and society and as a strategy in which
          economic success is coupled with social equity and environmental
          responsibility. This principle of balancing ‘people, planet and
          profit’ forms the basis of our sustainability understanding.
        </p>
        <br />
        <p>
          Our products contribute towards a sustainable future, both directly
          and as the basis for innovations by our customers. Our conduct is
          rooted in the fundamental principles of protecting people and the
          environment. We strive for good and fair working conditions for our
          employees
        </p>
        <br />
        <p>
          Our every behavior is based on the basic principles of protecting
          people and the environment. We strive to ensure the continuity of
          being a good example to everyone, with our policy of treating
          everything well and fairly not only to our employees and service
          providers, but also to everything between heaven and earth.
        </p>
      </Content>
      <Footer />
    </>
  );
};

export default sheq;
