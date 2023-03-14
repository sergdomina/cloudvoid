import {
  Section,
  SubTitle,
  SubTitle2,
  Discription,
  DiscriptionCenter,
  DiscriptionWithMargin,
  ConferenceItem,
  Title,
  ConferenceItemCenter,
  ConferenceColumn,
  RowBox,
  RowBoxLogo,
  RowBoxCarusel,
  BackEvo,
  LogoPartners,
  DivBecome,
  CentralDiv,
  CentralDivLogo,
  Adv,
  CentralDivCarusel,
  CentralDivCaruselMin,
  DivSplineLogo
} from './Conference.styled';

import { Image} from '@chakra-ui/react';
import Container from '../../Container';
import GlobalBox from '../../GlobalBox';
import Evo from 'image/conference/Rectangle 177.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion from "../../Accordion/Accordion";

import Acteno from 'image/Customer_Section/ActenoCarusel.png';
import Amnis from 'image/Customer_Section/AmnisCarusel.png';
import Ingram from 'image/Customer_Section/IngramCarusel.png';
import Lenovo from 'image/Customer_Section//LenovoCarusel.png';
import Insfocus from 'image/Customer_Section/insfocus.svg';
import TelAviv from 'image/Customer_Section/TelavivCarusel.png';
import Metalink from 'image/Customer_Section/MetalinkCarusel.png';
import Israel from 'image/Customer_Section/IsraelCarusel.png';
import Bavelle from 'image/Customer_Section/BavelleCarusel.png';
import Ryther from 'image/Customer_Section/RytherCarusel.png';


import Google from 'image/Solutions_Architecture/google.png';
import Aws from 'image/Solutions_Architecture/AWS.png';
import Azure1 from 'image/Solutions_Architecture/Azure.png';
import Azure2 from 'image/Solutions_Architecture/Microsoft.png';
import IBM from 'image/Solutions_Architecture/IBM.png';
import MCSE from 'image/Solutions_Architecture/MCSE.png';

import Paper from 'image/Smart_Infrastructure/papers.svg';
import Partner from 'image/Smart_Infrastructure/partner_Smart.svg';
import Server from 'image/Smart_Infrastructure/server.svg';
import Build from 'image/Smart_Infrastructure/build.svg';
import Cloud from 'image/Solutions_Architecture/cloud_red.svg';

import Microsoft from 'image/Home/Microsoft.png';
import AWS from 'image/Home/AWS.png';
import GoogleCloud from 'image/Home/google-cloud.png';
import IBMlogo from 'image/Home/IBM.png';
import RedHat from 'image/Home/RedHat.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { CLASS_ARROWS } from '@splidejs/splide';
import Spline from '@splinetool/react-spline';
import styled from './Cofrence.css';

const splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 3,
  autoScroll: {
    speed: -1,
  },
} );


