import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';


export const Section = styled.section`
  padding: 200px 0px 100px;

  ${({ theme }) => theme.device.tablet} {

    padding: 180px 0px 140px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 200px 0px 100px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 230px 0px 100px;
  }
`;

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
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
    width: 930px;
  }
  ${device.desktop} {
    width: 1440px;
    height: 1000px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 52px;
  margin-left: 10%;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark_grey};
  ${({ theme }) => theme.device.tablet} {
    text-align: center;
    margin-left: 0;

  }
  ${({ theme }) => theme.device.default} {

    font-size: 28px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;

  }
`;


export const DiscriptionCenter = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.dark_grey};
margin-bottom: 24px;
margin-left: 10%;
text-align: left;
width: 311px;

${({ theme }) => theme.device.tablet} {
  margin: 0 auto;
  text-align: center;
  width: 637px;
  font-size: 12px;
  padding-bottom: 50px;
}
${({ theme }) => theme.device.default} {
  
  font-size: 14px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 657px;
}
`;


export const RegionNA = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 

  }
    ${({ theme }) => theme.device.default} {
   
     
  }
    ${({ theme }) => theme.device.desktop} {
   
     
  };
`
export const RegionSA = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 

  }
    ${({ theme }) => theme.device.default} {
   
     
  }
    ${({ theme }) => theme.device.desktop} {
      left: 320px;
      top: 540px;
     
  };
`
export const RegionE = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;

  }

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 

  }
    ${({ theme }) => theme.device.default} {
   
     
  }
    ${({ theme }) => theme.device.desktop} {
      top: 154px;
     left: 532px;
  };
`
export const RegionAsia = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 

  }
    ${({ theme }) => theme.device.default} {
   
     
  }
    ${({ theme }) => theme.device.desktop} {
    left: 846px;
    top: 145px;
     
  };
`
export const RegionAfrica = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 

  }
    ${({ theme }) => theme.device.default} {
   
     
  }
    ${({ theme }) => theme.device.desktop} {
    left: 586px;
    top: 440px;
     
  };
`
export const RegionAu = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 

  }
    ${({ theme }) => theme.device.default} {
   
     
  }
    ${({ theme }) => theme.device.desktop} {
   left: 1100px;
   top: 563px;
     
  };
`
export const RegionME = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 

  }
    ${({ theme }) => theme.device.default} {
   
     
  }
    ${({ theme }) => theme.device.desktop} {
   left: 778px;
   top: 422px;
     
  };
`
