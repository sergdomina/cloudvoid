import {
  HeroSection,
  HeroTitle,
  HeroDiscription,
  GlobalBox,
  BgAbout
} from './Hero.styled';
import MediaQuery from 'components/MediaQuery';
import Container from 'components/Container';


const Hero = () => {
  return (
    <HeroSection style={{position:'relative'}}>
 
       <Container >
      
        <BgAbout >
        
          <GlobalBox style={{zIndex:"1"}}>
            
              <HeroTitle>
              The Cloudvoid Story - What Inspires Us
              </HeroTitle>
              <HeroDiscription>
                Throughout the ages, infrastructure has been the backbone of civilization, from roman roads that pioneered trade, logistics and communication to the transcontinental Pacific Railroad that brought the industrial revolution and connected the East to the West.
              </HeroDiscription>
              <HeroDiscription>           
                All these infrastructure systems and components brought the foundation
                of the modern world.
              </HeroDiscription>
          </GlobalBox>
        </BgAbout>
      </Container>
    </HeroSection>
  );
};

export default Hero;
