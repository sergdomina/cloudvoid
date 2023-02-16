
import styled from 'styled-components';

export const DivSlide = styled.div`
    position: relative;
    width: 315px;
    height: 70px;
    margin: 0 auto;
    &:first-child{
      margin-top:130px;
    };
    &:not(:last-child){
      margin-bottom: 52px; 
    }
  
    display: flex;

    .first{
        position: absolute;
        width: 315px;
        height: 70px;
        z-index:1;
      opacity: 1;
      animation: 8s slide 4s infinite;
    };

    .second{
        position: absolute;
        width: 315px;
        height: 70px;
        z-index:1;
      opacity: 1;
      animation: slide 8s infinite;
    }
  
    @keyframes slide {
      0% {
        z-index: 1;
        opacity: 1;
      }

      5% {
        z-index: -1;
        opacity: 0;
      }

      55% {

        z-index: -1;
        opacity: 0;
      }
      100% {

        z-index: 1;
        opacity: 1;

      }
    }
`
