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
        <div className='Grad' style={{position:'absolute',
           width:'100%',
            height:'100%'}} ></div>
      <Container style={{position:"relative", height: '100%'}}>
        <GlobalBox style={{zIndex:"1"}}>
            <HeroTitle>
            From one Service Provider to Another
            </HeroTitle>
            <HeroDiscription>
            We understand the challenges and hurdles of supporting a diverse clientele with a unique technical stack. Sometimes you might be inclined to say, “no, we don’t that” just because you’re lacking the in-house technical skill set. We at Cloudvoid transform that No into a “Yes! We do that”, by providing an on-demand team that can take over and handle those impossible tasks and projects.
            </HeroDiscription>
          </GlobalBox>
      </Container>
        <Spline style={{position:"absolute"}}
        scene="https://prod.spline.design/AUcoL3B9L6ASn-dr/scene.splinecode" />


        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
