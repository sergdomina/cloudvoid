import {
  ConferenceTitle,
  ConferenceDiscription,
  SectionTitle,
  SectionTitleSub,
  SectionTitleSmall,
  ConferenceItem,
  ConferenceDiscriptionSub,
  Image,
  OwnerUl,
  DivImg,
} from './OwnershipHero.styled.js';
import GlobalSection from '../Section';
import Container from '../Container';
import GlobalImage from '../GlobalImage';
import GlobalBox from '../GlobalBox';
import Equit from 'image/co-owners/Equit.png';
import Stock from 'image/co-owners/Stock.png';
import Slice from 'image/co-owners/Slice.png';
import Earn from 'image/co-owners/Earning.png';
import Create from 'image/co-owners/Creat.png';
import Invite from 'image/co-owners/Invite.png';
import Ads from 'image/co-owners/Ads.png';

const OwnerHero = () => {
  return (
    <GlobalSection>
      <Container>
          <SectionTitle>CO-OWNERSHIP</SectionTitle>
          <SectionTitleSub>SEEYOU will be partly user-owned. An equivalent of 10% of the original 2.5 million shares will be gifted to active* users and recruiters during the first 25 months after Open Release on August 1st, 2022</SectionTitleSub>
          <SectionTitleSmall>(*Final terms to be announced)</SectionTitleSmall>
        <OwnerUl>
          <ConferenceItem>
            <GlobalImage>
              <Image src={Equit}  alt="equit" />
            </GlobalImage>
            <GlobalBox>
              <ConferenceTitle>Equitable Ownership</ConferenceTitle>

              <ConferenceDiscription>
              The shares are awarded as equity tokens. Tokens will be 100:1 interchangeable with common shares. You can exchange 100 equity tokens for one common SEEYOU share
              </ConferenceDiscription>
              <ConferenceDiscription>
              To make ownership more equitable, users can transfer the equity tokens to external cryptocurrency wallets as SEUs, ECR-20 smart contracts on the proven Ethereum blockchain
              </ConferenceDiscription>
            </GlobalBox>
            
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={Stock}  alt="selfie in seeyou" />
            </GlobalImage>
            <GlobalBox>
              <ConferenceTitle>Stock- and Crypto Exchanges</ConferenceTitle>

              <ConferenceDiscription>
              Both the common shares and equity tokens will be listed on reputable exchanges, allowing users to trade their holdings safely
              </ConferenceDiscription>
            </GlobalBox>
            
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <DivImg>
                <Image src={Slice}  alt="Slices of the Monthly Pies" />
              </DivImg>
            </GlobalImage>
            <GlobalBox>
              <ConferenceTitle>Slices of the Monthly Pies</ConferenceTitle>

              <ConferenceDiscription>
              Starting on July 31st, 2022, one million tokens will be awarded to users monthly for 25 months. Each month you can earn Slices of the monthly pie. Slices are earned from personal use, and new users generated*
              </ConferenceDiscription>
              <ConferenceDiscription>
              On the last day of each month, you will be credited an amount of SEEYOU equity Tokens corresponding to your relative number of Slices in the monthly pie
              </ConferenceDiscription>
              <ConferenceDiscriptionSub>
              (*Final terms to be announced)
              </ConferenceDiscriptionSub>
            </GlobalBox>
            
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={Earn}  alt="selfie in seeyou" />
            </GlobalImage>
            <GlobalBox>
              <ConferenceTitle>Earning Slices</ConferenceTitle>

              <ConferenceDiscription>
              You earn Slices from being active, including signing up for SEEYOU, completing your registration, recruiting new users to our global community, and for everyday use when you use SEEYOU twice or more in a day
              </ConferenceDiscription>
              <ConferenceDiscription>
              Consecutive days of active use within a calendar month means earning even more slices. You earn one slice the first day, two the next, three the third, etc. 31 consecutive days earns 496 slices
              </ConferenceDiscription>
              
            </GlobalBox>
            
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={Create} alt="Creating a Global Community" />
            </GlobalImage>
            <GlobalBox>
              <ConferenceTitle>Creating a Global Community</ConferenceTitle>

              <ConferenceDiscription>
              SEEYOU will launch in 48 languages, with the two major right to left languages, Arabic and Hebrew, to come. We are expanding to Linux and Chromebooks before the Open Launch on August 1st. On mobile, we will also add Huawei before year-end
              </ConferenceDiscription>
              <ConferenceDiscription>
              SEEYOU is only equitable if wholly free and truly global. Spreading the app around the world matters, and you will therefore get 10 Slices for every new user you recruit
              </ConferenceDiscription>
              
            </GlobalBox>
            
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={Invite}  alt="Inviting Friends and Followers" />
            </GlobalImage>
            <GlobalBox>
              <ConferenceTitle>Inviting Friends and Followers</ConferenceTitle>

              <ConferenceDiscription>
              SEEYOU provides links that your social media friends and followers can use to download the app. Any new user downloading SEEYOU via the link on either iPhone or Android automatically earns both you and them 10 Slices
              </ConferenceDiscription>
              <ConferenceDiscription>
              If on Mac or Windows, a referral code is provided, when applied, both you and the new user earn 10 Slices
              </ConferenceDiscription>
              
            </GlobalBox>
            
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={Ads} alt="Inviting Friends and Followers" />
            </GlobalImage>
            <GlobalBox>
              <ConferenceTitle>Ads Make SEEYOU Free of Charge</ConferenceTitle>

              <ConferenceDiscription>
              Completing the registration is the first part of what enables SEEYOU to be wholly free of charge. This allows us to make the ads we run more relevant to you
              </ConferenceDiscription>
              <ConferenceDiscription>
              Your clicking on the non-intrusive ads at the bottom of some screens is the second part. Clicking on ads generates revenue, enabling SEEYOU to equitably offer our functionality for free to everyone on the planet with access to an internet device
              </ConferenceDiscription>
              
            </GlobalBox>
            
          </ConferenceItem>
        
        </OwnerUl>
      </Container>
    </GlobalSection>
  );
};
export default OwnerHero;

