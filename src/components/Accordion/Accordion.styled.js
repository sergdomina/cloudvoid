import styled from 'styled-components';



export const AccordionStyled = styled.ul`
  display: flex;
  min-height: 100%;
  max-height: 100%;
  width: 80%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  height: 700px;
  
  h2{
    font-weight: 700;
    font-size: 24px;
  }
  
  @media screen and (max-width: ${({ theme }) => theme.size.default}){
    flex-direction: column;
    height: auto;
  }
`;

export const AccordionItemStyled = styled.li`
  flex: 1;
  display: flex;
  align-items: stretch;
  padding: 20px;
  cursor: pointer;
  transition: all .5s ease;
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
    transition: all .5s ease;
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
      transition: all .5s ease;
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
      bottom: 6%;
      margin: 0;
      transform: rotate(-90deg) translateX(0%);
      //white-space: nowrap;
      transition: all .5s ease;
      position: absolute;
      left: 50%;
      transform-origin: left center;
      width: 300px;
      text-align: left;
    }
  }

  .accordion__number{
    font-family: ${({ theme }) => theme.fonts.title.bold};
    font-size: 16px;
    top: 10%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all .5s ease;
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
    transition: all .5s .1s ease-out;
    width: 0;
    flex-direction:column;
    align-items: start;
    justify-content: center;
    transform: translateX(-50%);
    position: relative;
    overflow: hidden;

    h2{
      transform: translateX(200%);
      transition: all .7s ease;
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




//*dww*//