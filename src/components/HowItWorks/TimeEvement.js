import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './verticalTimelineStyle.css';

const style = {
  iconStyle: {
    background: '#C4C4C4',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none',
  },
  contentStyle: {
    color: '#404040',
    boxShadow: 'none',
    paddingTop: '0',
  },
};
const TimeElement = ({ icon, title, text, animate = 'false' }) => {
  return (
    <VerticalTimelineElement
      className={'vertical-timeline-element--work'}
      contentStyle={style.contentStyle}
      iconStyle={style.iconStyle}
      icon={<span>{icon}</span>}
      animate={animate}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <p>{text}</p>
    </VerticalTimelineElement>
  );
};
export default TimeElement;
