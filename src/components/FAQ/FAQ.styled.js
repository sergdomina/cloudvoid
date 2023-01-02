import styled from 'styled-components';

export const FAQSection = styled.section`
  padding-top: 80px;
  padding-bottom: 30px;
  ${({ theme }) => theme.device.tablet} {
    padding-bottom: 40px;
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;

export const ContainerFAQ = styled.div`
  margin: 0 auto;
  width: 343px;
  
  ${({ theme }) => theme.device.tablet} {
    width: 618px;
  }

  ${({ theme }) => theme.device.default} {
    padding: 0 24px;
    width: 830px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1140px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1, 2;
  text-align: center;

  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 35px;
    /* padding-top: 80px; */
  }
  ${({ theme }) => theme.device.default} {
    font-size: 35px;
    padding-top: 100px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    padding-top: 132px;
  }
`;

export const SectionTitleSub = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 14px;
  line-height: 1, 4;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    padding-bottom: 30px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
    padding-bottom: 40px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
    padding-bottom: 40px;
  }
`;

export const FAQdiv = styled.div`
  margin: 0 auto;
`;
export const FAQul = styled.ul``;
export const FAQli = styled.li`
  width: 343;
  /* padding-top: 24px;
  padding-bottom: 24px; */
  &:not(:last-child) {
    margin-bottom: 48px;
  }

  ${({ theme }) => theme.device.tablet} {
    /* padding-top: 28px;
    padding-bottom: 34px; */
    &:not(:last-child) {
      margin-bottom: 62px;
    }
  }
  ${({ theme }) => theme.device.default} {
    /* padding-top: 32px; */
    padding-bottom: 40px;
    &:not(:last-child) {
      margin-bottom: 72px;
    }
  }
`;




