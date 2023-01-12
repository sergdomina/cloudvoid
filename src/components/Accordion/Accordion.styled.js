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
  height: 500px;
  
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
        bottom: 0%;
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
    font-size: 32px;
    top: 10%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all .5s ease;
  }

  .accordion__content {
    flex: 0;
    display: flex;
    margin: 0;
    padding: 0;
    opacity: 0;
    transition: all .5s .1s ease-out;
    width: 0px;
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
          bottom: 0%;
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
        top: 0%;
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
      max-height: 0px;

      width: 100%;
      h2{
        display: none;
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


export const DivAcord = styled.div`
margin: 0 auto;
width: auto;
${({ theme }) => theme.device.tablet} {
  width: 508px;
}
${({ theme }) => theme.device.default} {

}
${({ theme }) => theme.device.desktop} {
  
}
`;


export const Questions = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 14px;
  line-height: 1.35;
  text-align: left;
  padding-top: 16px;
  padding-bottom: 16px;
  /* margin-bottom: 16px; */
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 30px;
    font-size: 16px;
    /* &:hover {
      padding-bottom: 2px;
    } */
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 22px;
  }
`;


export const Answer = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 27px;
  text-align: left;
  color: ${({ theme }) => theme.colors.placeholder};
  ${({ theme }) => theme.device.tablet} {
    font-size: 12px;
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 2px;
    padding-bottom: 12px;
    padding-left: 10px;
    font-size: 14px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 14px;
  }
`;


export const PartnersDiv = styled.div`
  padding-top: 20px;
  width: 333px;
  ${({ theme }) => theme.device.tablet} {
    width: 700px;
    margin-left: 20px;
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
export const PartnersUl = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.device.tablet} {
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
export const PartnersLi = styled.li`
  padding: 0;
  margin-bottom: 24px;
  margin-right: 12px;
  
  transform: scale(80%);
  ${({ theme }) => theme.device.tablet} {
    transform: scale(100%);
    margin-bottom: 32px;
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  ${({ theme }) => theme.device.default} {
  }
  ${({ theme }) => theme.device.desktop} {
  }
`;
