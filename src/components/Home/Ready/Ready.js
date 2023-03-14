import { ReadyLink,
   Bg, 
   Title,
    Section,
    Ready1,
    Ready2,
    Ready3,
    Ready4,
    Ready5,
    Ready6,
    ReadyM
  } from '../../HeaderServices/Ready.styled';
import Container from '../../Container';
import ready1 from 'image/BGlines/ready1.svg';
import ready2 from 'image/BGlines/ready2.svg';
import ready3 from 'image/BGlines/ready3.svg';
import ready4 from 'image/BGlines/ready4.svg';
import ready5 from 'image/BGlines/ready5.svg';
import ready6 from 'image/BGlines/ready6.svg';
import readyM from 'image/BGlines/readyMob.svg';
import MediaQuery from 'components/MediaQuery';
import { Flex } from '@chakra-ui/react';

const Ready = () => {
    return (
      <Section>
        <Container>

                <Bg style={{position:'relative', display: 'flex', alignItems:'center'}} >
                 <div>
                     <MediaQuery device={'tabletUp'}>
                        <Ready1 src={ready1} alt="build" />
                        <Ready2 src={ready2} alt="build" />
                        <Ready3 src={ready3} alt="build" />
                        <Ready4 src={ready4} alt="build" />
                        <Ready5 src={ready5} alt="build" />
                        <Ready6 src={ready6} alt="build" />
                     </MediaQuery >
                      <MediaQuery device={'mobile'} >
                        <ReadyM src={readyM} alt="build" />
                      </MediaQuery >
                      <Title style={{marginBottom: '44px'}}>
                      Ready To Experience Unmatched IT Excellence?
                      </Title>
                      
                      <ReadyLink to='/contact'>
                      Contact Us
                      </ReadyLink>
                 </div>
                </Bg>
                
        </Container>
      </Section>
    );
  };

  export default Ready;

