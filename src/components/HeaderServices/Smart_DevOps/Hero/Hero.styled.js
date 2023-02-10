import styled from 'styled-components';
import Container from '../../../Container';

// import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
  background-color: #F2F3F6;
  height: 578px;
  ${({ theme }) => theme.device.tablet} {
    height: 424px;
  }
  ${({ theme }) => theme.device.default} {
    height: 498px;
    
  }
  ${({ theme }) => theme.device.desktop} {
    height: 693px;
  }
`;

export const HeroImg = styled.img`

`

export const HeroContainer = styled(Container)`
display: block;
    align-items: center;

  ${({ theme }) => theme.device.tablet} {
    width: 768px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: row-reverse;
  }
  ${({ theme }) => theme.device.default} {
    width: 960px;
    
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
  position: absolute;
  padding-right: 8px;
  padding-left: 8px;
  text-align: left;
  right: 100%;
  left: 9%;
  top: 271px;
  min-width: 300px;
  max-width: 400px;
  ${({ theme }) => theme.device.tablet} {
    padding-right: 0px;
    padding-left: 0px;
    width: 313px;
    margin: 0 auto;
    left: 30px;
    top: 100px;
  }
  ${({ theme }) => theme.device.default} {
    width: 395px;
    text-align: left;
    padding-right: 10px;
    left: 81px;
    top:159px;
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
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 32px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 22px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 28px;
    margin-bottom: 32px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
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
