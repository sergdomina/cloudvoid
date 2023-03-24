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

      <MediaQuery device={'mobile'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/SzaozXhtkrtG-ezu/scene.splinecode" />
       </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <Spline style={{position:"absolute", }}
         scene="https://prod.spline.design/x4WHTj-PzRgqy6GE/scene.splinecode" />
       </MediaQuery>


        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
