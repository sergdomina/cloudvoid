import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';

export const Section = styled.section`
  padding: 100px 0 100px;

  ${({ theme }) => theme.device.tablet} {
    //padding: 180px 0 140px;
  }
  ${({ theme }) => theme.device.default} {
    //padding: 200px 0 100px;
  }
  ${({ theme }) => theme.device.desktop} {
    //padding: 230px 0 100px;
  }
`;

export const Container = styled.div`
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;
  //overflow: hidden;
  
  ${device.mobile} {
    /* width: 343px; */
    padding: 0;
    width: 375px;
  }

  ${device.tablet} {
    padding: 0 0px;
    width: 768px;
    //height: 700px;
  }

  ${device.default} {
    padding: 0;
    width: 960px;
    //height: 800px;
  }
  ${device.desktop} {
    width: 1440px;
    //height: 1000px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark_grey};
  ${({ theme }) => theme.device.tablet} {

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
text-align: center;
width: 311px;

${({ theme }) => theme.device.tablet} {
  margin: 0 auto;
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

export const DivListMobile =styled.div`
li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3E3D4A;
  height: 48px;
  padding: 5px;
}

div{
 &:not(:last-child){
  margin-bottom: 80px;
 }
}
`

export const WorldMapContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 15px;
  g{
    transition: fill .3s;
    position: relative;
  }
  
  g path{
    stroke: transparent;
    stroke-width: 14px;
  }
  
  g:hover{
    cursor: pointer;
    fill: ${({theme}) => theme.colors.red }
  }
`

const mapLink = styled.a`
  fill: currentColor;
  transition: all 0.3s linear;
  
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
    transition: fill .3s;
  }

  &:hover svg{
    fill: ${({theme}) => theme.colors.red }
  }
`

export const RegionNA = styled(mapLink)`
  height: 216px;
  width: 310px;
  
  ${({ theme }) => theme.device.tablet} {
    position: relative; 
    height: 221px;
    width: 318px;
    top: 50px;
  }
    ${({ theme }) => theme.device.default} {
      height: 270px;
     width: 389px;
     top: 50px;
  }
    ${({ theme }) => theme.device.desktop} {
      height: 413px;
      width: 595px;
      top: 0;
  };
`
export const RegionSA = styled(mapLink)`
  display: none;
  width: auto;

  ${({ theme }) => theme.device.tablet} {
    display: block;
    position: absolute; 
    height: 151px;
    width: 95px;
    left: 170px;
    top: 269px;
  }
    ${({ theme }) => theme.device.default} {
      height: 185px;
      width: 116px;
      left: 210px;
      top: 316px;
  }
    ${({ theme }) => theme.device.desktop} {
      left: 320px;
      top: 440px;
      height: 283px;
      width: 178px;
  };
`
export const RegionE = styled(mapLink)`
  display: none;
  width: auto;
  
  ${({ theme }) => theme.device.tablet} {
    display: block;
    position: absolute; 
    height: 147px;
    width: 171px;
    top: 54px;
    left: 302px;
  }
    ${({ theme }) => theme.device.default} {
      top: 54px;
      left: 332px;
    height: 179px;
    width: 209px;
  }
    ${({ theme }) => theme.device.desktop} {
      top: 54px;
     left: 532px;
     height: 274px;
     width: 320px;
  };
`
export const RegionAsia = styled(mapLink)`  
  width: auto;
  display: none;
  
  ${({ theme }) => theme.device.tablet} {
    display: block;
    position: absolute; 
    height: 240px;
    width: 286px;
    top: 41px;
    left: 470px;
  }
    ${({ theme }) => theme.device.default} {
    left: 536px;
    top: 43px;
    height: 292px;
    width: 349px;
  }
    ${({ theme }) => theme.device.desktop} {
    left: 846px;
    top: 45px;
    height: 448px;
    width: 534px;
  };
`
export const RegionAfrica = styled(mapLink)`
  display: none;
  width: auto;
  
  ${({ theme }) => theme.device.tablet} {
    display: block;
    position: absolute; 
    height: 151px;
    width: 137px;
    left: 331px;
    top: 203px;
  }
    ${({ theme }) => theme.device.default} {
    left: 368px;
    top: 234px;
    height: 185px;
    width: 167px;
  }
    ${({ theme }) => theme.device.desktop} {
    left: 586px;
    top: 340px;
    height: 283px;
    width: 257px;
  };
`
export const RegionAu = styled(mapLink)`
  display: none;
  width: auto;
  
  ${({ theme }) => theme.device.tablet} {
    display: block;
    position: absolute; 
    height: 100px;
    width: 133px;
    left: 598px;
    top: 264px;
  }
    ${({ theme }) => theme.device.default} {
      left: 690px;
      top: 323px;
    height: 122px;
    width: 162px;
  }
    ${({ theme }) => theme.device.desktop} {
   left: 1100px;
   top: 463px;
   height: 187px;
   width: 248px;
  };
`
export const RegionME = styled(mapLink)`
  display: none;
  width: auto;
  ${({ theme }) => theme.device.tablet} {
    display: block;
    position: absolute; 
    height: 49px;
    width: 54px;
    left: 432px;
    top: 198px;
  }
    ${({ theme }) => theme.device.default} {
    left: 492px;
    top: 229px;
    height: 60px;
    width: 65px;
  }
    ${({ theme }) => theme.device.desktop} {
   left: 778px;
   top: 322px;
   height: 92px;
   width: 100px;
  };
`
export const ContinentInfo = styled.div`
`

export const ContinentInfoInner = styled.div`
  position: ${({ inView }) => inView ? 'relative' : 'fixed'};
  max-width: 1440px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  bottom: ${({ inView }) => inView ? '0px' : '30px'};
  z-index: 3;
`