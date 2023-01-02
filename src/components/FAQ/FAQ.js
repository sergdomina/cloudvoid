import {
  FAQSection,
  SectionTitle,
  SectionTitleSub,
  FAQul,
  FAQli,
  ContainerFAQ,
} from './FAQ.styled';



import { Image } from '@chakra-ui/react';

const FAQ = () => {
  return (
    <FAQSection>
      <ContainerFAQ>
        <SectionTitle>FAQ</SectionTitle>
        <SectionTitleSub>
          These are some of the most common questions we get
        </SectionTitleSub>
      </ContainerFAQ>
    </FAQSection>
  );
};
export default FAQ;
