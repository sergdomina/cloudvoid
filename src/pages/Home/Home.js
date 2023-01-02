import Hero from 'components/Home/Hero';
import Conference from 'components/Home/Conference';
import Read from 'components/Home/Ready';
import Support from 'components/Home/Support';
import Accordion from 'components/Accordion';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Home = () => {
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
        <Read/>
        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
    </>
  );
};
export default Home;
