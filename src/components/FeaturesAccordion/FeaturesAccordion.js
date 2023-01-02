import Section from '../Section';
import { FeaturesTitle, FeaturesContainer } from './FeaturesAccordion.styled';
import { Accordion } from '@chakra-ui/react';

import {
  RewindThumb,
  LibraryThumb,
  LoopIconThumb,
  CallIconThumb,
  MessageIconThumb,
  NoteIconThumb,
} from '../FeathersThumbIcon/FeathersThumbIcon';

import AcordionElement from './AcordionElement';

const message =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

const FeaturesAccordion = () => {
  return (
    <Section>
      <FeaturesContainer>
        <FeaturesTitle>Features</FeaturesTitle>
        <Accordion allowToggle>
          <AcordionElement title={'Live conference rewind'} text={message}>
            <RewindThumb />
          </AcordionElement>

          <AcordionElement title={'User-centered library'} text={message}>
            <LibraryThumb />
          </AcordionElement>

          <AcordionElement title={'60 second loop'} text={message}>
            <LoopIconThumb />
          </AcordionElement>

          <AcordionElement title={'Calls during conference'} text={message}>
            <CallIconThumb />
          </AcordionElement>

          <AcordionElement title={'30 second video messages'} text={message}>
            <MessageIconThumb />
          </AcordionElement>

          <AcordionElement title={'Timecoded sticky notes'} text={message}>
            <NoteIconThumb />
          </AcordionElement>
        </Accordion>
      </FeaturesContainer>
    </Section>
  );
};
export default FeaturesAccordion;
