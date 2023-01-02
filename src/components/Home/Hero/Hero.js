import {
  HeroSection,
  HeroTitle,
  HeroDiscription,
  HeroContainer,
  GlobalBox,
  HeroLink
} from './Hero.styled';
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <HeroSection>
       
      <HeroContainer style={{position:"relative"}}>
      <GlobalBox style={{position:"absolute", zIndex:"1"}}>
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
      <Spline style={{position:"absolute", 
      margin:"0",
      top: "0",
      right: "0",
       }}  scene="https://prod.spline.design/ZRrXk8Lf9LemIbND/scene.splinecode" />
        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
