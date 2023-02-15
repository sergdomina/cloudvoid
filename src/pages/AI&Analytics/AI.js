import Hero from 'components/HeaderServices/AI&Analytics/Hero/Hero';
import Conference from 'components/HeaderServices/AI&Analytics/Conference/Conference';
import Ready from 'components/HeaderServices/AI&Analytics/Ready/Ready';
import Footer from 'components/Footer';
import { ScrollToTop } from 'hooks/ScrollToTop';

const AI = () => {
  window.scrollTo( 0, 0);
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
export default AI;