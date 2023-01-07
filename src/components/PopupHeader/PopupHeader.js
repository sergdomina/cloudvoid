import { PopLink, Link, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';

const PopupHeader = () => (
  <Popup
    content={
      <PopupBox>
        <PopLink  target="_blank">
          Terms of service
        </PopLink>
        <PopLink  target="_blank">
          Privacy Policy
        </PopLink>
        <Link to="/providers-zoom"> Providers Zoom</Link>
        <Link to="/providers"> Webex by Cisco</Link>
        <Link to="/request-access"> Request Access</Link>
        <Link to="/delete-account"> Delete Account</Link>
        <Link to="/end-to-end-encryption"> End Encryption</Link>
        <Link to="/problem2">Report a Problem</Link>
        <Link to="/problem">Report Form</Link>
        <Link to="/feature">Request Form</Link>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom left"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton>More</PopButton>}
  />
);

export default PopupHeader;

