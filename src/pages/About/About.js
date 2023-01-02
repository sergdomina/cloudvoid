import AboutHero from 'components/AboutHero';
import { ScrollToTop } from 'hooks/ScrollToTop';
import Support from 'components/Home/Support';
import OurLeadership from 'components/OurLeadership';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
const About = () => {
  ScrollToTop();
  return (
    <>
      <AboutHero />
      <OurLeadership />
      <Support />
      {/* <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery> */}
    </>
  );
};

export default About;
