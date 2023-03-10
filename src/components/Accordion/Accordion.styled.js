import styled from 'styled-components';

export const AccordionItemStyled = styled.li`
  flex: 1;
  display: flex;
  align-items: stretch;
  padding: 20px;
  cursor: pointer;
  transition: all .2s ease;
  border-right: 1px solid black;
  position: relative;
  overflow: hidden;
  &:hover {
    background: darken(#EFEFF0, 3);
  }

  &:first-child{
    border-left: 1px solid black;
  }

  &:before{
    position: absolute;
    content: '';
    width: 10px;
    height: 40%;
    background-color: #CE1700;
    left: 0;
    top: 100%;
    transform: translateY(0%);
    transition: all .2s ease;
  }
  &.active {
    flex: 5;
    cursor: default;

    .accordion__header{
      h2 {
        bottom: 0;
        transform: rotate(-90deg) translateX(-250%)
      }
    }

    .accordion__number{
      left: 100%;
      transform: translateX(0%);
      transition: all .2s ease;
      margin-bottom: 24px;
    }

    .accordion__content {
      flex: 4;
      opacity: 1;
      transform: scaleX(1);
      h2{
        transform: translateX(0%);
      }
    }

    &:before{
      top: 50%;
      transform: translateY(-30%);
    }
  }

  .accordion__header {
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #3E3D4B;
    position: relative;
    
    h2 {

      font-family: ${({ theme }) => theme.fonts.title.bold};
      bottom: 6%;
      margin: 0;
      transform: rotate(-90deg) translateX(0%);
      //white-space: nowrap;
      transition: all .2s ease;
      position: absolute;
      left: 50%;
      transform-origin: left center;
      width: 300px;
      text-align: left;
      margin-bottom: 0px;
      ${({ theme }) => theme.device.tablet} {
       
      }
        ${({ theme }) => theme.device.default} {
          
      }
        ${({ theme }) => theme.device.desktop} {
          
      };
    }
  }

  .accordion__number{
    font-family: ${({ theme }) => theme.fonts.title.bold};
    font-size: 16px;
    top: 10%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all .2s ease;
    ${({ theme }) => theme.device.tablet} {
      font-size: 16px;
    }
      ${({ theme }) => theme.device.default} {
        font-size: 18px;
    }
      ${({ theme }) => theme.device.desktop} {
        font-size: 24px;
    };
  }

  .accordion__content {
    flex: 0;
    display: flex;
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: all .2s .1s ease-out;
    width: 0;
    flex-direction:column;
    align-items: start;
    justify-content: center;
    transform: translateX(-50%);
    position: relative;
    overflow: hidden;

    h2{
      transform: translateX(200%);
      transition: all .2s ease;
    }
  }
  
  @media screen and (max-width: ${({ theme }) => theme.size.default}){
    flex-direction:column;
    border-right: 0;
    border-bottom: 1px solid black;

    &:first-child{
      border-left: 0;
      border-top: 1px solid black;
    }

    &:before{
      display: none;
    }

    &.active {
      flex: 5;
      cursor: default;

      .accordion__header{
        h2 {
          bottom: 0;
          transform: initial;
          color: #CE1700;
        }
      }

      .accordion__number{
        left: unset;
        transform: initial;
        color: #CE1700;
      }

      .accordion__content {
        flex: 4;
        transform: scaleX(1);
        width: 100%;
        max-height: initial;
      }

      &:before{
        top: 0;
        transform: translateY(0%);
      }
    }

    .accordion__header {
      flex: 1;
      position: relative;
      align-items: center;
      justify-content: space-between;
      flex-direction: row-reverse;

      h2 {
        left: unset;
        transform: initial;
        position: relative;
      }
    }

    .accordion__number{
      position: relative;
      transform: initial;
      left: unset;
      top: unset;
    }
    
    .accordion__content{
      max-height: 0;

      width: 100%;
      h2{
        display: none;
      }
    }
  }
`;

export const AccordionStyled = styled.ul`
  display: flex;
  min-height: 100%;
  max-height: 100%;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  height: 600px;
  
  h2{
    font-family: ${({ theme }) => theme.fonts.title.bold};
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 32px;
    ${({ theme }) => theme.device.tablet} {
      font-size: 16px;
    }
      ${({ theme }) => theme.device.default} {
        font-size: 18px;
    }
      ${({ theme }) => theme.device.desktop} {
        font-size: 24px;
    };
  }
  p{
    margin-top: 12px;
    font-size: 12px;
    ${({ theme }) => theme.device.tablet} {
     
    }
      ${({ theme }) => theme.device.default} {
        font-size: 14px;
    }
      ${({ theme }) => theme.device.desktop} {
       
    };
  }
  
  ${AccordionItemStyled} {
    .accordion__content{
      .accordion__number{
        display: none;
      }
    }
  }
  
  @media screen and (max-width: ${({ theme }) => theme.size.default}){
    flex-direction: column;
    height: auto;
  }
`;

