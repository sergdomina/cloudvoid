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
  backdrop-filter: blur(10px);
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
  font-family: 'Lato_Regular';
  font-size: 18px;
  line-height: 1.5;
  ${({ theme }) => theme.device.mobileMax} {
    padding: 32px;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
    background-color: ${({ theme }) => theme.colors.white};
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
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;

  &.active {
    font-family: ${({ theme }) => theme.fonts.descr.bold};

    position: relative;
    /* border: 3px solid #303030; */
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black_btn};
      opacity: 1;
      transform: translateY(1px);
      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
      ${({ theme }) => theme.device.desktop} {
        bottom: -10px;
      }
    }
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 18px;
  }
`;
export const LinkDown = styled(NavLink)``;

export const LogoLink = styled(NavLink)`
  ${({ theme }) => theme.device.mobileMax} {
    margin: 0 auto;
  }
`;

export const NavItem = styled.li`
  position: relative;
  ${({ theme }) => theme.device.mobileMax} {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  ${({ theme }) => theme.device.tablet} {
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
  width: 82px;
  height: 16px;
  ${({ theme }) => theme.device.tablet} {
    width: 121px;
    height: 34px;
  }
  ${({ theme }) => theme.device.default} {
    width: 121px;
    height: 34px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 167px;
    height: 46px;
  }
`;
export const HeaderContainer = styled(ContainerHeader)`

  ${({ theme }) => theme.device.tablet} {
    width: 688px;
    display: flex;
    align-items: center;
  }
  ${({ theme }) => theme.device.default} {
    width: 960px;
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
