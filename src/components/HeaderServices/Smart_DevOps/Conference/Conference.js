import {
  Section,
  ContainerTwo,
  HiddenTitle,
  SubTitle,
  SubTitle2,
  SubTitleSolo,
  Discription,
  Products,
  DiscriptionCenter,
  DiscriptionWithMargin,
  ConferenceItem,
  DiscriptionBold,
  Title,
  TitleDes,
  ConferenceItemCenter,
  ConferenceItemSolo,
  ConferenceColumn,
  RowBox,
  RowBoxLogo,
  BackEvo,
  BackEvoM,
  BackCustom,
  BackCustomDef,
  LogoPartners,
  Len,
  LenTitle,
  LenDis,
  DivEvo,
  DivLen,
  DivHalf,
  DivBecome,
  CentralDiv,
  CentralDivLogo,
  GlobalBoxTwo,
  LeftLine,
  LeftLinePart,
  LeftHow,
  RightHow,
  LinkCustom,
  Arrow  
} from './Conference.styled';
import { DivSlide, DivSlideB, DivSlideC } from 'components/HeaderServices/Slide.style';
import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import arrow from 'image/conference/arrow.svg';

//Customer
import Elementor from 'image/Customer_Section/Elementor.png';



import Insfocus from 'image/Smart_DevOps/insfocus.svg';
import Metalink from 'image/Smart_DevOps/metalink.png';
import Amnis from 'image/Smart_DevOps/amnis.png';
import Bestex from 'image/Smart_DevOps/bestex.png';
import Doc from 'image/Smart_DevOps/doc.svg';
import Clock from 'image/Smart_DevOps/clock.svg';
import Partner from 'image/Smart_DevOps/partner.svg';
import Secure from 'image/Smart_DevOps/secure.svg';
import Evo from 'image/conference/Rectangle 177.svg';
import Tools from 'image/Smart_DevOps/DevOpsTools.svg';
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';
import Lenovo from 'image/conference/lenovo.svg';
import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';

import MediaQuery from 'components/MediaQuery';
import Accordion from "../../../Accordion/Accordion";




