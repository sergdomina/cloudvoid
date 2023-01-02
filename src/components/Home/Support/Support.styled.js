import styled from 'styled-components';

export const SupportSection = styled.footer`
  position: fixed;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  background: rgba(197, 209, 241, 0.5);
  backdrop-filter: blur(25px);

  /* ${({ theme }) => theme.device.tablet} {
    bottom: 0px;
  } */
  ${({ theme }) => theme.device.default} {
    padding-top: 25px;
    padding-bottom: 25px;
    /* bottom: 0px; */
  }
  ${({ theme }) => theme.device.desktop} {
    padding-top: 30px;
    padding-bottom: 30px;
    /* bottom: 0px; */
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 18px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 26px;
  }
`;

export const SupportContainer = styled.div`
  margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 670px;
  }
  ${({ theme }) => theme.device.default} {
    margin: 0 auto;
    width: 863px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1088px;
  }
`;

export const Box = styled.div`
  margin-bottom: 30px;
  text-align: left;

  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 0px;
    padding-right: 15px;
    width: 170px;
  }
  ${({ theme }) => theme.device.default} {
    width: 170px;
    padding-right: 15px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 390px;
    padding-right: 20px;
  }
`;
export const SupportUl = styled.ul`
  display: flex;
  margin: 0 auto;
`;
export const SupportLi = styled.li`
  &:not(:last-child) {
    margin-right: 17px;
  }
  ${({ theme }) => theme.device.tablet} {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  ${({ theme }) => theme.device.default} {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
export const BoxIMG = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    align-items: right;
    margin: 0;
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.35;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.privacy_bg};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`;
export const Discriptionltd = styled.p`
  padding-top: 46px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.privacy_bg};
  ${({ theme }) => theme.device.tablet} {
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;

export const DiscriptionWithMargin = styled(Discription)`
  padding-bottom: 20px;
`;
