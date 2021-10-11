import Card from '../components/Card';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { cards } from '../data';
function HomePage() {
  return (
    <>
      <Navbar />
      <div className='flex flex-wrap mt-24'>
        {cards.map((card) => (
          <Card
            key={card.id}
            width={card.width}
            title={card.title}
            content={card.content}
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
