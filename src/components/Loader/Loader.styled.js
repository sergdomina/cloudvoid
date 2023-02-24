import styled from 'styled-components';

export const Title = styled.span`
    display: block;
    font-family: ${({ theme }) => theme.fonts.title.bold};
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
    justify-content: center;
    animation: out 4s;
    

    @keyframes out{
        0% {
            opacity: 1;
        }
    
        80% {
            opacity: 0.7;
        }
    
        100% {
            opacity: 0;
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
        margin-top: 20%;
        align-items: center;
        text-align: center;
        color: #CE1700;
        overflow: hidden;

        
    }
    .title:before{
        content: '';
        position: absolute;
        left: 0;
        width: 120%;
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, #fff 10%, #fff 100%);
        animation: animate 4s linear forwards;
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