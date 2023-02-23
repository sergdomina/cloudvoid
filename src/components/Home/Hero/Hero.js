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
       
      <HeroContainer style={{position:'relative'}}>
        
      <GlobalBox style={{zIndex:"1"}}>
          <HeroTitle>
          IT Solutions. Built On Trust, <br/> Driven By Innovation
          </HeroTitle>
          <HeroDiscription>
          We could say we build IT business solutions, bringing value through our experienced, talented global team with vast industrial experience, but we're more than that. We become a valuable part of your team, tackling challenges and tasks with enthusiasm and determination.
          </HeroDiscription>
        </GlobalBox>
      <MediaQuery device={'mobile'}>
        <Spline style={{position:"absolute" 
       }}
        scene="https://prod.spline.design/ufPVSUomT7C2tPeo/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'tablet'}>
        <Spline style={{position:"absolute" 
        }}
        scene="https://prod.spline.design/ufPVSUomT7C2tPeo/scene.splinecode"  />
      </MediaQuery>
      <MediaQuery device={'defaultOnly'}>
        <Spline style={{position:"absolute"
       }} 
        scene="https://prod.spline.design/ufPVSUomT7C2tPeo/scene.splinecode" />
      </MediaQuery>
      <MediaQuery device={'desktop'}>
      <Spline style={{position:"absolute"
       }}  scene="https://prod.spline.design/ufPVSUomT7C2tPeo/scene.splinecode" />
       </MediaQuery>
        
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
