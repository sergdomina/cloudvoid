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
  } from './Ready.styled';
import Container from '../../../Container';
import ready1 from 'image/BGlines/ready1.svg';
import ready2 from 'image/BGlines/ready2.svg';
import ready3 from 'image/BGlines/ready3.svg';
import ready4 from 'image/BGlines/ready4.svg';
import ready5 from 'image/BGlines/ready5.svg';
import ready6 from 'image/BGlines/ready6.svg';

const Ready = () => {
    return (
      <Section>
        <Container >

                <Bg style={{position:'relative'}}>
                    <Ready1 src={ready1} alt="build" />
                    <Ready2 src={ready2} alt="build" />
                    <Ready3 src={ready3} alt="build" />
                    <Ready4 src={ready4} alt="build" />
                    <Ready5 src={ready5} alt="build" />
                    <Ready6 src={ready6} alt="build" />
                    <Title>
                    Ready To Start Your Cloud Migration Journey Today?
                    </Title>
                    <DiscriptionCenter>
                    Book a 15-minute consultation with our cloud migration SMEs on how our services will help you achieve your business goals.                    </DiscriptionCenter>
                    <ReadyLink>
                    Talk To Us
                    </ReadyLink>
                </Bg>
                
        </Container>
      </Section>
    );
  };

  export default Ready;
