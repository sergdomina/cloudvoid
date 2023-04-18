import MediaQuery from 'components/MediaQuery';
import Container from 'components/Container';
import {Section,
        LogoImg,
        DivItem,
        DivOne,
        DivTwo,
        Items,
        ItemsUl, 
        MainDiv,
        InfoDiv,
        TitleDes,
        CloudDiv,
        Terms,
        FooterLineLeft,
        FooterLineRight,
        Sink,
        StyledLink
} from './Footer.styled'
import Logo from '../../image/Cloudvoid_LO_FF-03.svg';
import lineLeft from '../../image/BGlines/footerLeft.svg';
import mail from '../../image/Footer/mail.svg';
import location from '../../image/Footer/location.svg';
import linkedin from '../../image/Footer/linkedin.svg';
import { Image } from 'semantic-ui-react';



const Footer =() =>{
    return(
        <Section >
            <DivOne style={{backgroundColor:'#EFEFF0'}}>
                <Container style={{position:'relative'}}>
                    <MediaQuery device={'default'}>
                        <FooterLineLeft src={lineLeft} alt="build" />
                        <FooterLineRight src={lineLeft} alt="build" />
                    </MediaQuery>
                   <DivItem >
                            
                        <InfoDiv>
                            <ItemsUl>
                                <Items>
                                    <LogoImg src={Logo} alt={'Logo'} />
                                </Items>
                                <Items >
                                    <a  style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            <Image src={mail} />
                                        </div>
                                        <p>info@cloudvoid.com</p>
                                    </a>
                                </Items>
                                <Items>
                                    <a  style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            <Image src={location} />
                                        </div>
                                        <p>165 Broadway, New York, NY 10006, USA</p>
                                    </a>
                                </Items>
                                <Items>
                                    <a style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            <Image src={linkedin} />
                                        </div>
                                        <p>Contact us LinkedIn</p>
                                    </a>
                                </Items>
                            </ItemsUl>
                        </InfoDiv>
                        <MediaQuery device={'default'}>
                        <MainDiv>
                        <ItemsUl>
                                <Items>
                                    <TitleDes>Main</TitleDes>
                                </Items>
                                <Items>
                                    <StyledLink to='/cloud-evolve'>Home</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/about'>About</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/contact'>Contact</StyledLink>
                                </Items>
                            </ItemsUl>
                        </MainDiv>
                        <MainDiv>
                        <ItemsUl>
                                <Items>
                                    <TitleDes>Services</TitleDes>
                                </Items>
                                <Items>
                                    <StyledLink to='/cloud-evolve'>Cloud Evolve</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/cloud-governance'>Cloud Governance</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/cloud-governance'>Cloud Migration</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/cloud-solutions-architecture'>Cloud Solutions <br/> Architecture</StyledLink>
                                </Items>
                            </ItemsUl>
                        </MainDiv>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <StyledLink to='/cloud-ai-and-analytics'>Cloud AI & Analytics</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/smart-devops'>Smart DevOps</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/smart-infractructure'>Smart Infrastructure</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/master-msp'>Master MSP</StyledLink>
                                </Items>
                    
                            </ItemsUl>
                        </CloudDiv>
                        </MediaQuery>
                        <MediaQuery device={'tablet'}>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <StyledLink to='/'>Cookie Policy</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/'>Terms Of Service</StyledLink>
                                </Items>
                                <Items>
                                    <StyledLink to='/'>Privacy Policy</StyledLink>
                                </Items>
                            </ItemsUl>
                        </CloudDiv>
                        </MediaQuery>
                        <MediaQuery device={'mobile'}>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <a style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            
                                        </div>
                                        <p>Cookie Policy</p>
                                    </a>
                                </Items>
                                <Items>
                                    <a style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            
                                        </div>
                                        <p>Terms Of Service</p>
                                    </a>
                                </Items>
                                <Items>
                                    <a style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            
                                        </div>
                                        <p>Privacy Policy</p>
                                    </a>
                                </Items>
                            </ItemsUl>
                        </CloudDiv>
                        </MediaQuery>
                    </DivItem>    
                </Container>
            </DivOne>
            <DivTwo style={{backgroundColor:'#D6D7DB'}}>
                <Container>
                    <div style={{display:'flex',
                                justifyContent: 'space-between',
                                padding: '24px 0'
                                }}>
                        <div>
                        <p>©Cloudvoid 2023 All rights reserved</p>
                        </div>
                        <MediaQuery device={'tablet'}>
                        <div>
                            <ul style={{display:'flex'}}>
                                <Terms>
                                    <p>Cookie Policy</p>
                                    </Terms>
                                <Terms>
                                    <a><p>Terms Of Service</p></a>
                                </Terms>
                                <Terms>
                                    <a><p>Privacy Policy </p></a>
                                </Terms>
                            </ul>
                        </div>
                        </MediaQuery>
                        <MediaQuery device={'default'}>
                        <div>
                            <ul style={{display:'flex'}}>
                                <Terms>
                                    <a><p>Cookie Policy</p></a>
                                    </Terms>
                                <Terms>
                                    <a><p>Terms Of Service</p></a>
                                </Terms>
                                <Terms>
                                    <a><p>Privacy Policy</p></a>
                                </Terms>
                            </ul>
                        </div>
                        </MediaQuery>
                      
                     </div>   
                </Container>
            </DivTwo>
        </Section>
    )
};


export default Footer;

