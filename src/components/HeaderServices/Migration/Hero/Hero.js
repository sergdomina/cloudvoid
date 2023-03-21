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
        <Spline style={{position:"absolute", 
        margin:"0 auto",
        top: "0",
        
        right: "0",}}
        scene="https://prod.spline.design/Tq7CzTaLQnJI5HTe/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'tablet'}>
        <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",}}
        scene="https://prod.spline.design/Tq7CzTaLQnJI5HTe/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'defaultOnly'}>
        <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",}} 
        scene="https://prod.spline.design/Tq7CzTaLQnJI5HTe/scene.splinecode" />
      </MediaQuery>
      <MediaQuery device={'desktop'}>
      <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",
       }}  scene="https://prod.spline.design/Tq7CzTaLQnJI5HTe/scene.splinecode" />
       </MediaQuery>

        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
