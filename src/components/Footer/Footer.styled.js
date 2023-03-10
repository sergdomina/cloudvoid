import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`

${({ theme }) => theme.device.tablet} {

  }
  ${({ theme }) => theme.device.default} {
   
  }
  ${({ theme }) => theme.device.desktop} {

  }
` ;
export const DivItem = styled.div`
  padding-top: 44px;
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    justify-content: space-between;
    padding: 44px 32px 18px;
  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const StyledLink = styled(Link)`

`

export const Sink = styled.a`
font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;
  ${({ theme }) => theme.device.tablet} {

    
  }
`


export const DivOne = styled.div`

  ${({ theme }) => theme.device.tablet} {

  }
  ${({ theme }) => theme.device.default} {
    padding-top: 45px;
  }
  ${({ theme }) => theme.device.desktop} {
      padding-top: 36px;
  }
`;

export const DivTwo = styled.div`{

}
`;


export const LogoImg = styled.img`
  width: 123px;
  height: 17px;
  margin-bottom: 12px;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 0px;
  }
  ${({ theme }) => theme.device.default} {
    width: 182px;
    height: 25px;
    margin-bottom: 9px;
  }
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 11px;
  }
`;

export const ItemsUl =  styled.ul`

`;

export const Items = styled.li`
    padding-bottom: 24px;
`;

export const Terms = styled.li`

    ${({ theme }) => theme.device.tablet} {
      &:not(:last-child){
        margin-right: 24px;
    } 
    }
    ${({ theme }) => theme.device.default} {
        &:not(:last-child){
          margin-right: 24px;
      }
    }
    ${({ theme }) => theme.device.desktop} {
        &:not(:last-child){
            margin-right: 24px;
        }
    }
`;


export const MainDiv = styled.div`

    margin-top: 8px;
    ${({ theme }) => theme.device.tablet} {

    }
    ${({ theme }) => theme.device.default} {
      margin-top: 5px;
      
    }
    ${({ theme }) => theme.device.desktop} {
      margin-top: 10px;
    }
`;


export const InfoDiv = styled.div`
    
    ${({ theme }) => theme.device.tablet} {

      }
      ${({ theme }) => theme.device.default} {

        
      }
      ${({ theme }) => theme.device.desktop} {
        margin-right: 190px;
      }
`;

export const CloudDiv = styled.div`
    
    ${({ theme }) => theme.device.tablet} {
      margin-top: 40px;
    }
    ${({ theme }) => theme.device.default} {
      margin-top: 50px;
      margin-right: 5px;
    }
    ${({ theme }) => theme.device.desktop} {
      margin-top: 60px;
      margin-right: 155px;
    }
`;

export const TitleDes = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 16px;
  line-height: 1.3;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 18px;
  }
`;

export const FooterLineLeft =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
      
  }
    ${({ theme }) => theme.device.default} {
      top: -45px;
     left: 370px;
  }
    ${({ theme }) => theme.device.desktop} {
     top: -37px;
     left: 590px;
  };
`
export const FooterLineRight =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
      
  }
    ${({ theme }) => theme.device.default} {
      top: -45px;
     left: 490px;
  }
    ${({ theme }) => theme.device.desktop} {
     top: -37px;
     left: 745px;
  };
`

