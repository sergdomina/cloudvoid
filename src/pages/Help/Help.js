import Support from 'components/Home/Support/Support';
import FAQ from 'components/FAQ/FAQ';
import OurLeadership from 'components/OurLeadership';
import { ScrollToTop } from 'hooks/ScrollToTop';
import Acord from 'components/Accordion'

const Help = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <FAQ />
        <Acord />
        <OurLeadership />

        {/*<HelpCenter />
         <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      <Support />
      {/*<Footer */}
    </>
  );
};

export default Help;
