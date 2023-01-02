import { ReadyLink} from './Ready.styled';
import Section from 'components/Section';
import Container from '../../Container';
import {Title, DiscriptionCenter} from '../Conference/Conference.styled';

const Read = () => {
    return (
      <Section>
        <Container>
                <Title>
                Ready To Access The Untapped Value In Your Cloud?
                </Title>
                <DiscriptionCenter>
                Get a free 15-minute consultation with our Cloud Evolve experts on how our solution will help you transform your business.
                </DiscriptionCenter>
                <ReadyLink>
                Contact Us
                </ReadyLink>
        </Container>
      </Section>
    );
  };