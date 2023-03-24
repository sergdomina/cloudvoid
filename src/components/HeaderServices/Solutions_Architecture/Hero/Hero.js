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
          Cloud Solutions Architecture
          </HeroTitle>
          <HeroDiscription>
          Create the ultimate cloud environment for accelerated app development, enhanced infrastructure performance, automation, and seamless application integration with our cloud-native architecture solutions.
          </HeroDiscription>
        </GlobalBox>
    </Container>

    <MediaQuery device={'mobile'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/9oT-Qtykt2N6l5f0/scene.splinecode" />
       </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/7n9sUc0jvd4KXttC/scene.splinecode" />
       </MediaQuery>


      
    </HeroContainer>
  </HeroSection>
  );
};

export default Hero;
