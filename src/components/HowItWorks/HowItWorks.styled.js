import styled from 'styled-components';
// import Container from '../Container';
// import DownloadLink from '../DownloadLink';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export const HeroTitle = styled.h2`
  font-family: 'Jost';
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