const Conference = () => {

  const accordionItems = [
    {
      title: 'Pipelines',
      number: '01',
      content: 'We help you develop a DevOps pipeline that can pivot rapidly and with agility for accelerated development and deployment of code. Built upon CI/CD, continuous monitoring, and continuous feedback, our pipelines are custom-made based on organization size, toolsets, and business goals.'
    },
    {
      title: 'Dev Infrastructure Automation',
      number: '02',
      content: 'Automate your development infrastructure for end-to-end efficiency and streamlined release cycles. Using techniques such as infrastructure as Code (IaC), container orchestration, and security automation, we help you provision and manage your infrastructure for improved speed and scalability.'
    },
    {
      title: 'Security Integration (DevSecOps)',
      number: '03',
      content: 'Integrate security into every step of the SDLC instead of doing it at the end. Our DevSecOps approach employs techniques such as Policy-as-Code, Cloud compliance & monitoring, and Infrastructure & container scanning to ensure top-notch security and compliance.'
    },
    {
      title: 'Microservices',
      number: '04',
      content: 'Shift to microservices architecture for accelerated product development, improved agility, flexible scaling, and enhanced resilience. Using containers, APIs, and automation, we integrate microservices into our DevOps approach to offer your enterprise more agility and operational efficiency.'
    },
    {
      title: 'Consulting & Advisory',
      number: '05',
      content: 'Our experienced SMEs become your most trusted partners, advising you on how to navigate your DevOps journey. From the feasibility study and strategy to design & implementation, we help you adopt DevOps for accelerated product development.'
    },
  ];

  return (
    <Section >
      <BackEvoM src={Evo}  alt="evo" />
      

        
        <ul>
        <Container style={{position:'relative'}}>

          <ConferenceItem>
            <MediaQuery device={'mobile'}>
                <GlobalBox>
                    <DivEvo>
                    <SubTitle2 style={{position: 'relative'}}>
                    <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                    <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                    "Through 2022, 75% of DevOps initiatives will fail to meet expectations due to organizational learning and change issues. ".
                      </SubTitle2>
                    </DivEvo>
                  </GlobalBox>
            </MediaQuery>
            <MediaQuery device={'tabletUp'}>
              <GlobalBox>
                <BackEvo src={Evo}  alt="evo"></BackEvo>
                <DivEvo>
                <SubTitle2 style={{position: 'relative'}}>
                <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                "Through 2022, 75% of DevOps initiatives will fail to meet expectations due to organizational learning and change issues. ".
                </SubTitle2>
                </DivEvo>
              </GlobalBox>
            </MediaQuery>
            <GlobalBox>
              <DivBecome>
              <SubTitle>
              Embrace A Culture Of Constant Evolution
              </SubTitle>
              <Discription style={{position: 'relative'}}>
              The ability to rapidly develop new products and services, refine them, and release them continuously is a competitive advantage in the digital world. DevOps enables your business to accelerate product development by bridging development, operations, and security.
              </Discription>
              <Discription>
              While some companies have been successful with their DevOps initiatives, many need help to unlock the value of continuous delivery. Gartner predicts, "Through 2022, 75% of DevOps initiatives will fail to meet expectations due to organizational learning and change issues. ".
              </Discription>
              <Discription>            
                See how our Smart DevOps has been curated to navigate these challenges and help you continuously roll out better business capabilities
              </Discription>
              </DivBecome>
            </GlobalBox> 
          </ConferenceItem>

          <MediaQuery device={'desktop'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Smart DevOps Capabilities</Title>
            <DiscriptionCenter>
            Our End-to-end Smart DevOps services help you adopt exemplary practices, cultural philosophies, and tools required to deliver applications and services at high-speed.
            </DiscriptionCenter>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
      </Container>




{/*ACCORDION*/}
         
          <MediaQuery device={'mobileDefault'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Smart DevOps Capabilities
              
            </Title>
            <DiscriptionCenter>
            Our End-to-end Smart DevOps services help you adopt exemplary practices, cultural philosophies, and tools required to deliver applications and services at high-speed.
            </DiscriptionCenter>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>



    <ContainerTwo style={{position:'relative'}}>        
          <ConferenceColumn>
            <SubTitleSolo>Companies That Entrust Us With Their DevOps</SubTitleSolo>
            <RowBoxLogo>
              <CentralDivLogo>
                <a href='https://www.insfocus.com'>
                  <LogoPartners src={Insfocus} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a href='https://metalink.com'>
                  <LogoPartners src={Metalink} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a href='https://amnistreasury.com'>
                  <LogoPartners src={Amnis} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a href='https://bestexresearch.com'>
                  <LogoPartners src={Bestex} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
              <CentralDivLogo>
                <a href='https://www.docstribute.com'>
                  <LogoPartners src={Doc} style={{}} alt="quad" />
                </a>
              </CentralDivLogo>
            </RowBoxLogo>
          </ConferenceColumn>


          <ConferenceColumn>
            <SubTitleSolo>Smart DevOps Benefits</SubTitleSolo>
            <RowBox>
              <CentralDiv>
              <Image src={Clock} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Faster Time-To-Market
                  </TitleDes>
                <DiscriptionWithMargin>
                Accelerate product development and improve software through high-velocity releases. Gain a competitive advantage by rapidly implementing new features, fixing bugs, and responding to your customer's needs using microservices and continuous delivery.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Image src={Partner} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Improved Collaboration
                  </TitleDes>
                <DiscriptionWithMargin>
                Create your dream team by adopting a DevOps culture of transparency and mutual accountability. Save time and reduce development chaos by empowering development and operations to collaborate, combine workflows, and share some responsibilities.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <Image src={Secure} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Security
                  </TitleDes>
                <DiscriptionWithMargin>
                Elevate your application's security without slowing down development. Leverage tools and techniques such as configuration management, fine-tuned controls, and automated compliance policies (IaC and policy as code) to ensure top-notch security and compliance.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>


          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
                <Title> DevOps Tools, Technologies, and Frameworks</Title>
                <Products src={Tools} alt="smart" />
          </ConferenceItemCenter>

{/*PARNERS*/}
            <ConferenceItem style={{position: 'relative', zIndex: '-1'}}>
            <GlobalBox style={{alignItems: 'center', position: 'relative'}}>
              <DivHalf style={{}}>
              <MediaQuery device={'desktop'}>
              <BackCustom src={Custom} alt="evo"/>
              </MediaQuery>
              <MediaQuery device={'mobile'}>
              <BackCustom src={CustomMobile} alt="evo"/>
              </MediaQuery>
              <MediaQuery device={'tablet'}>
              <BackCustom src={CustomDef} alt="evo"/>
              </MediaQuery>
              <MediaQuery device={'defaultOnly'}>
              <BackCustom src={CustomDef} alt="evo"/>
              </MediaQuery>
              <SubTitle>Customer Success Stories And Case Studies</SubTitle>
              <Discription style={{ width:'auto'}}>
              See how Cloudvoid is helping businesses solve real-world problems in the advent of Industry 4.0.
              </Discription>
              <LinkCustom style={{display: 'flex', alignItem: 'baseline'}} >
                <DiscriptionBold >
                  Read Cases
                </DiscriptionBold>
                <Arrow  src={arrow} alt='arrow'/>
              </LinkCustom>
              </DivHalf>
            </GlobalBox>
            <GlobalBox style={{position: 'relative'}}>
              <DivSlide>
                <a className='first' target="_blank" href='https://elementor.com/'>
                <Image  src={Elementor} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
                <a className='second' target="_blank" href='https://bestexresearch.com'>
                <Image  src={Bestex} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
              </DivSlide>
              <DivSlideB>
                <a className='first' target="_blank" href='https://amnistreasury.com'>
                <Image src={Amnis} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
                <a className='second' target="_blank" href='https://www.docstribute.com'>
                <Image src={Doc} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
              </DivSlideB>
              <DivSlideC>
                <a className='first' target="_blank" href='https://metalink.com'>
                <Image src={Metalink} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
                <a className='second' target="_blank" href='https://www.insfocus.com'>
                <Image src={Insfocus} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
              </DivSlideC>
            </GlobalBox>
          </ConferenceItem>
 
          </ContainerTwo>
        </ul>
      
    </Section>
  )
};
export default Conference;
