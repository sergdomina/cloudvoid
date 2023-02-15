import FAQ from 'components/FAQ/FAQ';

import { ScrollToTop } from 'hooks/ScrollToTop';
import Acord from 'components/Accordion'

const Help = () => {
  window.scrollTo( 0, 0);
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
