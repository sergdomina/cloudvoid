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
          Robust Cloud Solutions for Businesses Ready <br/><span style={{ color: "#CE1700"}}>To Grow Fast</span>
          </HeroTitle>
          <HeroDiscription>
          Experience unparalleled business value with Cloud Evolve.
We offer end-to-end IT solutions to grow your business from Migration services, IaaS, PaaS, and SaaS to security.
          </HeroDiscription>
          <HeroLink>
            Contact Us
          </HeroLink>
        </GlobalBox>
      <MediaQuery device={'mobile'}>
        <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",}}
        scene="https://prod.spline.design/lUGj8dpxa67fDxUq/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'tablet'}>
        <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",}}
        scene="https://prod.spline.design/IWkQEH-SvToMD941/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'default'}>
        <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",}} 
        scene="https://prod.spline.design/3HL0fFY9Gos3R4Dp/scene.splinecode" />
      </MediaQuery>
      <MediaQuery device={'desktop'}>
      <Spline style={{position:"absolute", 
        margin:"0",
        top: "0",
        right: "0",
       }}  scene="https://prod.spline.design/ZRrXk8Lf9LemIbND/scene.splinecode" />
       </MediaQuery>
        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
