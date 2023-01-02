import React from 'react';
import Section from '../Section';
import Container from '../Container';
import { FeaturesTitle } from './FeatherTabs.styled';
import {
  Tabs,
  TabList,
  TabPanel,
  useTab,
  useTabPanels,
  Box,
  Image,
} from '@chakra-ui/react';
import {
  RewindThumb,
  LibraryThumb,
  LoopIconThumb,
  CallIconThumb,
  MessageIconThumb,
  NoteIconThumb,
} from '../FeathersThumbIcon/FeathersThumbIcon';

const variant = {
  boxShadow: ' 0px 0px 19px rgba(0, 0, 0, 0.06)',
  bordeRradius: '5px',
  outline: 'none',
  background: '#fff',
  color: '#404040',
  fontWeight: '800',
};

const FeatherTabs = () => {
  const FeaturesTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const w = {
      color: '#6E7191',
      border: 'none',
      _hover: variant,
      _focus: variant,
      _expanded: { outline: 'none', background: '#fff' },
      padding: '24px 32px',
      fontSize: '18px',
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
    };
    return (
      <Box __css={w} {...tabProps}>
        {tabProps.children}
      </Box>
    );
  });
  const FeaturesTabPanels = React.forwardRef((props, ref) => {
    const tabProps = useTabPanels({ ...props, ref });
    const tp = {
      width: '666px',
    };
    return (
      <Box __css={tp} {...tabProps}>
        {tabProps.children}
      </Box>
    );
  });
  return (
    <Section>
      <Container>
        <FeaturesTitle>Feathers</FeaturesTitle>
        <Tabs
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <TabList gap={4} flexDirection={'column'} border={'none'}>
            <FeaturesTab>
              <RewindThumb />
              Live conference rewind
            </FeaturesTab>

            <FeaturesTab>
              <LibraryThumb />
              User-centered library
            </FeaturesTab>

            <FeaturesTab>
              <LoopIconThumb />
              60 second loop
            </FeaturesTab>

            <FeaturesTab>
              <CallIconThumb />
              Calls during conference
            </FeaturesTab>

            <FeaturesTab>
              <MessageIconThumb />
              30 second video messages
            </FeaturesTab>

            <FeaturesTab>
              <NoteIconThumb />
              Timecoded sticky notes
            </FeaturesTab>
          </TabList>

          <FeaturesTabPanels>
            <TabPanel padding={'0'}>
              <Image
                boxSize="427px"
                width="666px"
                src="https://images.pexels.com/photos/213078/pexels-photo-213078.jpeg?cs=srgb&dl=pexels-oluwaseun-duncan-213078.jpg&fm=jpg"
                alt="slide 1 image"
                marginBottom={'32px'}
              />
              <p>
                1! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.&nbsp;
                <a href="https://images.pexels.com">Learn More</a>
              </p>
            </TabPanel>
            <TabPanel>
              <Image
                boxSize="427px"
                width="666px"
                src="https://images.pexels.com/photos/6636091/pexels-photo-6636091.jpeg?cs=srgb&dl=pexels-cottonbro-6636091.jpg&fm=jpg"
                alt="slide 2 image"
                marginBottom={'32px'}
              />
              <p>
                2! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.&nbsp;
                <a href="https://images.pexels.com">Learn More</a>
              </p>
            </TabPanel>
            <TabPanel>
              <Image
                boxSize="427px"
                width="666px"
                src="https://images.pexels.com/photos/5124881/pexels-photo-5124881.jpeg?cs=srgb&dl=pexels-cottonbro-5124881.jpg&fm=jpg"
                alt="slide 3 image"
                marginBottom={'32px'}
              />
              <p>
                3! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.&nbsp;
                <a href="https://images.pexels.com">Learn More</a>
              </p>
            </TabPanel>
            <TabPanel>
              <Image
                boxSize="427px"
                width="666px"
                src="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?cs=srgb&dl=pexels-burst-374870.jpg&fm=jpg"
                alt="slide 4 image"
                marginBottom={'32px'}
              />
              <p>
                4! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.&nbsp;
                <a href="https://images.pexels.com">Learn More</a>
              </p>
            </TabPanel>
            <TabPanel>
              <Image
                boxSize="427px"
                width="666px"
                src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?cs=srgb&dl=pexels-tatiana-fet-1105766.jpg&fm=jpg"
                alt="slide 5 image"
                marginBottom={'32px'}
              />
              <p>
                5! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.&nbsp;
                <a href="https://images.pexels.com">Learn More</a>
              </p>
            </TabPanel>
            <TabPanel>
              <Image
                boxSize="427px"
                width="666px"
                src="https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?cs=srgb&dl=pexels-josh-hild-2422461.jpg&fm=jpg"
                alt="slide 6 image"
                marginBottom={'32px'}
              />
              <p>
                6! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.&nbsp;
                <a href="https://images.pexels.com">Learn More</a>
              </p>
            </TabPanel>
          </FeaturesTabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};
export default FeatherTabs;

// const TabElement = ({ text, url, link }) => {
//   return (
//     <TabPanel padding={'0'}>
//       <Image
//         boxSize="427px"
//         width="666px"
//         src={url}
//         alt="slide 1 image"
//         marginBottom={'32px'}
//       />
//       <p>
//         {text}&nbsp;
//         <a href={link}>Learn More</a>
//       </p>
//     </TabPanel>
//   );
// };
// // export default AcordionElement;
