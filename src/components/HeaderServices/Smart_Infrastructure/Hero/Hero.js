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
    <HeroSection style={{ backgroundColor: '#F9FCFF'}}>
       
      <HeroContainer style={{position:"relative"}}>
      <GlobalBox style={{zIndex:"1"}}>
          <HeroTitle>
          Fuel Business Growth<br/> With Smart Infrastructure
          </HeroTitle>
          <HeroDiscription>
          We help you build, optimize, and manage your entire IT infrastructure so you can focus on what makes your business matter.
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
       }}  scene="https://prod.spline.design/eNI7oQPH-fs32yal/scene.splinecode" />
       </MediaQuery>
        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
