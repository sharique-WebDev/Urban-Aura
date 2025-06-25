import Slider from './Slider'
import Popular from './Category'
import MarqueeSection from './MarqueeSection'
import IndianListing from './IndianListing';
import Subscribe from './Subscribe';
import SummerSale from './SummerSale';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Slider />
      <Popular />
      <MarqueeSection />
      <IndianListing />
      <SummerSale />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;