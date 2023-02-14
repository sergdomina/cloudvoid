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
        Sink
} from './Footer.styled'
import Logo from '../../image/Cloudvoid_LO_FF-03.svg';
import lineLeft from '../../image/BGlines/footerLeft.svg';
import mail from '../../image/Footer/mail.svg';
import location from '../../image/Footer/location.svg';
import linkedin from '../../image/Footer/linkedin.svg';
import { Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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
                                    <Sink style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            <Image src={mail} />
                                        </div>
                                        <p>info@cloudvoid.com</p>
                                    </Sink>
                                </Items>
                                <Items>
                                    <Sink style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            <Image src={location} />
                                        </div>
                                        <p>165 Broadway, New York, NY 10006, USA</p>
                                    </Sink>
                                </Items>
                                <Items>
                                    <Sink style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            <Image src={linkedin} />
                                        </div>
                                        <p>Contact us LinkedIn</p>
                                    </Sink>
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
                                    <Sink>Home</Sink>
                                </Items>
                                <Items>
                                    <Sink>About</Sink>
                                </Items>
                                <Items>
                                    <Sink>Contact</Sink>
                                </Items>
                            </ItemsUl>
                        </MainDiv>
                        <MainDiv>
                        <ItemsUl>
                                <Items>
                                    <TitleDes>Services</TitleDes>
                                </Items>
                                <Items>
                                    <Sink href='/cloud-evolve' >Cloud Evolve</Sink>
                                </Items>
                                <Items>
                                    <Sink>Cloud Governance</Sink>
                                </Items>
                                <Items>
                                    <Sink>Cloud Migration</Sink>
                                </Items>
                                <Items>
                                    <Sink>Cloud Solutions <br/> Architecture</Sink>
                                </Items>
                            </ItemsUl>
                        </MainDiv>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <Sink>Cloud Al & Analytics</Sink>
                                </Items>
                                <Items>
                                    <Sink>Smart DevOps</Sink>
                                </Items>
                                <Items>
                                    <Sink>Smart Infrastructure</Sink>
                                </Items>
                                <Items>
                                    <Sink>Master MSP</Sink>
                                </Items>
                            </ItemsUl>
                        </CloudDiv>
                        </MediaQuery>
                        <MediaQuery device={'tablet'}>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <Sink>Cookie Policy</Sink>
                                </Items>
                                <Items>
                                    <Sink>Terms Of Service</Sink>
                                </Items>
                                <Items>
                                    <Sink>Privacy Policy</Sink>
                                </Items>
                            </ItemsUl>
                        </CloudDiv>
                        </MediaQuery>
                        <MediaQuery device={'mobile'}>
                        <CloudDiv> 
                            <ItemsUl>
                                <Items>
                                    <Sink style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            
                                        </div>
                                        <p>Cookie Policy</p>
                                    </Sink>
                                </Items>
                                <Items>
                                    <Sink style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            
                                        </div>
                                        <p>Terms Of Service</p>
                                    </Sink>
                                </Items>
                                <Items>
                                    <Sink style={{display: 'flex', alignItems: 'center'}}>
                                        <div style={{width: '17px', marginRight: '13px'}}>
                                            
                                        </div>
                                        <p>Privacy Policy</p>
                                    </Sink>
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
                                    <Sink>Terms Of Service</Sink>
                                </Terms>
                                <Terms>
                                    <Sink>Privacy Policy </Sink>
                                </Terms>
                            </ul>
                        </div>
                        </MediaQuery>
                        <MediaQuery device={'default'}>
                        <div>
                            <ul style={{display:'flex'}}>
                                <Terms>Cookie Policy</Terms>
                                <Terms>
                                    <Sink>Terms Of Service</Sink>
                                </Terms>
                                <Terms>
                                    <Sink>Privacy Policy </Sink>
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

