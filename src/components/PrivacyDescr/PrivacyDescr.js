import {
  SectionTitle,
  PrivacySection,
  Discription,
} from './PrivacyDescr.styled';
import Container from '../Container';
import Expects from './Expects';
import BeAwareOf from './BeAwareOf';
import Collects from './Collects';
import ShareTheInformation from './ShareTheInformation';
import ChangeInformation from './ChangeInformation';
import AboutThisPolicy from './AboutThisPolicy';

const PrivacyDescr = () => {
  return (
    <PrivacySection>
      <Container>
        <SectionTitle>SEEYOU Privacy Policy</SectionTitle>

        <Discription>
          SEEYOU is a force for good that is dedicated to enhancing user
          experience and streamlining virtual communication. We provide products
          that radically embrace change by seamless integration with most major
          video conferences and distant learning providers. These are ambitious
          values that are incorporated into all aspects of SEEYOU. We appreciate
          that you have trusted SEEYOU with your information. Your trust is
          important for SEEYOU. SEEYOU enables you to connect, collaborate and
          communicate using a secure channel. SEEYOU is an end-to-end encrypted
          free aggregator streamlining virtual communication.
        </Discription>

        <Expects />
        <BeAwareOf />
        <Collects />
        <ShareTheInformation />
        <ChangeInformation />
        <AboutThisPolicy />
      </Container>
    </PrivacySection>
  );
};
export default PrivacyDescr;
