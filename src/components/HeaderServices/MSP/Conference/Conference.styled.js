
import styled from 'styled-components';


export const Section = styled.section`
  padding: 200px 0px 100px;
  
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 0px;
    padding: 180px 0px 120px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 200px 0px 180px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 200px 0px 100px;
  }
`;

export const ContainerTwo = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;

  ${({ theme }) => theme.device.mobile}  {
    /* width: 343px; */
    padding: 0;
    width: 375px;
  }

  ${({ theme }) => theme.device.tablet}  {
    padding: 0 0px;
    width: 760px;
  }

  ${({ theme }) => theme.device.default} {
    padding: 0;
    width: 880px;
  }
  ${({ theme }) => theme.device.desktop}  {
    width: 1320px;
  }
`;

export const GlobalBoxTwo = styled.div`

  width: auto;
  text-align: left;
  padding-right: 8px;
  padding-left: 8px;
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    text-align: left;
    width: 250px;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    
    text-align: left;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 318px;
    text-align: left;
  } ;
`;

export const ConferenceItem = styled.li`
  align-items: center;
  padding: 0 32px;
    margin-bottom: 100px;
    z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &:nth-child(1n + 2) {
      flex-direction: row-reverse;
    }
      margin-bottom: 80px;

  }
  ${({ theme }) => theme.device.default} {
      margin-bottom: 150px;
   
  }
  ${({ theme }) => theme.device.desktop} {

      margin-bottom: 170px;
    

  }
`;

export const ConferenceColumn = styled.li`
  margin: 0 auto;
    margin-bottom: 200px;

  ${({ theme }) => theme.device.tablet} {
    display: block;
    justify-content: space-around;
    width: 700px;
  }
  ${({ theme }) => theme.device.default} {
    width: 900px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1000px;
    margin-bottom: 235px;
  }
`;

export const ConferenceItemCenter = styled.li`
  padding: 60px 0;
  align-items: center;
  margin-bottom: 60px;
  ${({ theme }) => theme.device.tablet} {
    padding: 60px 0;
    align-items: center;
    margin-bottom: 100px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 80px 0;
    margin-bottom: 100px;
  }
  ${({ theme }) => theme.device.desktop} {
      padding: 80px 30px;
      margin-bottom: 200px;
  }
`;

export const RowBox = styled.div`
  width: auto;
  text-align: left;
  padding-right: 8px;
  padding-left: 8px;
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
  ${({ theme }) => theme.device.default} {


  }
  ${({ theme }) => theme.device.desktop} {
    
  } ;
`;
export const RowBoxLogo = styled.div`
  width: auto;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 70px;
  align-items: start;
  ${({ theme }) => theme.device.tablet} {
    gap: 90px;
  }
  ${({ theme }) => theme.device.default} {


  }
  ${({ theme }) => theme.device.desktop} {
    gap: 110px;
  } ;
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

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 22px;
  line-height: 1.2;
  text-align: left;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 22px;
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 22px;
    
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;
 
  }
`;
export const SubTitle2 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 22px;
  line-height: 1.2;
  text-align: left;
  padding-bottom: 16px;
  width: 305px;

  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    width: 262px;
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    width: 331px;
    font-size: 22px;
    
  }
  ${({ theme }) => theme.device.desktop} {
    width: 519px;
    font-size: 28px;
 
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
  font-size: 22px;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => theme.colors.dark_grey};
  ${({ theme }) => theme.device.tablet} {
    font-size: 22px;
    padding-bottom: 30px;
  }
  ${({ theme }) => theme.device.default} {
    padding-bottom: 30px;
    font-size: 22px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;
    padding-bottom: 30px;
  }
`;


export const TitleDes = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark_grey};
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
    margin-bottom: 82px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;

  }
`;

export const Discription = styled.p`
position: relative;
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.dark_grey};
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  font-size: 12px;
}
${({ theme }) => theme.device.default} {
  font-size: 12px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 541px;
}
`;
export const DiscriptionSub = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.4;

  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.dark_grey};
`;


