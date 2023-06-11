import Hero from 'components/HeaderServices/Smart_Infrastructure/Hero/Hero';
import Conference from 'components/HeaderServices/Smart_Infrastructure/Conference/Conference';
import Ready from 'components/HeaderServices/Smart_Infrastructure/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Smart = () => {
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
export default Smart;