import Hero from 'components/HeaderServices/AI&Analytics/Hero/Hero';
import Conference from 'components/HeaderServices/AI&Analytics/Conference/Conference';
import Ready from 'components/HeaderServices/AI&Analytics/Ready/Ready';
import Footer from 'components/Footer';
import { ScrollToTop } from 'hooks/ScrollToTop';

const AI = () => {
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
export default AI;