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
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark_grey};
  &.active {
    font-family: ${({ theme }) => theme.fonts.descr.bold};
  }
  p{
    margin-left: 32px;
  }
  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    
  }
`;

export const PopButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;
  margin-left: 32px;
  border: none;
  ${({ theme }) => theme.device.tablet} {
    margin-left: 0px;
    

  }
`;
export const PopupBox = styled.div`
  background: #fff;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 
  ${({ theme }) => theme.device.tablet} {
    width: 280px;
  }
`;