export const AccordionHorizontalStyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  height: auto;
  position: relative;
  border-right: 1px solid #3E3D4C;
  width: 85%;
  margin: 0 auto;

  &:after{
    content: '';
    display: block;
    background-color: #E20000;
    width: 6px;
    height: 40%;
    right: 0;
    top: 40%;
    position: absolute;
  }
  
  h2{
    font-family: ${({ theme }) => theme.fonts.title.bold};
    font-size: 16px;
    ${({ theme }) => theme.device.tablet} {
      font-size: 16px;
    }
      ${({ theme }) => theme.device.default} {
        font-size: 18px;
    }
      ${({ theme }) => theme.device.desktop} {
        font-size: 24px;
    };
  }
  

  ${AccordionItemStyled} {
    display: grid;
    grid-template-columns: 40% 60%;
    padding: 0;
    border: none;
    position: initial;

    &:first-child .accordion__header{
      border-top: 1px solid #3E3D4C;
    }
    
    &:before{
      display: none;
    }

    &.active {
      .accordion__header{
        border-right: 1px solid transparent;
        h2{
          color: #E10500;
        }
      }
      
      .accordion__content {
        display: flex;
        opacity: 1;
        max-height: 100%;
        
        h2{
          transform: translateX(0%);
        }
      }
    }

    .accordion__header {
      flex: 1;
      display: flex;
      width: 100%;
      padding: 27px 0;
      color: #3E3D4B;
      position: relative;
      border-bottom: 1px solid #3E3D4C;
      border-right: 1px solid #3E3D4C;
      transition: border-right .2s ease;
      background-color: #EFEFF0;
      z-index: 2;

      h2 {
        position: initial;
        transform: initial;
        width: 100%;
        margin-left: 30px;
      }
      .accordion__number{
        display: none;
      }
    }

    .accordion__number{
      position: initial;
      left: initial;
      top: initial;
    }

    .accordion__content {
      flex-direction:column;
      align-items: start;
      justify-content: flex-start;
      overflow: hidden;
      //display: none;
      max-height: 0;
      position: absolute;
      right: 0;
      top: 0;
      padding: 30px 30px;
      height: 100%;
      width: 60%;
      .accordion__number{
        margin-bottom: 70px;
      }
      h2{
        transform: translateX(200%);
        transition: all .2s ease;
        margin-bottom: 30px;
      }
    }
  }
  
  @media screen and (max-width: ${({ theme }) => theme.size.default}){
    flex-direction: column;
    height: auto;
    border: none;

    &:after{
      display: none;
    }
    
    ${AccordionItemStyled} {
      display: flex;
      flex-direction:column;
      border-right: 0;
      border-bottom: 1px solid black;
      padding: 20px;

      &:first-child{
        border-top: 1px solid black;
      }

      &:before{
        display: none;
      }

      &.active {
        flex: 5;
        cursor: default;

        .accordion__header{
          h2 {
            bottom: 0;
            transform: initial;
            color: #CE1700;
          }
          .accordion__number{
            display: block;
          }
        }

        .accordion__number{
          left: unset;
          transform: initial;
          color: #CE1700;
        }

        .accordion__content {
          flex: 4;
          transform: scaleX(1);
          width: 100%;
          max-height: initial;
          position: initial;
        }

        &:before{
          top: 0;
          transform: translateY(0%);
        }
      }

      .accordion__number{
        position: relative;
        transform: initial;
        left: unset;
        top: unset;
      }
      
      .accordion__header {
        flex: 1;
        position: relative;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        border: none;
        padding: 0;

        &:first-child{
          border: 0;  
        }
        
        h2 {
          left: unset;
          transform: initial;
          position: relative;
          margin-left: 0;
        }
        .accordion__number{
          display: block;
        }
      }

      .accordion__content{
        max-height: 0;
        padding: 0;
        transition: all .2s .1s ease-out;
        transform: translateX(-50%);
        width: 100%;
        display: block;
        
        h2{
          display: none;
          transform: translateX(200%);
          transition: all .2s ease;
        }
        .accordion__number{
          display: none;
        }
      }
      
    }
  }
`;

export const Section = styled.section`

  ${({ theme }) => theme.device.tablet} {

  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
  }
`;

//*dww*//