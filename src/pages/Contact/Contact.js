
import Conference from 'components/HeaderContact/Conference/Conference';
import Ready from 'components/HeaderContact/Ready/Ready';
import Footer from 'components/Footer/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Contact = () => {
  window.scrollTo( 0, 0);
  return (
    <>
      <main>
        <Conference/>
        <Ready/>
        <Footer/>
      </main>
    </>
  );
};
export default Contact;
