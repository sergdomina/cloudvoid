import { SectionTitle, OurDiscription,SectionTitleSub,Light,Box, } from './OurLeadership.styled';
import GlobalSection from '../Section';
import Container from '../Container';

const OurLeadership = () => {
  return (
    <GlobalSection>
      <Container>
      <Box>
        <SectionTitle>STRATEGY and VALUES</SectionTitle>
        <SectionTitleSub>we are a force for good</SectionTitleSub>
        <OurDiscription>
        <Light>PRODUCT</Light> Equitable communication | Absolute product-market fit | Relentless product focus | Super simple | Hit problems with a simple stick | Self-explanatory UI/UX | Build something 100 people love, not something 1 million people like - people who really love a product will make it go viral | Measure everything, always | Make decisions | Continuous incremental improvement | Radically embrace change | Better to cannibalize own features than being eaten by others | Minimize operational and technical risk | Adhere to deadlines | Plan ahead | Build on our core culture | Get shit done
        </OurDiscription>
        <OurDiscription>
        <Light>TALENT</Light> Hire selectively, outsource until we have the right people | No early offers less all three founders are thumbs up | Smart people only | Employ those having gone through a challenge and can articulate in detail how it was solved | Hire only those who love the product, and what we want to accomplish | If they can't understand it without an explanation, they can't understand it with an explanation | Three must-have competencies; talent, focus, and endurance | Hire for attitude, train for skills | Create actual user values | 20%-time rule | Locate where talent is relatively most available | Be global | Respect all | Discriminate against no one | Bullies are out | No glue- people | No drama | No ego | No corporate suits | Be kind | Suaviter in modo, fortiter in re
        </OurDiscription>
        <OurDiscription>
        <Light>MARKET</Light> Do not compete, feed of the strength of others | Make the current players a tailwind, not a headwind | Free of charge, advertising revenues suffice | No early ads, they are not cool, the capital markets understand the value of daily user growth | SEEYOU is a double bottom line Social Impact Investment | Short term profit is secondary to long term goals | Do what we think is right, not necessarily what's popular | Save users' resources and simplify what otherwise would be hard to do | Reward usage and sharing | Gift an equivalent of 10% of the original 2.5 million shares to early users and recruiters | Coinify co-ownership | Create a global community | Non-scalable actions are ok to instigate scalable effects
        </OurDiscription>
        <OurDiscription>
        <Light>COMMUNICATION</Light> Full transparency | Never sugar-coat the truth; we're not Willy Wonka | No truth-shaving, same message to all | Never announce new functionality before launch | No fortune-telling | No forward-looking statements | From the open release on August 1st, Monthly Active Users and Daily Active Users are reported live within the app | No further performance guidance will be given
        </OurDiscription>
      </Box>
      </Container>
    </GlobalSection>
  );
};
export default OurLeadership;
