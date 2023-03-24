import { useContext, useEffect, useRef } from 'react';
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
import {useInView} from "react-intersection-observer";
import {Context} from "../../App/context";

const Hero = () => {
    const {setOnSlider} = useContext(Context)
    const {ref, inView} = useInView({
        threshold: 0.1
    })

    useEffect(() => {
        setOnSlider(inView);
        console.log(inView);
        return () => {
            setOnSlider(false);
        }
    }, [inView])

  return (
    <HeroSection >
       
      <HeroContainer style={{position:'relative'}}>
        {/* <div className='gradient' style={{position:'absolute',
         backgroundColor: '#000',
          zIndex: '1',
           width:'100%',
            height:'100%', 
            opacity:'70%'}} ></div> */}
        <GlobalBox style={{zIndex:"1"}}>
          <HeroTitle>
          IT Solutions. Built On Trust, <br/> Driven By Innovation
          </HeroTitle>
          <HeroDiscription>
          We could say we build IT business solutions, bringing value through our experienced, talented global team with vast industrial experience, but we're more than that. We become a valuable part of your team, tackling challenges and tasks with enthusiasm and determination.
          </HeroDiscription>
        </GlobalBox>
     
        <Spline ref={ref} style={{position:"absolute" }}
        scene="https://prod.spline.design/YK0BY9nj07KH88xJ/scene.splinecode"  />
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
