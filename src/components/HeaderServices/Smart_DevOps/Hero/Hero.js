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
            Smart DevOps Services & Solutions
            </HeroTitle>
            <HeroDiscription>
            Keep up with fast-paced customer demands and shorten Time-To-Market by simplifying and automating software development with continuous integration and delivery.
            </HeroDiscription>
          </GlobalBox>
      </Container>

        <Spline style={{position:"absolute",}}
        scene="https://prod.spline.design/Dt3DT4JHPigfJcOd/scene.splinecode"  />


        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
