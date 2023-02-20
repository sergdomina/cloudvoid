import { ReadyLink,
   Bg, 
   Title,
    DiscriptionCenter, 
    Section,
    Ready1,
    Ready2,
    Ready3,
    Ready4,
    Ready5,
    Ready6,
    ReadyM,
  } from '../../Ready.styled';
import Container from '../../../Container';
import ready1 from 'image/BGlines/ready1.svg';
import ready2 from 'image/BGlines/ready2.svg';
import ready3 from 'image/BGlines/ready3.svg';
import ready4 from 'image/BGlines/ready4.svg';
import ready5 from 'image/BGlines/ready5.svg';
import ready6 from 'image/BGlines/ready6.svg';
import readyM from 'image/BGlines/readyMob.svg';
import MediaQuery from 'components/MediaQuery';
import { Link } from 'react-router-dom';

const Ready = () => {
    return (
      <Section>
        <Container >

                <Bg style={{position:'relative'}}>
                    <MediaQuery device={'tabletUp'}>
                      <Ready1 src={ready1} alt="build" />
                      <Ready2 src={ready2} alt="build" />
                      <Ready3 src={ready3} alt="build" />
                      <Ready4 src={ready4} alt="build" />
                      <Ready5 src={ready5} alt="build" />
                      <Ready6 src={ready6} alt="build" />
                    </MediaQuery>
                    <MediaQuery device={'mobile'}>
                      <ReadyM src={readyM} alt="build" />
                    </MediaQuery>
                    <Title>
                    Accelerate Product Development With Smart DevOps
                    </Title>
                    <DiscriptionCenter>
                    Talk to our Smart DevOps experts and find out how our services and solutions give you a competitive edge through high-velocity and minimum-risk software development.
                    </DiscriptionCenter>
                    <ReadyLink to='/contact'>
                    Book Consultation
                    </ReadyLink>
                    
                </Bg>
                
        </Container>
      </Section>
    );
  };

  export default Ready;

