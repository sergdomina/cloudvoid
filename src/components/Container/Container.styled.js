import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';

const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;

  ${device.mobile} {
    /* width: 343px; */
    padding: 0;
    width: 375px;
  }

  ${device.tablet} {
    padding: 0 0px;
    width: 760px;
  }

  ${device.default} {
    padding: 0;
    width: 880px;
  }
  ${device.desktop} {
    width: 1320px;
  }
`;
const ContainerHeader = styled.div`
  padding: 0px 32px;
  margin: 0 auto;
  width: 100%;
  ${device.tablet} {
    width: 760px;
    padding: 0px 10px;
  }
  ${device.default} {
    width: 880px;
    padding: 0px 24px;
  }
  ${device.desktop} {
    width: 1306px;
    
  }
`;

export default Container;
