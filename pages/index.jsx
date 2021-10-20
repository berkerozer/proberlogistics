import Link from 'next/link';

import Card from '../components/Card';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { cards } from '../data';

import Head from 'next/head';

function HomePage() {
  return (
    <>
      <Head>
        <title>Prober Logistics | Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Navbar />
      <div className='flex flex-wrap mt-24'>
        {cards.map((card) => (
          <Card
            key={card.id}
            width={card.width}
            title={card.title}
            content={card.content}
            link={card.link}
            imageURL={card.imageURL}
            textWhite={card.textWhite}
            color={card.color}
            showContent={card.showContent}
            Icon={card.Icon}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
