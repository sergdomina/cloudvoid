import AboutHero from 'components/AboutHero';
import { ScrollToTop } from 'hooks/ScrollToTop';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
const About = () => {
  ScrollToTop();
  return (
    <>
      <AboutHero />
      {/* <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery> */}
    </>
  );
};

export default About;
