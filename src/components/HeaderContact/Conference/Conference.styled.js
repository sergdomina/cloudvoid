import styled from 'styled-components';
import BG from '../../../image/Contact/RectangleContact.svg'
import BGM from '../../../image/Contact/RectangleContactM.svg'

export const Section = styled.section`
  padding: 200px 0px 100px;

  ${({ theme }) => theme.device.tablet} {

    padding: 180px 0px 140px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 200px 0px 100px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 230px 0px 100px;
  }
`;


export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 22px;
  line-height: 1.2;
  margin-bottom: 52px;
  margin-left: 10%;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark_grey};
  ${({ theme }) => theme.device.tablet} {
    text-align: center;
    margin-left: 0;

  }
  ${({ theme }) => theme.device.default} {

    font-size: 28px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 28px;

  }
`;


export const DiscriptionCenter = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.dark_grey};
margin-bottom: 24px;
margin-left: 10%;
text-align: left;
width: 311px;

${({ theme }) => theme.device.tablet} {
  margin: 0 auto;
  text-align: center;
  width: 637px;
  font-size: 12px;
  padding-bottom: 50px;
}
${({ theme }) => theme.device.default} {
  
  font-size: 14px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 14px;
  width: 657px;
}
`;

export const Tabl = styled.form`
  padding: 100px 20px;
  height: 770px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-position: top;
  background-image: url(${BGM});
  margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    padding: 0;
    background-image: url(${BG});
    display: flex;
    height: 400px;
    width: 100%;
  }
  ${({ theme }) => theme.device.default} {
    height: 400px;
    width: 800px;
  }
  ${({ theme }) => theme.device.desktop} {
      height: 480px;
      width: 1000px;
  }
`;

export const TabDiv = styled.div`
  label{
    margin-left: 15px;
    margin-bottom: 8px;
  }
  ${({ theme }) => theme.device.tablet} {
    width: 50%;
    padding: 43px 0px 50px 50px;
  }
  ${({ theme }) => theme.device.default} {
    label{
      margin-left: 33px;
      margin-bottom: 8px;
    }
    padding: 53px 0px 70px 80px;
  }
  ${({ theme }) => theme.device.desktop} {
    
    padding: 88px 5px 95px 93px;
  }
`
export const TabDiv2 = styled.div`
  label{
    margin-left: 15px;
    margin-bottom: 8px;
  }
  
  ${({ theme }) => theme.device.tablet} {
    width: 50%;
    padding: 43px 50px 50px 20px;
  }
  ${({ theme }) => theme.device.default} {
    label{
      margin-left: 33px;
      margin-bottom: 8px;
    }
    padding: 53px 60px 80px 20px;
  }
  ${({ theme }) => theme.device.desktop} {
  
    padding: 88px 75px 95px 20px;
  }
`

export const Input = styled.input`
  diaplay: block;
  align-items: center;
  justify-content: space-between;  
  width: 320px;
    height: 47px;
  border: 1px solid #3E3D4A;

    margin-bottom: 18px;

  padding-left: 15px;
  ${({ theme }) => theme.device.tablet} {
    &:not(:last-child){
      margin-bottom: 18px;
    }
    width: 100%;
    height: 47px;
  }
  ${({ theme }) => theme.device.default} {
    padding-left: 33px;
    &:not(:last-child){
      margin-bottom: 18px;
    }
    width: 320px;
    height: 50px;
  }
  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child){
      margin-bottom: 28px;
    }
      width: 400px;
      height: 57px;
  }
`
export const Select = styled.select`
  diaplay: block;
  align-items: center;
  justify-content: space-between;  
  width: 320px;
    height: 47px;
  border: 1px solid #3E3D4A;
    margin-bottom: 18px;
  padding-left: 15px;

  p{
    margin-bottom: 110px;
  }


  ${({ theme }) => theme.device.tablet} {

    width: 100%;
    height: 47px;
  }
  ${({ theme }) => theme.device.default} {
    padding-left: 33px;
    width: 320px;
    height: 50px;
  }
  ${({ theme }) => theme.device.desktop} {
      width: 400px;
      height: 57px;
  }
`



export const Area = styled.textarea`
  diaplay: block;
  align-items: center;
  justify-content: space-between; 

  width: 320px;
    height: 120px;
  border: 1px solid #3E3D4A;
  padding: 10px 10px 10px 15px;
  margin-bottom: 35px;
  ${({ theme }) => theme.device.tablet} {
    
  }
  ${({ theme }) => theme.device.default} {
    padding: 10px 10px 10px 25px;
    width: 320px;
    height: 120px;
    margin-bottom: 35px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 15px 15px 15px 33px;
      margin-bottom: 47px;
    width: 400px;
    height: 178px;
  }
`




export const Button = styled.button`
  width: 215px;
  height: 45px;
  padding: 14px 51px;
  background: #FFFFFF;
border: 1px solid #CE1700;
font-family: ${({ theme }) => theme.fonts.title.bold};
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 1.3;
text-align: center;
color: #CE1700;
  ${({ theme }) => theme.device.tablet} {
    margin-left: 0px;
  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {

    
  }
`


