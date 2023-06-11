import Hero from 'components/HeaderServices/Governance/Hero/Hero';
import Conference from 'components/HeaderServices/Governance/Conference/Conference';
import Ready from 'components/HeaderServices/Governance/Ready/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Governance = () => {
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
export default Governance;