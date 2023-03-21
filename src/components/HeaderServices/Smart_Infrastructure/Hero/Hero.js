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

        <Spline style={{position:"absolute"}}
        scene="https://prod.spline.design/eNI7oQPH-fs32yal/scene.splinecode"  />
    

        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
