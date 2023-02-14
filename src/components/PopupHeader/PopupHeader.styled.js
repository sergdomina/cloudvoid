import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const PopupBox = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12.5px);
  ${({ theme }) => theme.device.tablet} {
    box-shadow: 0px 4px 20px rgba(206, 23, 0, 0.25);
    width: 280px;
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
  color: ${({ theme }) => theme.colors.dark};
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

export const PopButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;
  margin-left: 32px;
  border: none;
  &.hover {
    background: ${({ theme }) => theme.colors.grey_1};
    position: relative;
    &:after {

    }
  }
  ${({ theme }) => theme.device.tablet} {
    margin-left: 0px;

  }
`;

