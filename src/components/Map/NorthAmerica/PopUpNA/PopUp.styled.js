import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PopLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;

  &.active {
    font-family: ${({ theme }) => theme.fonts.descr.bold};
  }
  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    margin-left: 15px;
  }
`;
export const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;

  &.active {
    font-family: ${({ theme }) => theme.fonts.descr.bold};
  }
  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    margin-left: 15px;
  }
`;

export const PopButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;
  ${({ theme }) => theme.device.desktop} {
    font-size: 18px;
  }
`;
export const PopupBox = styled.div`

  ${({ theme }) => theme.device.tablet} {
    width: 100vw;
  height: 220px;
  background: #fff;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
  }

  li{
    align_items: center;
    height: 30px;
  }
  }
`;
