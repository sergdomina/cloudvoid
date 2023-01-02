import styled from 'styled-components';

export const Section = styled.section`

  ${({ theme }) => theme.device.tablet} {

  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
  }
`;


export const DivAcord = styled.div`
margin: 0 auto;
${({ theme }) => theme.device.tablet} {
  transform: rotate(-90deg);
}
${({ theme }) => theme.device.default} {

}
${({ theme }) => theme.device.desktop} {
  width: 420px;
}
`


export const Questions = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 14px;
  line-height: 1.35;
  text-align: left;
  padding-top: 16px;
  padding-bottom: 16px;
  /* margin-bottom: 16px; */
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 30px;
    font-size: 16px;
    /* &:hover {
      padding-bottom: 2px;
    } */
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 22px;
  }
`;
export const Answer = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 27px;
  text-align: left;
  color: ${({ theme }) => theme.colors.placeholder};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    transform: rotate(90deg);
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 2px;
    padding-bottom: 12px;
    padding-left: 10px;
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 14px;
  }
`;
export const PartnersDiv = styled.div`
  padding-top: 20px;
  width: 333px;
  ${({ theme }) => theme.device.tablet} {
    width: 700px;
    margin-left: 20px;
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
export const PartnersUl = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.device.tablet} {
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
export const PartnersLi = styled.li`
  padding: 0;
  margin-bottom: 24px;
  margin-right: 12px;
  
  transform: scale(80%);
  ${({ theme }) => theme.device.tablet} {
    transform: scale(100%);
    margin-bottom: 32px;
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
