import {
  HeroSection,
  HeroTitle,
  HeroDiscription,
  HeroContainer,
  GlobalBox,
  HeroLink
} from '../../Hero.styled';
import Spline from '@splinetool/react-spline';
import MediaQuery from 'components/MediaQuery';
import Container from 'components/Container';


const Hero = () => {
  return (
    <HeroSection>
       
      <HeroContainer style={{position:"relative"}}>
      <Container style={{position:"relative", height: '100%'}}>
        <GlobalBox style={{zIndex:"1"}}>
            <HeroTitle>
            Robust Cloud Solutions for Businesses Ready <br/><span style={{ color: "#CE1700"}}>To Grow Fast</span>
            </HeroTitle>
            <HeroDiscription>
            Experience unparalleled business value with Cloud Evolve.
  We offer end-to-end IT solutions to grow your business from Migration services, IaaS, PaaS, and SaaS to security.
            </HeroDiscription>
  
          </GlobalBox>
      </Container>
      <MediaQuery device={'mobile'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/B53WBcj3xxpFgcPE/scene.splinecode" />
       </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/6hIIatqsIK0YTXUF/scene.splinecode" />
       </MediaQuery>
        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
