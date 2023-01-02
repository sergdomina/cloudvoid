import styled from 'styled-components';

export const ModaButtonClose = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 8px;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  /* z-index: 1; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 390px;
  width: 350px;
  padding: 50px 13px 32px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  ${({ theme }) => theme.device.desktop} {
    width: 608px;
    padding: 50px 31px 32px;
  }
`;

export const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.43;
  text-align: center;

  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 16px;
`;
export const ModalSubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.footer_bg};

  margin-bottom: 16px;
`;
export const ModalDescr = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.33;
  text-align: center;

  color: ${({ theme }) => theme.colors.footer_bg};

  margin-bottom: 24px;
`;

export const AccentDescr = styled.span`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
export const ModalInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: 14px;
  line-height: 1.43;

  border-bottom: 1px solid #a0a3bd;

  display: block;

  padding: 7px 0;

  width: 308px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

export const ModaButtonSend = styled.button`
  display: block;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.descr.semiBold};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};

  border-radius: 4px;
  padding: 14px 142px;
  cursor: pointer;
`;
