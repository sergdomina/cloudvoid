import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const PopupBox = styled.div`
  max-width: 760px;
  display: flex;
  color: ${({ theme, isOnSlider }) =>
      isOnSlider ? theme.colors.white : theme.colors.dark_grey};
  flex-direction: column;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12.5px);
  transition: all 0.3s linear;
  & p{
    color: inherit;
  }
  ${({ theme }) => theme.device.mobileMax} {
    color: ${({ theme }) => theme.colors.dark};
    width: 100%;
  }
  ${({ theme }) => theme.device.tablet} {
    box-shadow: 0px 4px 20px rgba(96, 96, 96, 0.18);
    width: 280px;
  }
  ${({ theme }) => theme.device.default} {

    
  }
`;

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
  // color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_1};
  &.active {
    font-family: ${({ theme }) => theme.fonts.descr.bold};
  }
  p{
    margin-left: 32px;
  }
  ${({ theme }) => theme.device.tablet} {

    
  }
`;

export const SubMenu = styled.button`
`

export const PopButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  // color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1.5;
  border: none;
  padding: 10px 15px;
  text-align: left;
  width: 100%;
  ${({ theme }) => theme.device.mobileMax} {
    display: none;
  }
  ${({ theme }) => theme.device.tablet} {
    
    margin-left: 0;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 14px;
    padding: 15px 32px;
    
  }
`;
