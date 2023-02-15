
import Conference from 'components/HeaderContact/Conference/Conference';
import Ready from 'components/HeaderContact/Ready/Ready';
import Footer from 'components/Footer/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Contact = () => {
  window.scrollTo( 0, 0);
  return (
    <>
      <main>

        {/* <MediaQuery device={'mobile'}>
          <FeaturesAccordion />
        </MediaQuery>
        <MediaQuery device={'tablet'}>
          <FeaturesTabs />
        </MediaQuery> */}

        <Conference/>
        <Ready/>
        <Footer/>
        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
    </>
  );
};
export default Contact;
