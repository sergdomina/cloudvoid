import styled from 'styled-components';

export const ImageThumb = styled.div`
width: 343px;
margin: 0 auto;
margin-bottom: 32px;
${({ theme }) => theme.device.tablet} {
width: 290px;
    padding-right: 10px;
    padding-left: 10px;
}
${({ theme }) => theme.device.default} {
width: 416px;
padding-right: 20px;
}
${({ theme }) => theme.device.desktop} {
width: 682px;
padding-right: 30px;
} ;
`

