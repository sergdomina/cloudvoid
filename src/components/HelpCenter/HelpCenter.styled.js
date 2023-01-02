import styled from 'styled-components';
import Container from '../Container';
export const HelpSection = styled.div`
  padding-top: 62px;
  padding-bottom: 52px;
  background: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.device.desktop} {
    padding-top: 94px;
    padding-bottom: 95px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.desktop} {
    font-size: 24px;
    line-height: 1.5;
  }
`;

export const HelpContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 56px;
  ${({ theme }) => theme.device.desktop} {
    padding-top: 96px;
    padding-bottom: 38px;
  }
`;

export const HelList = styled.ul`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-wrap: wrap;
    gap: 56px 35px;
  }
`;
export const HelpInputStyle = styled.input`
  width: 100%;
  display: block;
  border-radius: 8px;
  padding-left: 36px;
  height: 32px;
  color: ${({ theme }) => theme.colors.placeholder};
  background: ${({ theme }) => theme.colors.input_bg};

  &::placeholder {
    font-size: 14px;
    line-height: 1.43;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const HelpItem = styled.li`
  ${({ theme }) => theme.device.mobileMax} {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    width: 356px;
  }
`;

export const HelpTile = styled.h3`
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.device.desktop} {
  }
`;

export const HelpSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primaryText};
  ${({ theme }) => theme.device.desktop} {
  }
`;

export const Helplink = styled.a`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.link};
  text-decoration-line: underline;
  color: #007aff;
  ${({ theme }) => theme.device.desktop} {
  }
`;

export const HelpBox = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.device.desktop} {
    width: 551px;
    margin: 0 auto;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
  }
`;
