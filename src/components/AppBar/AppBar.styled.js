import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ContainerHeader from '../Container';

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto; 
  width: 100%;
  z-index: 2;
  background: transporant;
  backdrop-filter: blur(8px);
  ${({ theme }) => theme.device.default} {
    padding-top: 25px;
    padding-bottom: 25px;
    top: 0;
    width: 100%;
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;

export const Nav = styled.nav`
 
  font-size: 18px;
  line-height: 1.5;
  ${({ theme }) => theme.device.mobileMax} {
    
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(50px);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out,
      visibility 0.3s ease-out;
    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }
  }
  ${({ theme }) => theme.device.tablet} {
    margin-right: 0;
  }
`;

export const NavList = styled.ul`
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
  }
  /* ${({ theme }) => theme.device.mobileMax} {
    width: 100%;
    padding: 32px;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    transform: translateX(-100%);
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 0.3s ease-out, opacity 0.3s ease-out,
      visibility 0.3s ease-out;
    &.active {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
  } */
`;

export const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 1.5;
  margin-left: 32px;
  &.active {
    
    position: relative;
    &:after {
      display: block;
    }
  }
  ${({ theme }) => theme.device.tablet} {
    margin-left: 0px;
    padding: 10px;
    &.active {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
      position: relative;
      &:after {
        display: block;
        ${({ theme }) => theme.device.desktop} {
        }
      }
    }
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;
export const LinkDown = styled(NavLink)``;

export const LogoLink = styled(NavLink)`
  ${({ theme }) => theme.device.mobileMax} {

  }
`;

export const NavItem = styled.li`
  position: relative;
  ${({ theme }) => theme.device.mobileMax} {
    padding: 15px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey_1}; 

  }
  ${({ theme }) => theme.device.tablet} {
    padding: 0;
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  ${({ theme }) => theme.device.default} {
    &:not(:last-child) {
      margin-right: 35px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-right: 55px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 113px;
  height: 16px;
  ${({ theme }) => theme.device.tablet} {
    width: 121px;
    height: 34px;
  }
  ${({ theme }) => theme.device.default} {
    width: 182px;
    height: 25px;
  }
  ${({ theme }) => theme.device.desktop} {

  }
`;
export const HeaderContainer = styled(ContainerHeader)`
    padding: 0px 32px;
    width: 100%;
  ${({ theme }) => theme.device.tablet} {
    width: 688px;
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.device.default} {
    width: 800px;
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1306px;
    display: flex;
    align-items: center;
  }
`;
// export const DownHeadDiv = styled.div`
//   ${({ theme }) => theme.device.default} {
//     margin-left: 35px;
//   }
//   ${({ theme }) => theme.device.desktop} {
//     margin-left: 100px;
//   }
// `;

export const HeaderBox = styled.div`
  ${({ theme }) => theme.device.mobileMax} {
    display: flex;
  }
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
  /* ${({ theme }) => theme.device.default} {
    display: flex;
    align-items: center;
  } */
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
  }
`;
