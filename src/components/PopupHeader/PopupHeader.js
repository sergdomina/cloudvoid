import { PopLink, Link, PopButton, PopupBox } from './PopupHeader.styled';
import { Popup } from 'semantic-ui-react';
import MediaQuery from 'components/MediaQuery';

const PopupHeader = () => (
  <Popup 
    content={
      <PopupBox >
        <MediaQuery device={'mobile'}>
        <Link to="/cloud-evolve"><p>Back</p></Link>
        </MediaQuery>
        <Link to="/cloud-evolve"><p>Cloud Evolve</p></Link>
        <Link to="/cloud-governance"><p>Cloud Governance</p></Link>
        <Link to="/cloud-migration"><p>Cloud Migration</p></Link>
        <Link to="/cloud-solutions-architecture"><p>Cloud Solutions Architecture</p></Link>
        <Link to="/cloud-ai-and-analytics"><p>Cloud AI & Analytics</p></Link>
        <Link to="/smart-devops"><p>Smart DevOps</p></Link>
        <Link to="/smart-infractructure"><p>Smart Infrastructure</p></Link>
        <Link to="/master-msp"><p>Master MSP</p></Link>
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
