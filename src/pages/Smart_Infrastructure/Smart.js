import Hero from 'components/HeaderServices/Smart_Infrastructure/Hero/Hero';
import Conference from 'components/HeaderServices/Smart_Infrastructure/Conference/Conference';
import Ready from 'components/HeaderServices/Smart_Infrastructure/Ready';
import Footer from 'components/Footer'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Smart = () => {
  ScrollToTop();
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
export default Smart;