export const LenDis = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1.35;
width: 79px;
color: ${({ theme }) => theme.colors.dark_grey};
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  font-size: 12px;
  
}
${({ theme }) => theme.device.default} {
  font-size: 12px;
  width: 92px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 92px;
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


export const DiscriptionBold = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.bold};
font-size: 12px;
line-height: 1.35;
text-align: center;
color: ${({ theme }) => theme.colors.dark_grey};

${({ theme }) => theme.device.tablet} {
  font-size: 12px;
}
${({ theme }) => theme.device.default} {
  font-size: 14px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  
}
`;

export const DiscriptionWithMargin = styled.p`
position: relative;
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1.35;
text-align: center;
color: ${({ theme }) => theme.colors.dark_grey};
  margin-bottom: 50px;
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
        margin-bottom: 0;

  }
  ${({ theme }) => theme.device.default} {
    font-size: 14px;

  }
  ${({ theme }) => theme.device.desktop} {

  }
`;


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



export const BackCustom = styled.img`
  position: absolute;
  z-index: -1;
  width: 347px;
  margin-left: -30px;
  margin-top: -110px;
  ${({ theme }) => theme.device.tablet} {
    width: 351px;
    margin-left: -50px;
    margin-top: -60px;
}
  ${({ theme }) => theme.device.default} {
    width: 420px;
   margin-left: -50px;
   margin-top: -120px;
}
  ${({ theme }) => theme.device.desktop} {
   width: 670px;
   margin-left: -100px;
   margin-top: -100px;
};
`

export const Len = styled.img`
margin-bottom: 32px;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 32px;
}
  ${({ theme }) => theme.device.default} {
    margin-bottom: 42px;
}
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 52px;
};
`


export const DivEvo = styled.div`

  ${({ theme }) => theme.device.tablet} {
    margin-left: 20px;
    margin-top: -40px;
}
  ${({ theme }) => theme.device.default} {
    margin-left: 20px;
    margin-top: 0px;
}
  ${({ theme }) => theme.device.desktop} {
    margin-left: 50px;
    margin-top: 50px;
};
`


export const DivHalf = styled.div`
  width: 311px;
  

  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    width: 250px;
  }
  ${({ theme }) => theme.device.default} {
    width: 318px;

  }
  ${({ theme }) => theme.device.desktop} {
    width: 433px;
  } ;