const Conference = () => {

  const accordionItems = [
    {
      title: 'Cloud Evolve',
      number: '01',
      content: 'Derive unparalleled value with a full-cycle cloud solution, from IaaS, PaaS, and SaaS to security.'
    },
    {
      title: 'Cloud AI & Analytics',
      number: '02',
      content: 'Harness your competitive edge with next-gen AI and business intelligence solutions. '
    },
    {
      title: 'Smart DevOps',
      number: '03',
      content: 'Accelerate app development with continuous integration and delivery.'
    },
    {
      title: 'Cloud Solutions Architecture',
      number: '04',
      content: 'Elevate app development and infrastructure performance with cloud-native architectures.'
    },
    {
      title: 'Cloud Migration',
      number: '05',
      content: 'Move your infrastructure, apps, and digital assets to the cloud. '
    },
    {
      title: 'Cloud Governance',
      number: '06',
      content: 'Take back complete control of your cloud spending.'
    },
    {
      title: 'Smart Infrastructure',
      number: '07',
      content: 'Focus on what makes your business matter; We take care of your entire IT infrastructure.'
    },
    {
      title: 'Master MSP',
      number: '08',
      content: 'We are your Subject Matter Experts on-demand.'
    }
  ];

  return (
    <Section >
      <>
      <Container style={{position:'relative'}}>
        <ul>
         <MediaQuery device={'mobile'}>
            <ConferenceItem>
              <Splide
                  options={{
                    rewind: true,
                    width : "100%",
                    gap   : '1rem',
                    type   : 'loop',
                    drag   : 'free',
                    focus  : 'center',
                    perPage: 3,
                    pagination: false,
                    arrows: false,
                    // autoplay: true,
                    autoScroll:{
                      rewind: false,
                      pauseOnHover: false,
                      pauseOnFocus: false,
                      speed: 2,
                    }
                  }}
                  extensions={{ AutoScroll }}
         
              >
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.acteno.de/ecms/de/' target="_blank">
                      <LogoPartners src={Acteno} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://amnistreasury.com'>
                      <LogoPartners src={Amnis} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://corp.ingrammicro.com/' target="_blank">
                      <LogoPartners src={Ingram} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.lenovo.com' target="_blank">
                      <LogoPartners src={Lenovo} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.insfocus.com' target="_blank">
                      <LogoPartners src={Insfocus} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://english.tau.ac.il/' target="_blank">
                      <LogoPartners src={TelAviv} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCaruselMin>
                    <a href='https://metalink.com' target="_blank">
                      <LogoPartners src={Metalink} style={{}} alt="quad" />
                    </a>
                  </CentralDivCaruselMin>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCaruselMin>
                    <a href='https://www.iec.co.il/en/home' target="_blank">
                      <LogoPartners src={Israel} style={{}} alt="quad" />
                    </a>
                  </CentralDivCaruselMin>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.bavelle.com/' target="_blank">
                      <LogoPartners src={Bavelle} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.ryther.org/' target="_blank">
                      <LogoPartners src={Ryther} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
              </Splide>
          </ConferenceItem>
         </MediaQuery >
         <MediaQuery device={'tablet'}>
            <ConferenceItem>
              <Splide
                  options={{
                    rewind: true,
                    width : "100%",
                    gap   : '3rem',
                    type   : 'loop',
                    drag   : 'free',
                    focus  : 'center',
                    perPage: 4,
                    pagination: false,
                    arrows: false,
                    // autoplay: true,
                    autoScroll:{
                      rewind: false,
                      pauseOnHover: false,
                      pauseOnFocus: false,
                      speed: 2,
                    }
                  }}
                  extensions={{ AutoScroll }}
         
              >
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.acteno.de/ecms/de/' target="_blank">
                      <LogoPartners src={Acteno} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://amnistreasury.com'>
                      <LogoPartners src={Amnis} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://corp.ingrammicro.com/' target="_blank">
                      <LogoPartners src={Ingram} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.lenovo.com' target="_blank">
                      <LogoPartners src={Lenovo} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.insfocus.com' target="_blank">
                      <LogoPartners src={Insfocus} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://english.tau.ac.il/' target="_blank">
                      <LogoPartners src={TelAviv} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCaruselMin>
                    <a href='https://metalink.com' target="_blank">
                      <LogoPartners src={Metalink} style={{}} alt="quad" />
                    </a>
                  </CentralDivCaruselMin>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCaruselMin>
                    <a href='https://www.iec.co.il/en/home' target="_blank">
                      <LogoPartners src={Israel} style={{}} alt="quad" />
                    </a>
                  </CentralDivCaruselMin>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.bavelle.com/' target="_blank">
                      <LogoPartners src={Bavelle} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.ryther.org/' target="_blank">
                      <LogoPartners src={Ryther} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
              </Splide>
          </ConferenceItem>
         </MediaQuery >
         <MediaQuery device={'default'}>
            <ConferenceItem>
              <Splide
                  options={{
                    rewind: true,
                    width : "100%",
                    gap   : '3rem',
                    type   : 'loop',
                    drag   : 'free',
                    focus  : 'center',
                    perPage: 6,
                    pagination: false,
                    arrows: false,
                    // autoplay: true,
                    autoScroll:{
                      rewind: false,
                      pauseOnHover: false,
                      pauseOnFocus: false,
                      speed: 2,
                    }
                  }}
                  extensions={{ AutoScroll }}
         
              >
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.acteno.de/ecms/de/' target="_blank">
                      <LogoPartners src={Acteno} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://amnistreasury.com'>
                      <LogoPartners src={Amnis} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://corp.ingrammicro.com/' target="_blank">
                      <LogoPartners src={Ingram} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.lenovo.com' target="_blank">
                      <LogoPartners src={Lenovo} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.insfocus.com' target="_blank">
                      <LogoPartners src={Insfocus} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://english.tau.ac.il/' target="_blank">
                      <LogoPartners src={TelAviv} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCaruselMin>
                    <a href='https://metalink.com' target="_blank">
                      <LogoPartners src={Metalink} style={{}} alt="quad" />
                    </a>
                  </CentralDivCaruselMin>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCaruselMin>
                    <a href='https://www.iec.co.il/en/home' target="_blank">
                      <LogoPartners src={Israel} style={{}} alt="quad" />
                    </a>
                  </CentralDivCaruselMin>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.bavelle.com/' target="_blank">
                      <LogoPartners src={Bavelle} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
                <SplideSlide  style={{display:'flex', alignItems:'center', justifyContent: 'center'}}   >
                  <CentralDivCarusel>
                    <a href='https://www.ryther.org/' target="_blank">
                      <LogoPartners src={Ryther} style={{}} alt="quad" />
                    </a>
                  </CentralDivCarusel>
                </SplideSlide>
              </Splide>
          </ConferenceItem>
         </MediaQuery >
          
        <ConferenceItem style={{position: 'relative'}}>
            <GlobalBox>
                <DivBecome>
                <SubTitle2>We Are Cloudvoid</SubTitle2>
                <Discription style={{position: 'relative'}}>
                Cloudvoid is people. We are experts, a team of thinkers and doers with smarter and quicker enterprise-level experience, bringing solutions to your business on a whole new level.
                </Discription>
                <Discription>
                We are masters of our domain, we like to think out of the norm, and we love to approach every challenge in a whole new way that's right for your business.
                </Discription>
                </DivBecome>
              </GlobalBox>
            <GlobalBox>
                     <DivSplineLogo style={{ position: "relative" }}>
                       {/* <BackEvo src={Evo}  alt="evo" /> */}
                        <Spline className='logo' scene="https://prod.spline.design/YuNIqE4yFTnct5LI/scene.splinecode" />
                        </DivSplineLogo>
            </GlobalBox>
        </ConferenceItem>


          <MediaQuery device={'desktop'}>
            <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
              <Title> IT Solutions To Re-Invent Your Future, Today. </Title>
              <DiscriptionCenter>
                Whether you are just starting your cloud journey or already have a mature IT environment, Cloud Evolve guides you on increasing your ROI and getting faster business results.
              </DiscriptionCenter>
              {/*ACCORDION*/}
              <Accordion items={accordionItems} />
            </ConferenceItemCenter>
          </MediaQuery >
        </ul>
      </Container>


      {/*ACCORDION*/}
      <MediaQuery device={'mobileDefault'}>
        <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
          <Title> IT Solutions To Re-Invent Your Future, Today.</Title>
          <DiscriptionCenter>
          Whether you already have a mature IT ecosystem or are getting started on your cloud journey, our unique portfolio of technology solutions empowers you to achieve what makes your business matter.
          </DiscriptionCenter>
          <Accordion items={accordionItems} />
        </ConferenceItemCenter>
      </MediaQuery >
      {/*ACCORDION*/}
      <Container style={{position:'relative'}}>
          <ul>

          <ConferenceColumn>
            <SubTitle style={{ }}>
            Unmatched Industrial Experience
              </SubTitle>
            <RowBox>
              <CentralDiv>
              <Adv src={Cloud}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                With over 15 years of experience, our team has deep domain expertise in cloud-led transformation.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Adv src={Build}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                Worked with clients in many verticals, including finance, critical infrastructure, manufacturing, and telecom.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>

          <ConferenceColumn>
            <SubTitle style={{ }}>
            The Cloudvoid Advantage
            </SubTitle>
            <RowBox>
              <CentralDiv>
              <Adv src={Paper}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                We have a history of successfully delivering projects to our clients, with over 600 successful projects under our belt.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Adv src={Partner}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                Our solution portfolio is like no other in the market, covering all stages of digital transformation.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Adv src={Server}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                We prioritize security and quality in everything we do.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>

          <ConferenceColumn>
            <SubTitle>We Are Certified</SubTitle>
            <RowBoxLogo>
              <CentralDivLogo>
                <a >
                  <LogoPartners src={Google} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a>
                  <LogoPartners src={Aws} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a  >
                  <LogoPartners src={Azure1} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a>
                  <LogoPartners src={Azure2} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a >
                  <LogoPartners src={IBM} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a >
                  <LogoPartners src={MCSE} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
            </RowBoxLogo>
          </ConferenceColumn>

          <ConferenceColumn>
            <SubTitle>
            Featured Technology Partners
           </SubTitle>
            <RowBoxLogo>
              <CentralDivLogo>
                <a >
                  <LogoPartners src={Microsoft} style={{}} alt="Microsoft" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a href='metalink'>
                  <LogoPartners src={AWS} style={{}} alt="AWS" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a >
                  <LogoPartners src={GoogleCloud} style={{}} alt="GoogleCloud" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a >
                  <LogoPartners src={IBMlogo} style={{}} alt="IBMlogo" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a >
                  <LogoPartners src={RedHat} style={{}} alt="RedHat" />
                </a>
              </CentralDivLogo>
            </RowBoxLogo>
          </ConferenceColumn>





        </ul>
      </Container>
      </>
</Section>
  )};

  
  export default Conference;
