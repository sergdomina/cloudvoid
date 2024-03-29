import styled from 'styled-components';

export const Box = styled.div`

  width: auto;
  text-align: left;
  padding-right: 8px;
  padding-left: 8px;
  margin-bottom: 40px;
  
  ${({ theme }) => theme.device.tablet} {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 331px;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 682px;
    text-align: left;
    padding-right: 30px;
  } ;
`;


