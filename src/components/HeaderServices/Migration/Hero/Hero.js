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
            Cloud Migration Services 
            </HeroTitle>
            <HeroDiscription>
            Transform your business by moving your infrastructure and apps to the cloud. Our proven migration approach ensures faster time-to-cloud with improved accessibility, business operations, and high availability.
            </HeroDiscription>
           
          </GlobalBox>
      </Container>
      <MediaQuery device={'mobile'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/RKrGtQhfUx9nU2Jh/scene.splinecode" />
       </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/4JZEnX5gucSBYpYs/scene.splinecode" />
       </MediaQuery>

        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