`;


export const DivLen = styled.div`
    width: 169px;
    margin: 0 auto;
    &:first-child{
      margin-top:130px;
    }
    &:not(:last-child){
      margin-bottom: 52px; 
    }
  ${({ theme }) => theme.device.tablet} {
    &:first-child{
      margin-top: 0px;
    }
    &:not(:last-child){
      margin-bottom: 52px; 
    }
  ${({ theme }) => theme.device.default} {
   width: 253px;
   &:not(:last-child){
    margin-bottom: 82px; 
  }
}
  ${({ theme }) => theme.device.desktop} {
    
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
width: 204px;
margin: 0 auto;

  ${({ theme }) => theme.device.tablet} {
    width: 150px;

}
  ${({ theme }) => theme.device.default} {
    width: 200px;
}
  ${({ theme }) => theme.device.desktop} {
    
    width: 290px;
};
`
export const CentralDivLogo = styled.div`
width: auto;
margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    
}
  ${({ theme }) => theme.device.default} {

}
  ${({ theme }) => theme.device.desktop} {

};
`


export const LinkCustom = styled.a`
  color: #3E3D4A;
  & :hover{
    color: #CE1700;
  }

  ${({ theme }) => theme.device.tablet} {
      
  }
    ${({ theme }) => theme.device.default} {
      
  }
    ${({ theme }) => theme.device.desktop} {
     
  };
`
export const Arrow = styled.img`
color: #3E3D4A;
& :hover{
  color: #CE1700;
}

  ${({ theme }) => theme.device.tablet} {
      
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {
     
  };
`



//
//backgrounds
//

export const BackEvo = styled.img`
  display: none;
  position: absolute;
  z-index: 0;
  
  ${({ theme }) => theme.device.tablet} {
    display: block;
    width: 350px;
    margin-top: -75px;
    margin-left: -30px;
}
  ${({ theme }) => theme.device.default} {
    width: 460px;
    margin-top: -45px;
    margin-left: -60px;
}
  ${({ theme }) => theme.device.desktop} {
   width: 652px;
   margin-top: -45px;
   margin-left: -50px;
};
`
export const BackEvoM = styled.img`
  width: 375px;
  position: absolute;
  top: 820px;
  right: 0;
  left: 0;
  margin: 0 auto;
  

  ${({ theme }) => theme.device.tablet} {
    display: none;
   
}
  ${({ theme }) => theme.device.default} {
   
}
  ${({ theme }) => theme.device.desktop} {
  
};
`


export const CentrLine=styled.img`
  position: absolute;
  z-index: 1;
  display: none;
  ${({ theme }) => theme.device.tablet} {
    display: block;
    height: 351px;
    top: -80px;
   left: -13px;
  }
    ${({ theme }) => theme.device.default} { 
      height: 434px;
      top: -180px;
     left: -18px;
  }
    ${({ theme }) => theme.device.desktop} {
      height: 599px;
     top: -370px;
     left: -20px;
  };
`
export const CentrLinePart=styled.img`
  position: absolute;
  z-index: 1;
  height: 60px;
  top: 0px;
    left: -15px;
  ${({ theme }) => theme.device.tablet} {

  }
    ${({ theme }) => theme.device.default} { 
      
      top: 0px;
     left: -20px;
  }
    ${({ theme }) => theme.device.desktop} {
      height: 60px;
     top: 0px;
     left: -22px;
  };
`


export const LeftLine=styled.img`
  position: absolute;
  z-index: 1;
  height: 305px;
    top: -80px;
    left: -13px;
  ${({ theme }) => theme.device.tablet} {
    height: 305px;
    top: -180px;
    left: -13px;
  }
    ${({ theme }) => theme.device.default} {
      height: 305px;
      top: -180px;
      left: -18px;
  }
    ${({ theme }) => theme.device.desktop} {
      height: 365px;
     top: -240px;
     left: -18px;
  };
`
export const LeftLinePart =styled.img`
  position: absolute;
  z-index: 1;
  top: 0px;
    left: -15px;
  ${({ theme }) => theme.device.tablet} {
    
  }
    ${({ theme }) => theme.device.default} {
      top: 0px;
      left: -20px;
  }
    ${({ theme }) => theme.device.desktop} {
     top: 0px;
     left: -20px;
  };
`



export const LeftHow =styled.img`
  position: absolute;
  z-index: 1;
  left: -13px;
  top: -150px;
  height: 681px;
  ${({ theme }) => theme.device.tablet} {
    left: -13px;
    top: -235px;
    height: 600px;
  }
    ${({ theme }) => theme.device.default} {
      top: -235px;
     left: -18px;
     height: 630px;
  }
    ${({ theme }) => theme.device.desktop} {
      top: -380px;
     left: -20px;
     height: 959px;
  };
`
 

export const RightHow =styled.img`
  position: absolute;
  z-index: 1;
  display: none;
  ${({ theme }) => theme.device.tablet} {
      display: block;
      left: -13px;
    top: -238px;
    height: 600px;
  }
    ${({ theme }) => theme.device.default} {
      top: -238px;
      left: -18px;
      height: 707px;
  }
    ${({ theme }) => theme.device.desktop} {
      height: 1058px;
      top: -380px;
     left: -20px;
  };
`
 
export const LogoPartners =styled.img`
  margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
   
  }
    ${({ theme }) => theme.device.default} {
   
  }
    ${({ theme }) => theme.device.desktop} {
      
  };
`

export const Products=styled.img`
margin: 0 auto;
width: 311px;
  
  ${({ theme }) => theme.device.tablet} {
  width: 637px;
  }
    ${({ theme }) => theme.device.default} {
      width: 637px;
  }
    ${({ theme }) => theme.device.desktop} {
      width: 968px;
  };
`
 