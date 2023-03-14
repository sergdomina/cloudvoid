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
          Cloud Governance <br/> Services
          </HeroTitle>
          <HeroDiscription>
          What is Cloud Governance? Cloud governance is a framework adopted by companies operating in the cloud with large distributed teams, where policymaking, financial accountability, and resource configuration control become critical components. 
          </HeroDiscription>
  
        </GlobalBox>

        <Spline style={{position:"absolute",}}
        scene="https://prod.spline.design/Mx8sqrfYcOngtZku/scene.splinecode"  />

        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
