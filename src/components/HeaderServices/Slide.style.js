
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
      animation: slide1 8s infinite;
    };
    @keyframes slide1{
        0% {
            z-index: -1;
            opacity: 0;
        }
    
        5% {
            z-index: 1;
            opacity: 1;
        }
    
        45% {

            z-index: 1;
            opacity: 1;
        55% {

            z-index: -1;
            opacity: 0;
        }
        100% {

            z-index: -1;
            opacity: 0;
        }
    };


    .second{
        position: absolute;
        width: 315px;
        height: 70px;
        z-index:1;
      opacity: 1;
      animation: slide2 8s infinite;
    }
    @keyframes slide2{
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
    

    
  ${({ theme }) => theme.device.tablet} {
    &:first-child{
      margin-top: 0px;
    }
    &:not(:last-child){
      margin-bottom: 52px; 
    }
  ${({ theme }) => theme.device.default} {
   &:not(:last-child){
    margin-bottom: 82px; 
  }
}
  ${({ theme }) => theme.device.desktop} {
    
};
`
