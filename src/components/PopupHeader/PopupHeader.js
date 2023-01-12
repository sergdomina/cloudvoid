import { PopLink, Link, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';
import MediaQuery from 'components/MediaQuery';

const PopupHeader = () => (
  <Popup 
    content={
      <PopupBox >
        <MediaQuery device={'mobile'}>
        <Link to="/providers-zoom"><p>Back</p></Link>
        </MediaQuery>
        <Link to="/providers-zoom"><p>Cloud Evolve</p></Link>
        <Link to="/providers"><p>Cloud Migration</p></Link>
        <Link to="/request-access"><p>Cloud Solutions Architecture</p></Link>
        <Link to="/delete-account"><p>Cloud AI & Analytics</p></Link>
        <Link to="/end-to-end-encryption"><p>Smart DevOps</p></Link>
        <Link to="/problem2"><p>Smart Infrastructure</p></Link>
        <Link to="/problem"><p>Master MSP</p></Link>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>Services</PopButton>}
  />
);

export default PopupHeader;

