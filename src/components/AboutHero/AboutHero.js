import {
  ConferenceTitle,
  ConferenceDiscription,
  SectionTitle,
  SectionTitleSub,
  ConferenceItem,
  ConferenceDiscriptionSub,
  AboutUl,
  ContactLink,
  Image,
  DivImg,
} from './AboutHero.styled';
import GlobalSection from '../Section';
import Container from '../Container';

import GlobalImage from '../GlobalImage';
import GlobalBox from '../GlobalBox';


const AboutHero = () => {
  return (
    <GlobalSection>
      <Container>
          <SectionTitle>HISTORY and COMMUNITY</SectionTitle>
          <SectionTitleSub>we are a force for good</SectionTitleSub>
        <AboutUl>
          <ConferenceItem>
             
            <GlobalBox>
              <ConferenceTitle>Founders</ConferenceTitle>

              <ConferenceDiscription>
              SEEYOU was first envisioned in September 2020 by <ContactLink href='https://www.linkedin.com/in/bjorn-selleg-914b355a/'>Bjorn Selleg</ContactLink> as a double bottom line social impact project. Soon after, <ContactLink href='https://www.linkedin.com/in/lise-fl%C3%B8vik-phd-33bbb742/'>Dr. Lise Flovik</ContactLink> and <ContactLink href=' https://www.linkedin.com/in/jolien-vleeshouwers-phd-bb114465/'>Dr. Jolien Vleeshouwers</ContactLink> came onboard as the two other founders
              </ConferenceDiscription>
              <ConferenceDiscription>
              Helped by input from our over 100 pax strong handpicked shareholder community, the three used ten months to scope out the first-ever video conference aggregator and end-to-end encrypted communication platform
              </ConferenceDiscription>
            </GlobalBox>
            <GlobalImage>
            
            </GlobalImage>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalBox>
              <ConferenceTitle>Co-Founders and Team</ConferenceTitle>
              <ConferenceDiscription>
              In the summer and fall of 2021, <ContactLink href='https://www.linkedin.com/in/sunderkimatrai/'>Sunder Kimatrai</ContactLink>, <ContactLink href='https://www.linkedin.com/in/twana-daniel/'>Twana Daniel</ContactLink>, and <ContactLink href="www.linkedin.com/in/helendomina">Helen Domina</ContactLink> joined as co-founders. In the spring of 2022, <ContactLink href='https://www.linkedin.com/in/per-kristian-spone-a78977105/'>Per Kristian Spone</ContactLink> completed the management group as CFO and Head of Risk Control
              </ConferenceDiscription>
              <ConferenceDiscription>
              By now, SEEYOU has grown to a 30 pax tribe of 13 nationalities. All committed to being a force for good and providing a free global aggregator and communication platform in 48 languages, with two more to come
              </ConferenceDiscription>
            </GlobalBox>
            <GlobalImage>
            
            </GlobalImage>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalBox>
              <ConferenceTitle>Shareholders and Community</ConferenceTitle>
              <ConferenceDiscription>
              Our shareholder community includes another five PhD's and four more psychologists, over ten successful entrepreneurs, a group of former and current CEOs, legal, IT, communication, and industry professionals, and the SEEYOU team. We are funded by long-term private capital only, all approaching this as a double bottom line social impact investment
              </ConferenceDiscription>
              <ConferenceDiscription>
              SEEYOU will be partly user-owned. An equivalent of 10% of the original 2.5 million shares will be gifted to active* users and recruiters during the first 25 months after Open Release on August 1st, 2022
              </ConferenceDiscription>
              <ConferenceDiscriptionSub>
              (*Final terms to be announced)
              </ConferenceDiscriptionSub>
            </GlobalBox>
            <GlobalImage>
            
            </GlobalImage>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalBox>
              <ConferenceTitle>Locations</ConferenceTitle>
              <ConferenceDiscription>
              Final approval as an Irish PLC is under completion. SEEYOU is headquartered in Dublin, with subsidiaries in Dubai and Kyiv [temporarily all of the Ukrainian team and their families are safely evacuated to Ireland], and representation in Oslo and Sydney
              </ConferenceDiscription>
            </GlobalBox>
            <GlobalImage>
              <DivImg>
                
              </DivImg>
            </GlobalImage>
          </ConferenceItem>
        </AboutUl>
      </Container>
    </GlobalSection>
  );
};
export default AboutHero;
