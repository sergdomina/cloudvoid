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
          Cloud Governance <br/> Services
          </HeroTitle>
          <HeroDiscription>
          What is Cloud Governance? Cloud governance is a framework adopted by companies operating in the cloud with large distributed teams, where policymaking, financial accountability, and resource configuration control become critical components. 
          </HeroDiscription>
  
        </GlobalBox>
        </Container>
        <MediaQuery device={'mobile'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/h3f9o6zIzPdroLKD/scene.splinecode" />
       </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/Diaql4mDB6FoiPDh/scene.splinecode" />
       </MediaQuery>

        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
