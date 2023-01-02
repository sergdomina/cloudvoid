import styled from 'styled-components';

export const Section = styled.section`
padding: 30px 0px 40px;
  ${({ theme }) => theme.device.tablet} {
    padding: 40px 0px 60px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 50px 0px 70px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 60px 0px 100px;
  }
`;

export const GlobalBoxTwo = styled.div`

  width: auto;
  text-align: left;
  padding-right: 8px;
  padding-left: 8px;
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    width: 310px;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 318px;
    text-align: left;
  } ;
`;

export const HiddenTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const DiscriptionSub = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.4;

  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
`;
export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 26px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;
    padding-bottom: 32px;
  }
`;

export const LenTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 26px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;
  }
`;

export const SubTitleSolo = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 26px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;
    padding-bottom: 132px;
    margin-left: 80px;
  }
`;


export const TitleDes = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 16px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 18px;
  }
`;
export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    margin: 0 auto;
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 26px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;
    padding-top: 72px;
  }
`;

export const Discription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  font-size: 14px;
}
${({ theme }) => theme.device.default} {
  font-size: 12px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 430px;
}
`;


export const LenDis = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  font-size: 14px;
}
${({ theme }) => theme.device.default} {
  font-size: 12px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 92px;
}
`;


export const DiscriptionCenter = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 24px;
text-align: center;
margin: 0 auto;
${({ theme }) => theme.device.tablet} {
  font-size: 14px;
}
${({ theme }) => theme.device.default} {
  font-size: 12px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 657px;
}
`;
export const DiscriptionBold = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.bold};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  font-size: 14px;
}
${({ theme }) => theme.device.default} {
  font-size: 12px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  
}
`;

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 27px;
  ${({ theme }) => theme.device.tablet} {
    

  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
    width: 350px;
      margin-bottom: 100px;
  }
`;

export const ConferenceItem = styled.li`
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 80px;
  }
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    &:nth-child(1n + 2) {
      flex-direction: row-reverse;
    }
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-bottom: 170px;
    }
    &:first-child {
      margin-top: 160px;
    }
  }
`;

export const ConferenceItemCenter = styled.li`
  align-items: center;

  ${({ theme }) => theme.device.tablet} {
    align-items: center;

  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
      margin-bottom: 200px;
  }
`;


export const ConferenceItemSolo = styled.li`
  align-items: center;
  ${({ theme }) => theme.device.tablet} {

  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const BrandsLogos = styled.img`

  ${({ theme }) => theme.device.tablet} {
    width: 310px;
}
  ${({ theme }) => theme.device.default} {
    width: 402px;
}
  ${({ theme }) => theme.device.desktop} {
    width: 570px;
}
`
export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 27px;
  margin-bottom: 24px;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 32px;
}
  ${({ theme }) => theme.device.default} {
    margin-bottom: 50px;
}
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 70px;
}
`;

export const BoxBeforEnd = styled.div`

  margin: 0 auto;
  margin-bottom: 102px;
`;

export const BackEvo = styled.img`
  position: absolute;
  z-index: -1;
  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
   width: 652px;
   margin-left: -50px;
};
`

export const BackCustom = styled.img`
  position: absolute;
  z-index: -1;
  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
   width: 670px;
};
`


export const Len = styled.img`

  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 52px;
};
`


export const DivEvo = styled.div`

  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
    margin-left: 50px;
    margin-top: 100px;
};
`


export const DivLen = styled.div`

  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
    margin-left: 50px;
    margin-top: 60px;
};
`


export const DivBecome = styled.div`

  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
    margin-left: 50px;
    margin-top: 140px;
};
`


export const CentralDiv = styled.div`

  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
    margin: 0 auto;
    width: 350px;
};
`

