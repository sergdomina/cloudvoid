import Hero from 'components/HeaderServices/Governance/Hero/Hero';
import Conference from 'components/HeaderServices/Governance/Conference/Conference';
import Ready from 'components/HeaderServices/Governance/Ready/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Governance = () => {
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
export default Governance;