import {
  Section,
  Title,
  DiscriptionCenter,
  Tabl,
  Input,
  Area,
  TabDiv,
  TabDiv2,
  Button
} from './Conference.styled';

import { Image} from '@chakra-ui/react';
import Container from '../../Container/Container.styled';





const Conference = () => {

  return (
    <Section >

        <Container style={{position:'relative'}}>
          <Title>How Can We Help?</Title>
          <DiscriptionCenter>
          If you are reading this page,
           it means you are ready to discuss what we can do for you. 
          Fill out this quick form below so we can reach out.
          </DiscriptionCenter>
          <Tabl >
            <TabDiv >
              <label>Name</label>
              <Input name=' ' placeholder='Helen'/>
              <label>Email</label>
              <Input name=' ' placeholder='Helen.domina@cloudvoid.com'/>
              <label>Service</label>
              <Input name=' ' placeholder='Cloud Governance'/>
            </TabDiv>
            <TabDiv2>
              <label>Message</label>
              <Area name=' ' placeholder='Type in your message'/>
              <Button>Send Request</Button>
            </TabDiv2>

          </Tabl>
          
        </Container>
      
    </Section>
  )
};
export default Conference;
