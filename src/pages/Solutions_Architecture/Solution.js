import Hero from 'components/HeaderServices/Solutions_Architecture/Hero/Hero';
import Conference from 'components/HeaderServices/Solutions_Architecture/Conference/Conference';
import Ready from 'components/HeaderServices/Solutions_Architecture/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Solution = () => {
  return (
    <>
      <main>
        <Hero />
        <Conference/>
        <Ready/>
        <Footer/>
      </main>
    </>
  );
};
export default Solution;