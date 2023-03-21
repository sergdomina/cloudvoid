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
        <Spline style={{position:"absolute", 
        width:'100%'}}
        scene="https://prod.spline.design/sg4VOs698eINp0UO/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'tablet'}>
        <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",}}
        scene="https://prod.spline.design/yTttbAhLNMjD9c3s/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'defaultOnly'}>
        <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",}} 
        scene="https://prod.spline.design/lWL3kQRvl2jrLTTW/scene.splinecode" />
      </MediaQuery>
      <MediaQuery device={'desktop'}>
      <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",
       }}  scene="https://prod.spline.design/I9YR96HNIXKQm7h8/scene.splinecode" />
       </MediaQuery>
        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
