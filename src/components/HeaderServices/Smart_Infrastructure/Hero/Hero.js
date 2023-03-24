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
    <HeroSection style={{ backgroundColor: '#F9FCFF'}}>
       
      <HeroContainer style={{position:"relative"}}>
      <Container style={{position:"relative", height: '100%'}}>
        <GlobalBox style={{zIndex:"1"}}>
            <HeroTitle>
            Fuel Business Growth<br/> With Smart Infrastructure
            </HeroTitle>
            <HeroDiscription>
            We help you build, optimize, and manage your entire IT infrastructure so you can focus on what makes your business matter.
            </HeroDiscription>
          </GlobalBox>
      </Container>

      <MediaQuery device={'mobile'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/BWlDqj5QA3er3Nfr/scene.splinecode" />
       </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/0vCgIWZP9uvjkv5b/scene.splinecode" />
       </MediaQuery>
    

        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
