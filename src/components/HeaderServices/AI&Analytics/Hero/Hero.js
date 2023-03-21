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
        <GlobalBox style={{zIndex:"1",
          backgroundColor: 'transparent'
          }}>
            <HeroTitle>
            Unlock Your Next Strategic Insight With Cloud AI & Analytics
            </HeroTitle>
            <HeroDiscription>
            Harness your competitive edge by bringing your data to the cloud and using next-gen AI and Business Intelligence solutions, becoming data-driven in your strategic decision-making.
            </HeroDiscription>
            
          </GlobalBox>
      </Container>
   
        <Spline style={{position:"absolute", }}
       scene="https://prod.spline.design/6cDA1LfJAzHCLMGx/scene.splinecode" />

     
        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
