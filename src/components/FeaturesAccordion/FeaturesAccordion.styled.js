import styled from 'styled-components';
import Container from '../Container';
import { AccordionItem } from '@chakra-ui/react';
export const FeaturesTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
export const FeaturesAccordionItem = styled(AccordionItem)`
  border: none;
  background: #ffffff;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.06);
`;

export const FeaturesContainer = styled(Container)`
  padding: 0;
`;
