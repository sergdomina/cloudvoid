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
export default Dev;