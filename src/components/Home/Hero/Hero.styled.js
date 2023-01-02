import styled from 'styled-components';
import Container from '../../Container';

// import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
  background-color: #F2F3F6;
  ${({ theme }) => theme.device.desktop} {
    height: 693px;
  }
`;
export const HeroImg = styled.img`

`

export const HeroContainer = styled(Container)`

  ${({ theme }) => theme.device.tablet} {
    width: 618px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: row-reverse;
  }
  ${({ theme }) => theme.device.default} {
    width: 806px;
    
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1440px;
  }
`;

export const HeroBox = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 475px;
    text-align: left;
  }
`;
export const GlobalBox = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
    padding-right: 0px;
    padding-left: 0px;
    width: 309px;
    margin: 0 auto;
    
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
    padding-right: 10px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 471px;
    text-align: left;
    left: 92px;
    top:269px;
  } ;


`;


export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.3;
  margin-bottom: 32px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 26px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 30px;
    margin-bottom: 32px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
    margin-bottom: 70px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 14px;
    
  }
`;

export const HeroLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  border: 1px solid #3E3D4A;
  padding: 14px 33px; 
  font-size: 14px;
  line-height: 1.3;
`;
