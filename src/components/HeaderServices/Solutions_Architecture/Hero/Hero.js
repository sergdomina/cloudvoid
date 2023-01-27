import {
  HeroSection,
  HeroTitle,
  HeroDiscription,
  HeroContainer,
  GlobalBox,
  HeroLink
} from './Hero.styled';
import Spline from '@splinetool/react-spline';
import MediaQuery from 'components/MediaQuery';


const Hero = () => {
  return (
    <HeroSection>
       
      <HeroContainer style={{position:"relative"}}>
      <GlobalBox style={{zIndex:"1"}}>
          <HeroTitle>
          Cloud Solutions Architecture
          </HeroTitle>
          <HeroDiscription>
          Create the ultimate cloud environment for accelerated app development, enhanced infrastructure performance, automation, and seamless application integration with our cloud-native architecture solutions.
          </HeroDiscription>
        </GlobalBox>
      <MediaQuery device={'mobile'}>
        <Spline style={{position:"absolute", 
        margin:"0 auto",
        top: "0",
        right: "0",}}
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
