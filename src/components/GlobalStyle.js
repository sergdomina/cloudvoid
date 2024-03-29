import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    height: 100vh;
    /* padding-bottom: 0px; */
    padding-bottom: ${({ isDownloadPage }) => (isDownloadPage ? 0 : '0px')};
     ${({ theme }) => theme.device.tablet} {
      /* padding-bottom: 0px; */
       padding-bottom: ${({ isDownloadPage }) => (isDownloadPage ? 0 : '0px')};
  }
     ${({ theme }) => theme.device.default} {
      padding-bottom: 0px;
  }
   ${({ theme }) => theme.device.desktop} {
      padding-bottom: 0px;
  }

  }

  #root{
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  main{
    flex: 1 1 auto;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a{
    font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.text};
      text-decoration:none;
      font-size: 14px;
  }

  .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
};

p{
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  ${({ theme }) => theme.device.tablet} {
   
  }
    ${({ theme }) => theme.device.default} {
      font-size: 14px;
  }
    ${({ theme }) => theme.device.desktop} {
     
  };

label{
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  ${({ theme }) => theme.device.tablet} {
   
  }
    ${({ theme }) => theme.device.default} {
      font-size: 14px;
  }
    ${({ theme }) => theme.device.desktop} {
     
  };
`;

