import Hero from 'components/HeaderServices/Evolve/Hero/Hero';
import Conference from 'components/HeaderServices/Evolve/Conference/Conference';
import Ready from 'components/HeaderServices/Evolve/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Evolve = () => {
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
export default Evolve;