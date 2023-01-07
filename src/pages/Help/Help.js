import FAQ from 'components/FAQ/FAQ';

import { ScrollToTop } from 'hooks/ScrollToTop';
import Acord from 'components/Accordion'

const Help = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <FAQ />
        <Acord />
        {/*<HelpCenter />
         <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      {/*<Footer */}
    </>
  );
};

export default Help;
