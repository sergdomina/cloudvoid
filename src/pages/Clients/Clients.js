import Conference from 'components/HeaderClients/Conference';
import Footer from 'components/Footer'


const Clients = () => {
  // window.scrollTo( 0, 0);
  return (
    <>
      <main>
        <Conference/>
        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      <Footer />
    </>
  );
};

export default Clients;