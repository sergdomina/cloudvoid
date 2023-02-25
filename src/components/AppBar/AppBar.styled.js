import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ContainerHeader from '../Container';

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 24px 0;
  margin: 0 auto; 
  z-index: 5;
  width: 100%;
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
    height: 100vh;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-100%);
    //background-color: ${({ theme }) => theme.colors.mercury} ;

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

export const NavSubList = styled(NavList)`
  ${({ theme }) => theme.device.mobileMax} {
    position: absolute;
    //display: none;
    width: 100%;
    top: 0;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out,
    visibility 0.3s ease-out;
    &.active{
      //display: block;
      transform: translateX(0);
    }
  }
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

export const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 1.5;
  padding: 15px 32px;
  width: 100%;
  display: block;
  &.active {
    
    position: relative;
    &:after {
      display: block;
    }
  }
  ${({ theme }) => theme.device.tablet} {
    margin-left: 0;
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
    display: flex;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  ${({ theme }) => theme.device.mobileMax} {
    background-color: #fff;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey_1};
    &:first-child{
      border-top: 1px solid ${({ theme }) => theme.colors.grey_1};
    }
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
    justify-content: space-between;
    flex-direction: row-reverse;
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

export const ArrowButton = styled.span`
  width: 16px;
  height: 16px;
  position: relative;
  border-top: 1px solid black;
  border-right: 1px solid black;
  transform: ${({ direction }) => direction === 'right' ? 'rotate(45deg)' : 'rotate(-135deg)'};
  &.hover {
    background: ${({ theme }) => theme.colors.grey_1};
    position: relative;
  }
`

export const ButtonNavSubList = styled.button`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: ${({ direction }) => direction === 'right' ? 'space-between' : 'flex-start'};;
  font-size: 14px;
  line-height: 1.5;
  border: none;
  padding: 15px 32px;
  text-align: left;
  width: 100%;
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  ${({ theme }) => theme.device.tablet} {
    margin-left: 0;
  }
`;
