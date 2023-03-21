import styled from 'styled-components';
import Container from '../../Container';
import HeroMobile from 'image/About/AboutHeroMobile.png'
import HeroTab from 'image/About/AboutHeroTab.png'
import HeroDef from 'image/About/AboutHeroDef.png'
import HeroDes from 'image/About/AboutHero.png'
// import DownloadLink from '../DownloadLink';

export const HeroSection = styled.section`
padding: 125px 0px 0px;
  ${({ theme }) => theme.device.tablet} {
    padding: 100px 0 80px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 120px 0 100px;
    
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 170px 0 120px;
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

export const BgAbout = styled.div`

background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-position: top;
background-image: url(${HeroMobile});

${({ theme }) => theme.device.tablet} {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-position: top;
  background-image: url(${HeroTab});
}
${({ theme }) => theme.device.default} {
  background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-position: top;
background-image: url(${HeroDef});
}
${({ theme }) => theme.device.desktop} {
  background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-position: top;
background-image: url(${HeroDes});
}
`

export const GlobalBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 170px 24px 120px;
  text-align: left;
  background: linear-gradient(0deg, #000000  0%, rgba(0, 0, 0, 0) 100%);
  ${({ theme }) => theme.device.tablet} {
    text-align: center;
    width: 350px;
    margin: 0 auto;
    background: none;
    padding: 40px 0;
  }
  ${({ theme }) => theme.device.default} {
    width: 486px;
    padding: 105px 0;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 659px;
    padding: 100px 0;
  } ;
`;


export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.device.tablet} {
    color: ${({ theme }) => theme.colors.red};
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
  &:not(:last-child){
    margin-bottom: 32px;
  }
  ${({ theme }) => theme.device.tablet} {
    color: ${({ theme }) => theme.colors.dark_grey};
    font-size: 12px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 14px;

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
