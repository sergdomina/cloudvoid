import Hero from 'components/HeaderServices/Smart_DevOps/Hero';
import Conference from 'components/HeaderServices/Smart_DevOps/Conference/Conference';
import Ready from 'components/HeaderServices/Smart_DevOps/Ready/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Dev = () => {
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
export default Dev;