import {
  Section,
  Title,
  DiscriptionCenter,
  Tabl,
  Input,
  Area,
  TabDiv,
  TabDiv2,
  Button,
  Select
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
              <Input name=' ' placeholder='Name'/>
              <label>Email</label>
              <Input name=' ' placeholder='email'/>
              <label>Service</label>
              <Select name='service'>
                <option><p>Cloude Evolve</p></option>
                <option>Cloude Governance</option>
                <option>Cloude Migration</option>
                <option>Cloude Solutions Architecture</option>
                <option>Cloude AI&Analytics</option>
                <option>Smart DevOps</option>
                <option>Smart Infrastructure</option>
                <option>Master MSP</option>
              </Select>
            </TabDiv>
            <TabDiv2>
              <label>Message</label>
              <Area name=' ' placeholder='Type in your message'/>
              <Button type='submit'>Send Request</Button>
            </TabDiv2>

          </Tabl>
          
        </Container>
      
    </Section>
  )
};
export default Conference;
