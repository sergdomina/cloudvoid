import styled from 'styled-components';

export const ConferenceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    text-align: left;
    font-size: 30px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1,2;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 35px;
    margin-top: 80px;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 35px;
    margin-top: 100px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    margin-top: 132px;
  }
`;
export const SectionTitleSub = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 14px;
  line-height: 1,4;
  text-align: left;
  
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;

  }
`;
export const SectionTitleSmall = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 12px;
  line-height: 1,3;
  text-align: left;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 40px;
    text-align: center;

  }
  ${({ theme }) => theme.device.default} {
    margin-bottom: 80px;

  }
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 100px;

  }
`;

export const ConferenceDiscription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 32px;
${({ theme }) => theme.device.tablet} {
  font-size: 14px;
}
${({ theme }) => theme.device.default} {
  font-size: 16px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 20px;
  
}
`;
export const ConferenceDiscriptionSub = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1,35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 30px;
  }
`;
export const OwnerUl = styled.ul`
  padding-bottom: 20px;
  ${({ theme }) => theme.device.tablet} {
    padding-bottom: 60px;
  }
  ${({ theme }) => theme.device.default} {
    padding-bottom: 60px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding-bottom: 75px;
  }
`
export const ConferenceItem = styled.li`
  margin-bottom: 100px;
  align-items: center;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &:nth-child(2n) {
    flex-direction: row-reverse;
    }
  }
  ${({ theme }) => theme.device.default} {
    margin-bottom: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &:nth-child(2n) {
    flex-direction: row-reverse;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 70px;
    
  }
`;
export const Image = styled.img`
  margin: 0 auto;
  
  ${({ theme }) => theme.device.tablet} {
    transform: scale(86%);
  }
  ${({ theme }) => theme.device.default} {
    transform: scale(100%);
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`
export const DivImg = styled.div`
    margin: 0 auto;
    padding-left: 35px;
    padding-right: 35px;
  ${({ theme }) => theme.device.tablet} {
    padding: 0px 0px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 20px 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 40px 40px;
  }
`