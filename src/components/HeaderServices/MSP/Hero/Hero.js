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


const Hero = () => {
  return (
    <HeroSection>
       
      <HeroContainer style={{position:"relative"}}>
      <GlobalBox style={{zIndex:"1"}}>
          <HeroTitle>
          From one Service Provider to Another
          </HeroTitle>
          <HeroDiscription>
          We understand the challenges and hurdles of supporting a diverse clientele with a unique technical stack. Sometimes you might be inclined to say, “no, we don’t that” just because you’re lacking the in-house technical skill set. We at Cloudvoid transform that No into a “Yes! We do that”, by providing an on-demand team that can take over and handle those impossible tasks and projects.
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
