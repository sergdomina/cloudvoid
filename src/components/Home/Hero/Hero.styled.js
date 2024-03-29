import styled from 'styled-components';
import Container from '../../Container';

// import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
  background-color: #F2F3F6;
  height: 498px;
  ${({ theme }) => theme.device.tablet} {
    height: 640px;
  }
  ${({ theme }) => theme.device.default} {
    height: 640px;
    
  }
  ${({ theme }) => theme.device.desktop} {
    height: 1034px;
  }
`;

export const HeroImg = styled.img`

`

export const HeroContainer = styled(Container)`
display: flex;
align-items: center;
    height: 100%;
    width: 100%;

  ${({ theme }) => theme.device.tablet} {

  }
  ${({ theme }) => theme.device.default} {
 
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;

export const GlobalBox = styled.div`
  
  padding-right: 10px;
  padding-left: 10px;
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
    text-align: center;
    width: 450px;
    margin: 0 auto;

  }
  ${({ theme }) => theme.device.default} {
    width: 600px;
 
 
  }
  ${({ theme }) => theme.device.desktop} {

    width: 659px;

  } ;
`;


export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.45);
  ${({ theme }) => theme.device.tablet} {
    font-size: 22px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 28px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 32px;
  }
`;

export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  text-shadow: 0px 2px 30px rgba(0, 0, 0, 0.55);
  ${({ theme }) => theme.device.tablet} {
    font-size: 12px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 14px;
    margin-bottom: 70px;
  }
  ${({ theme }) => theme.device.desktop} {

    
  }
`;

export const HeroLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  border: 1px solid #3E3D4A;
  padding: 14px 33px; 
  font-size: 12x;
  line-height: 1.3;
  ${({ theme }) => theme.device.tablet} {
    font-size: 12px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 14px;
 
  }
  ${({ theme }) => theme.device.desktop} {

    
  }
`;
