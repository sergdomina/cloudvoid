import Hero from 'components/HeaderServices/Migration/Hero/Hero';
import Conference from 'components/HeaderServices/Migration/Conference/Conference';
import Ready from 'components/HeaderServices/Migration/Ready/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Migration = () => {
  // window.scrollTo( 0, 0);
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
export default Migration;