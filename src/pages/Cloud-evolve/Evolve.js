import Hero from 'components/HeaderServices/Evolve/Hero/Hero';
import Conference from 'components/HeaderServices/Evolve/Conference/Conference';
import Ready from 'components/HeaderServices/Evolve/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Evolve = () => {
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
export default Evolve;