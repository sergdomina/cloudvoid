
import styled from 'styled-components';


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


export const DivSlide = styled.div`
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

    .first{
        position: absolute;
        width: 315px;
        height:auto;
        z-index:1;
      opacity: 0;
      animation: 10s slide 5s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height:auto;
        z-index:1;
      opacity: 0;
      animation: slide 10s infinite;
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

  };
`


export const DivSlideB = styled.div`
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
        margin-top: 0px;
      };
  }
    ${({ theme }) => theme.device.default} {

  }
    ${({ theme }) => theme.device.desktop} {

  };
`
export const DivSlideC = styled.div`
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

  };
`


export const DivSlideTree = styled.div`
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

  };
`


export const DivSlideTreeB = styled.div`
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

    .first{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 15s slide 6s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: 15s slide  11s infinite;
    }
    .third{
        position: absolute;
        width: 315px;
        height: auto;
        z-index:1;
      opacity: 0;
      animation: slide 16s infinite;
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
