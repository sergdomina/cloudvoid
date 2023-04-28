import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';


export const Section = styled.section`
  padding: 100px 0px 100px;

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
  padding: 0 10px;
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
    width: 768px;
    height: 700px;
  }

  ${device.default} {
    padding: 0;
    width: 960px;
    height: 800px;
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


export const RegionNA = styled.a`
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }
  height: 216px;
  width: 310px;

  ${({ theme }) => theme.device.tablet} {
    position: absolute; 
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
     top: 40px;
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
  display: none;

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
export const RegionE = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }
  display: none;
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


export const RegionAsia = styled.a`  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }
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


export const RegionAfrica = styled.a`
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }
  display: none;
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


export const RegionAu = styled.a`
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }
  display: none;
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
export const RegionME = styled.a`

  
  width: auto;
  fill: currentColor;
  transition: all 0.3s linear;
  & svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
  }
  display: none;
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
