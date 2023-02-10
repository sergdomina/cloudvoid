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

} from './Footer.styled'
import Logo from '../../image/Cloudvoid_LO_FF-03.svg';
import lineLeft from '../../image/BGlines/footerLeft.svg';
import mail from '../../image/Footer/mail.svg';
import location from '../../image/Footer/location.svg';
import linkedin from '../../image/Footer/linkedin.svg';
import { Image } from 'semantic-ui-react';

const Footer =() =>{
    return(
        <Section>
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
                                    <a style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            <Image src={mail} />
                                        </div>
                                        <p>info@cloudvoid.com</p>
                                    </a>
                                </Items>
                                <Items>
                                    <a style={{display: 'flex', alignItems: 'center'}}>
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
                                    <a>Home</a>
                                </Items>
                                <Items>
                                    <a>About</a>
                                </Items>
                                <Items>
                                    <a>Contact</a>
                                </Items>
                            </ItemsUl>
                        </MainDiv>
                        <MainDiv>
                        <ItemsUl>
                                <Items>
                                    <TitleDes>Services</TitleDes>
                                </Items>
                                <Items>
                                    <a>Cloud Evolve</a>
                                </Items>
                                <Items>
                                    <a>Cloud Governance</a>
                                </Items>
                                <Items>
                                    <a>Cloud Migration</a>
                                </Items>
                                <Items>
                                    <a>Cloud Solutions <br/> Architecture</a>
                                </Items>
                            </ItemsUl>
                        </MainDiv>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <a>Cloud Al & Analytics</a>
                                </Items>
                                <Items>
                                    <a>Smart DevOps</a>
                                </Items>
                                <Items>
                                    <a>Smart Infrastructure</a>
                                </Items>
                                <Items>
                                    <a>Master MSP</a>
                                </Items>
                            </ItemsUl>
                        </CloudDiv>
                        </MediaQuery>
                        <MediaQuery device={'tablet'}>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <a>Cookie Policy</a>
                                </Items>
                                <Items>
                                    <a>Terms Of Service</a>
                                </Items>
                                <Items>
                                    <a>Privacy Policy</a>
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
                        ©Cloudvoid 2023 All rights reserved
                        </div>
                        <MediaQuery device={'tablet'}>
                        <div>
                            <ul style={{display:'flex'}}>
                                <Terms>Cookie Policy</Terms>
                                <Terms>
                                    <a>Terms Of Service</a>
                                </Terms>
                                <Terms>
                                    <a>Privacy Policy </a>
                                </Terms>
                            </ul>
                        </div>
                        </MediaQuery>
                        <MediaQuery device={'default'}>
                        <div>
                            <ul style={{display:'flex'}}>
                                <Terms>Cookie Policy</Terms>
                                <Terms>
                                    <a>Terms Of Service</a>
                                </Terms>
                                <Terms>
                                    <a>Privacy Policy </a>
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

