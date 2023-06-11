
import styled, {keyframes} from 'styled-components';


export const DivLen = styled.div`
    position: relative;
    width: 315px;
    height: 100px;
    margin: 0 auto;
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 22px; 
    }

    display: flex;
    align-items: center;
    justify-content: center;
    top: 30%;
  ${({ theme }) => theme.device.tablet} {
    &:first-child{
      margin-top: 0px;
    };
    }
  ${({ theme }) => theme.device.default} {
   
  
}
  ${({ theme }) => theme.device.desktop} {
    
};
`

const fadeAnimation = (percentage) => keyframes`
  ${(0 + (percentage / 5)) + '%'} {
    z-index: 1;
    opacity: 1;
  }

  ${(percentage - (percentage / 4)) + '%'}{
  z-index: 1;
  opacity: 1;
  }
    ${(percentage)  + '%'} {
      z-index: -1;
      opacity: 0;
    }

  100% {
    z-index: -1;
    opacity: 0;
  }
`;

export const DivSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 30%;
    position: relative;
    width: 315px;
    margin: 0 auto;
  height: 100px;
  max-height: 100px;
  
  a{
    height: 100%;
  }
  img{
    object-fit: contain;
    height: 60%;
    max-width: 130px;
  }
  
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 22px; 
    }
  
    ${({ theme }) => theme.device.tablet} {
      &:first-child{
        margin-top: 0px;
      };
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {
      img{
        object-fit: contain;
        height: 60%;
        max-width: 200px;
      }
  };
`

export const DivSlideA = styled.a`
    position: absolute;
    width: 315px;
    height: 100%;
    z-index:1;
    opacity: 0;
  animation-iteration-count: infinite;
  animation-name: ${({ percentage }) => fadeAnimation(percentage)};
`

export const DivSlideB = styled.div`
    position: relative;
    width: 315px;
    margin: 0 auto;
      height: 100px;
      max-height: 100px;
  img{
    object-fit: contain;
    height: 60%;
    max-width: 130px;
  }
  a{
    height: 100%;
  }
  .client_logo{
    position: absolute;
    width: 315px;
    height: 100%;
    z-index:1;
    opacity: 0;
  }
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 22px; 
    }
  
    display: flex;
    align-items: center;
    justify-content: center;
    top: 30%;


  
    .first{
        position: absolute;
        width: 315px;
        height:auto;
        z-index:1;
      opacity: 0;
      animation: 10s slide 6s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height:auto;
        z-index:1;
      opacity: 0;
      animation: 10s slide 1s infinite;
    }
  
    @keyframes slide {
      0% {
        z-index: -1;
        opacity: 0;
      }

      5% {
        z-index: -1;
        opacity: 0;
      }

      50% {

        z-index: -1;
        opacity: 0;
      }
      55% {

        z-index: 1;
        opacity: 1;
      }
      100% {

        z-index: 1;
        opacity: 1;

      }
    }
    ${({ theme }) => theme.device.tablet} {
      &:first-child{
        margin-top: 0;
      };
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {
      img{
        object-fit: contain;
        height: 60%;
        max-width: 150px;
      }
  };
`
export const DivSlideC = styled.div`
    position: relative;
    width: 315px;
    margin: 0 auto;
  height: 100px;
  max-height: 100px;
  a{
    height: 100%;
  }
  img{
    object-fit: contain;
    height: 60%;
    max-width: 130px;
  }
  .client_logo{
    position: absolute;
    width: 315px;
    height: 100%;
    z-index:1;
    opacity: 0;
  }
  
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 22px; 
    }
  
    display: flex;
    align-items: center;
    justify-content: center;
    top: 30%;


      
    .first{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 10s slide 7s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height:auto;
        z-index:1;
      opacity: 0;
      animation: 10s slide 2s infinite;
    }
  
    @keyframes slide {
      0% {
        z-index: -1;
        opacity: 0;
      }

      5% {
        z-index: -1;
        opacity: 0;
      }

      50% {

        z-index: -1;
        opacity: 0;
      }
      55% {

        z-index: 1;
        opacity: 1;
      }
      100% {

        z-index: 1;
        opacity: 1;

      }
    }
    ${({ theme }) => theme.device.tablet} {
      &:first-child{
        margin-top: 0px;
      };
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {
      img{
        object-fit: contain;
        height: 60%;
        max-width: 200px;
      }
  };
`


export const DivSlideTree = styled.div`
    position: relative;
    width: 315px;
    margin: 0 auto;
  height: 100px;
  max-height: 100px;
  img{
    object-fit: contain;
    height: 60%;
    max-width: 250px;
  }
  .client_logo{
    position: absolute;
    width: 315px;
    height: 100%;
    z-index:1;
    opacity: 0;
  }
  
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 32px; 
    }
  
    display: flex;

    .first{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 15s slide 5s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 15s slide  10s infinite;
    }
    .third{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: slide 15s infinite;
    }
  
    @keyframes slide {
      0% {
        z-index: -1;
        opacity: 0;
      }

      30% {

        z-index: -1;
        opacity: 0;
      }
      32% {

        z-index: 1;
        opacity: 1;
      }
      60% {

        z-index: 1;
        opacity: 1;
      }
      62% {

        z-index: -1;
        opacity: 0;
      }
      100% {

        z-index: -1;
        opacity: 0;

      }
    }
    ${({ theme }) => theme.device.tablet} {
      &:first-child{
        margin-top: 0px;
      };
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {
      img{
        object-fit: contain;
        height: 60%;
        max-width: 250px;
      }
  };
`


export const DivSlideTreeB = styled.div`
    position: relative;
    width: 315px;
    margin: 0 auto;
  height: 100px;
  max-height: 100px;
  img{
    object-fit: contain;
    height: 60%;
    max-width: 250px;
  }
  .client_logo{
    position: absolute;
    width: 315px;
    height: 100%;
    z-index:1;
    opacity: 0;
  }
  
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 32px; 
    }
  
    display: flex;

    .client_logo{
      position: absolute;
      width: 315px;
      height: auto;
      z-index:1;
      opacity: 0;
    }
  
    .first{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      //animation: 18s slide 0s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      //animation: 18s slide  6s infinite;
    }
  
    .third{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      //animation: 18s slide 12s infinite;
    }
  
    @keyframes slide {
      0% {
        z-index: -1;
        opacity: 0;
      }

      30% {

        z-index: -1;
        opacity: 0;
      }
      32% {

        z-index: 1;
        opacity: 1;
      }
      60% {

        z-index: 1;
        opacity: 1;
      }
      62% {

        z-index: -1;
        opacity: 0;
      }
      100% {

        z-index: -1;
        opacity: 0;

      }
    }
    ${({ theme }) => theme.device.tablet} {
      &:first-child{
        margin-top: 0;
      };
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {

  };
`

export const DivSlideFour = styled.div`
    position: relative;
    width: 315px;
    height: 100px;

    margin: 0 auto;
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 32px; 
    }
  
    display: flex;
    align-items: center;
    .first{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 20s slide 5s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 20s slide  10s infinite;
    }
    .third{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 20s slide 15s infinite;
    }
    .four{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: slide 20s infinite;
    }
  
    @keyframes slide {
      0% {
        z-index: -1;
        opacity: 0;
      }

      24% {

        z-index: -1;
        opacity: 0;
      }
      26% {

        z-index: 1;
        opacity: 1;
      }
      49% {

        z-index: 1;
        opacity: 1;
      }
      51% {

        z-index: -1;
        opacity: 0;
      }
      100% {

        z-index: -1;
        opacity: 0;

      }
    }
    ${({ theme }) => theme.device.tablet} {
      &:first-child{
        margin-top: 0px;
      };
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {

  };
`
