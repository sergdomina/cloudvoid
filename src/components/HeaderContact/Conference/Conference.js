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
  Select,
  Label
} from './Conference.styled';
import { Image} from '@chakra-ui/react';
import Container from '../../Container/Container.styled';
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';

const Conference = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a097swo', 'template_srqes8b', form.current, 'sOEHfShdU7MUVzVFd')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  };



  function handleOnChange(value) {
    this.state= { items:[], text: '', isVerified: false};
    this.handleChance = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChance= this.handleOnChange.bind(this)
    console.log("Captcha value:", value);
    this.setState({isVerified: true})
  }

  return (
    <Section >
      <Container style={{position:'relative'}}>
        <Title>How Can We Help?</Title>
        <DiscriptionCenter>
        If you are reading this page,
         it means you are ready to discuss what we can do for you.
        Fill out this quick form below so we can reach out.
        </DiscriptionCenter>

        <Tabl onSubmit={sendEmail} ref={form}>
          <TabDiv >
            <Label>Name</Label>
            <Input name='user_name' placeholder='Name'/>
            <Label>Email</Label>
            <Input name='user_email' placeholder='Email'/>
            <Label>Service</Label>
            <Select name='service'>
              <option>Cloud Evolve</option>
              <option>Cloud Governance</option>
              <option>Cloud Migration</option>
              <option>Cloud Solutions Architecture</option>
              <option>Cloud AI&Analytics</option>
              <option>Smart DevOps</option>
              <option>Smart Infrastructure</option>
              <option>Master MSP</option>
            </Select>
          </TabDiv>
          <TabDiv2>
            <label>Message</label>
            
            <Area name='message' placeholder='Type in your message'/>
            
            <ReCAPTCHA
              sitekey="6LcvSg8mAAAAAGK3SXkSdvxkv6Iq4IEEUQsa0FWl"
              onChange={handleOnChange}
            />
            <Button disabled={!this.state.isVerified} type='submit'>Send Request</Button>
          </TabDiv2>
        </Tabl>
      </Container>
    </Section>
  )
};
export default Conference;
