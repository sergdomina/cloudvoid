
import styled from 'styled-components';

export const Section = styled.section`
      padding: 0px 0;
      margin-bottom: 80px;
      background: ${({ theme }) => theme.colors.grey_1};
    ${({ theme }) => theme.device.tablet} {
      margin-bottom: 0px;
      background: none;
      padding: 30px 0 50px ;
    }
    ${({ theme }) => theme.device.default} {
      padding: 100px 0;
    }
    ${({ theme }) => theme.device.desktop} {

    padding: 130px 0;
    }
` 

export const ReadyLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  padding: 14px 33px;
  width: 205px; 
  font-size: 14px;
  line-height: 1.3;
  background-color: white;
  display: block;
  text-align: center;
  
  ${({ theme }) => theme.device.tablet} {
    text-align: center;
    margin: 0 auto;
  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const Bg = styled.div`
    margin: 0 auto;
    color: #CE1700;
    height: 317px;
    width: auto;
    background-color: #EFEFF0;
    padding: 10% 10%;
    ${({ theme }) => theme.device.tablet} {
        height: 383px;
        width: 638px;
        padding: 100px 130px;
      }
      ${({ theme }) => theme.device.default} {
        height: 383px;
        width: 798px;
       padding: 85px 129px;
      }
      ${({ theme }) => theme.device.desktop} {
        height: 383px;
        width: 1320px;
       padding: 85px 390px;
      }
`;

export const DiscriptionCenter = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.text};
margin-bottom: 32px;
text-align: left;
${({ theme }) => theme.device.tablet} {
  font-size: 12px;
  margin-bottom: 32px;
  text-align: center;
}
${({ theme }) => theme.device.default} {
  font-size: 14px;
  margin-bottom: 44px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  margin-bottom: 44px;
}
`;


export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    text-align: center;
  } 
  ${({ theme }) => theme.device.default} {
   
    font-size: 26px;
 

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;
  }
`;

export const Ready1 =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    bottom: 0;
    left: 30px;
  }
    ${({ theme }) => theme.device.default} {
      bottom: 0;
     left: 30px;
  }
    ${({ theme }) => theme.device.desktop} {
     bottom: 0;
     left: 113px;
  };
`
export const Ready2 =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    top: 0;
    left: 76px;
  }
    ${({ theme }) => theme.device.default} {
      top: 0;
     left: 80px;
  }
    ${({ theme }) => theme.device.desktop} {
     top: 0;
     left: 205px;
  };
`
export const Ready3 =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    bottom: 0;
    left: 118px;
  }
    ${({ theme }) => theme.device.default} {
      bottom: 0;
     left: 127px;
  }
    ${({ theme }) => theme.device.desktop} {
     bottom: 0;
     left: 316px;
  };
`
export const Ready4 =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    bottom: 0;
    left: 520px;
  }
    ${({ theme }) => theme.device.default} {
      bottom: 0;
     left: 671px;
  }
    ${({ theme }) => theme.device.desktop} {
     bottom: 0;
     left: 1018px;
  };
`
export const Ready5 =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    top: 0;
    left: 564px;
  }
    ${({ theme }) => theme.device.default} {
      top: 0;
     left: 721px;
  }
    ${({ theme }) => theme.device.desktop} {
     top: 0;
     left: 1112px;
  };
`
export const Ready6 =styled.img`
  position: absolute;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    bottom: 0;
    left: 606px;
  }
    ${({ theme }) => theme.device.default} {
      bottom: 0;
     left: 768px;
  }
    ${({ theme }) => theme.device.desktop} {
     bottom: 0;
     left: 1223px;
  };
`
export const ReadyM =styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 10px;
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
    ${({ theme }) => theme.device.default} {
   
  }
    ${({ theme }) => theme.device.desktop} {

  };
`