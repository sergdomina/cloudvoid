import styled from 'styled-components';

export const Section = styled.section`
  padding: 50px 0px 50px;

  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 0px;
    padding: 20px 0px 30px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 20px 0px 50px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 20px 0px 80px;
  }
`;



export const ConferenceItem = styled.li`
  padding: 0 32px;
    margin-bottom: 100px;
  z-index: 2;
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }
  ${({ theme }) => theme.device.default} {
   
  }
  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const Discription = styled.p`
position: relative;
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.dark_grey};
margin-bottom: 24px;
width: 314px;
${({ theme }) => theme.device.tablet} {
  font-size: 12px;
  margin: 0 auto 24px;
  width: 280px;
}
${({ theme }) => theme.device.default} {
  font-size: 12px;
  width: 350px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 450px;
}
`;



//
//backgrounds
//
