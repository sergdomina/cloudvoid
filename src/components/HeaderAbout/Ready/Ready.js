import { ReadyLink,
   BgTwo, 
    Section,
    SubTitle
  } from '../../HeaderServices/Ready.styled';
import Container from '../../Container';
import MediaQuery from 'components/MediaQuery';

const Ready = () => {
    return (
      <Section style={{paddingTop:'20px'}}>
        <Container>

                <BgTwo style={{position:'relative', display: 'flex', alignItems:'center'}} >
                 <div>
                      <SubTitle style={{marginBottom: '44px'}}>
                      Today, Cloudvoid operates in three continents and multiple time zones with a distributed dedicated team, ensuring their clients are in the best hands possible.
                      </SubTitle>
                      
                      <ReadyLink to='/contact'>
                      Get in Touch
                      </ReadyLink>
                 </div>
                </BgTwo>
                
        </Container>
      </Section>
    );
  };

  export default Ready;

