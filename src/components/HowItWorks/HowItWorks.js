import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HeroTitle } from './HowItWorks.styled';
import './verticalTimelineStyle.css';
import TimeElement from './TimeEvement';

const HowItWorks = () => {
  return (
    <>
      <HeroTitle> How it works</HeroTitle>
      <VerticalTimeline>
        <TimeElement
          icon={1}
          title={'Amet minim mollit non'}
          text={
            'est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
          }
        />

        <TimeElement
          icon={2}
          title={'Amet minim mollit non'}
          text={
            'est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
          }
        />

        <TimeElement
          icon={3}
          title={'Amet minim mollit non'}
          text={
            'est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
          }
        />

        <TimeElement
          icon={4}
          title={'Amet minim mollit non'}
          text={
            'est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
          }
        />
      </VerticalTimeline>
    </>
  );
};

export default HowItWorks;
