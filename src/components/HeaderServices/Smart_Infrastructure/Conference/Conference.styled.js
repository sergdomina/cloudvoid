
import styled from 'styled-components';
import gradient from '../../../../image/Smart_Infrastructure/bgInfrastrucrure.svg'

export const Section = styled.section`
  padding: 100px 0px 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-position: top;
  background-image: url(${gradient});
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 0px;
    padding: 140px 0px 40px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 250px 0px 180px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 300px 0px 100px;
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


export const ConferenceItem = styled.li`
position: relative;
  align-items: center;
  padding: 0 32px;
    margin-bottom: 100px;
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &:first-child{
      margin-top: 50px;
    }

    &:nth-child(1n + 2) {
      flex-direction: row-reverse;
    }
    &:not(:last-child) {
      margin-bottom: 80px;
    }
  }
  ${({ theme }) => theme.device.default} {
    &:not(:last-child) {
      margin-bottom: 150px;
    }

  }
  }
  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-bottom: 170px;
    }
    &:first-child{
      margin-top: 0px;
    }

  }
`;

export const ConferenceColumn = styled.li`
  padding: 0 32px;
  align-items: center;
    margin-bottom: 180px;

  ${({ theme }) => theme.device.tablet} {
    display: block;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 135px;
  }
  ${({ theme }) => theme.device.default} {
    margin-bottom: 200px;
  }
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 235px;
  }
`;

export const ConferenceItemCenter = styled.li`
  padding: 60px 15px;
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


export const ConferenceItemSolo = styled.li`
  align-items: center;
  ${({ theme }) => theme.device.tablet} {

  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {

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
    margin-bottom: 42px;
  }
  ${({ theme }) => theme.device.default} {


  }
  ${({ theme }) => theme.device.desktop} {
    
  } ;
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
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
   
    font-size: 22px;
    
  }
  ${({ theme }) => theme.device.desktop} {
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
  text-align: left;
  margin-bottom: 80px;
  color: ${({ theme }) => theme.colors.dark_grey};
  ${({ theme }) => theme.device.tablet} {
    font-size: 22px;
   
    margin-left: 55px;
  }
  ${({ theme }) => theme.device.default} {
  
    margin-left: 40px;
    font-size: 22px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;

    margin-left: 80px;
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
  margin-bottom: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark_grey};
  ${({ theme }) => theme.device.tablet} {
    text-align: center;

  }
  ${({ theme }) => theme.device.default} {

    font-size: 28px;
    margin-bottom: 52px;

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
z-index: 1;
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


export const DiscriptionBold = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.bold};
font-size: 12px;
line-height: 1.35;
margin-right: 18px;
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

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 27px;
  width: 304px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 75px;
  ${({ theme }) => theme.device.tablet} {
      width: 248px;
      margin-bottom: 25px;
      text-align: left;
  }
  ${({ theme }) => theme.device.default} {
      width: 300px;
      margin-bottom: 25px;
  }
  ${({ theme }) => theme.device.desktop} {
      width: 350px;
      margin-bottom: 25px;
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
   margin-top: -90px;
}
  ${({ theme }) => theme.device.desktop} {
   width: 670px;
   margin-left: -100px;
   margin-top: -100px;
};
`

export const BackCustomDef = styled.img`
  position: absolute;
  z-index: -1;
  width: 341px;
  left: 20px;
  right: 0;
  top: 170px;
  ${({ theme }) => theme.device.tablet} {
    width: 363px;
    top: 0px;
    left: 72px;
}
  ${({ theme }) => theme.device.default} {
    width: 420px;
}
  ${({ theme }) => theme.device.desktop} {
   display: none;
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
    width: 315px;
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
   width: 315px;
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

  ${({ theme }) => theme.device.tablet} {
    width: 248px;
}
  ${({ theme }) => theme.device.default} {
    
}
  ${({ theme }) => theme.device.desktop} {
    margin: 0 auto;
    width: 350px;
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
  width: 80%;
  position: absolute;
  margin-top: -70px;
  margin-left: -20px;
  z-index: 0;
  ${({ theme }) => theme.device.tablet} {
    display: block;
    width: 321px;
    margin-left: -30px;
}
  ${({ theme }) => theme.device.default} {
    width: 408px;
    margin-left: -60px;
}
  ${({ theme }) => theme.device.desktop} {
   width: 652px;
   margin-left: -50px;
};
`
export const BackEvoM = styled.img`
  width: 375px;
  position: absolute;
  top: 650px;
  right: 0;
  left: 0;
  margin: 0 auto;
  z-index:0;

  ${({ theme }) => theme.device.tablet} {
    display: none;
   
}
  ${({ theme }) => theme.device.default} {
   
}
  ${({ theme }) => theme.device.desktop} {
  
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



export const LeftHow =styled.img`
  position: absolute;
  z-index: -1;
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
      top: -360px;
     left: -20px;
     height: 769px;
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
      height: 769px;
      top: -360px;
     left: -20px;
  };
`
 
export const Products=styled.img`
 
  display: none;
  ${({ theme }) => theme.device.tablet} {
  display: block;
  margin: 0 auto;
  width: 508px;
  }
    ${({ theme }) => theme.device.default} {
      width: 637px;
  }
    ${({ theme }) => theme.device.desktop} {
      width: 968px;
  };
`
export const ProductsM=styled.img`
display: block;
margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    display: none;
  
  width: 508px;
  }
    ${({ theme }) => theme.device.default} {
      width: 637px;
  }
    ${({ theme }) => theme.device.desktop} {
      width: 968px;
  };
`
export const LeftAdv =styled.img`
margin: 0 auto;
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  
}
${({ theme }) => theme.device.default} {

}
${({ theme }) => theme.device.desktop} {
 
};
`


export const CentrAdv =styled.img`
margin: 0 auto;
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  
}
${({ theme }) => theme.device.default} {
 

}
${({ theme }) => theme.device.desktop} {
 
};
`
export const RightAdv =styled.img`
margin: 0 auto;
margin-bottom: 24px;
${({ theme }) => theme.device.tablet} {
  
}
${({ theme }) => theme.device.default} {
 

}
${({ theme }) => theme.device.desktop} {

};
`