import Media from 'react-media';
import { size } from '../../constants/mediaSize';
const MediaQuery = ({ device, children }) => {
  return (
    <Media
      queries={{
        mobile: `(min-width: ${size.mobile})and (max-width: 767px)`,
        tablet: `(min-width: ${size.tablet}) and (max-width: 959px)`,
        tabletUp: `(min-width: ${size.tablet})`,
        default: `(min-width: ${size.default}) `,
        defaultOnly: `(min-width: ${size.default}) and (max-width: 1439px)`,
        desktop: `(min-width: ${size.desktop})`,
      }}
    >
      {matches => matches[device] && children}
    </Media>
  );
};
export default MediaQuery;
