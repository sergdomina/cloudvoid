import { FeaturesAccordionItem } from './FeaturesAccordion.styled';
import {
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from '@chakra-ui/react';

import GlobalImage from '../GlobalImage';

const AcordionElement = ({ title, text, children }) => {
  return (
    <FeaturesAccordionItem>
      <h2>
        <AccordionButton
          padding={'24px 32px'}
          fontSize={'18px'}
          boxShadow={'none'}
          _hover={{ boxShadow: 'none' }}
        >
          <Flex align={'center'} flex="1" textAlign="left">
            {children}
            {title}
          </Flex>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <GlobalImage mb={'40'} />
        {text}
      </AccordionPanel>
    </FeaturesAccordionItem>
  );
};
export default AcordionElement;
