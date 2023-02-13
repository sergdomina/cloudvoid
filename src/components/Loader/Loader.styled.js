import styled from 'styled-components';

export const Title = styled.span`
    display: block;
    font-family: ${({ theme }) => theme.fonts.title.bold};
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    font-size: 106px;
    line-height: 1.3;
    margin: 0 auto;
    margin-top: 30%;
    align-items: center;
    text-align: center;
    color: #CE1700;
`

export const DivLoad= styled.div`
    display: block;
    position: fixed;
    background-color: white;
    height: 100%;
    width: 100%; 
    z-index: 10;
    opacity: 1;
    animation: out 6s;
    @keyframes out{
        0% {
            display: block;
            opacity: 1;
        }
    
        95% {
            display: block;
            opacity: 1;
        }
    
        100% {
            display: none;
            opacity: 1;
        }
    }

    .title{
        position: relative;
        display: block;
        font-family: ${({ theme }) => theme.fonts.title.bold};
        font-size: 106px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.3;
        margin: 0 auto;
        margin-top: 30%;
        align-items: center;
        text-align: center;
        color: #CE1700;
        overflow: hidden;

        
    }
    .title:before{
        content: '';
        position: absolute;
        left: 0%;
        width: 120%;
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, #fff 10%, #fff 100%);
        animation: animate 5s linear forwards;
    }
    @keyframes animate{
        0%{
            left: 25%;
        }
        100%{
            left: 60%;
        }
    }
`