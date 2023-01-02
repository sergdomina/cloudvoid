import OwnershipHero from 'components/OwnershipHero';
import Support from 'components/Home/Support/Support';
import { ScrollToTop } from 'hooks/ScrollToTop';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
const Ownership = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <OwnershipHero />

        {/*<HowItWorks />
        <MoreDetails />
        <FAQ />*/}
        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      <Support />
    </>
  );
};
export default Ownership;
