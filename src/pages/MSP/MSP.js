import Hero from 'components/HeaderServices/MSP/Hero/Hero';
import Conference from 'components/HeaderServices/MSP/Conference/Conference';
import Ready from 'components/HeaderServices/MSP/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const MSP = () => {
  window.scrollTo( 0, 0);
  return (
    <>
      <main>
        <Hero />
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
export default MSP;