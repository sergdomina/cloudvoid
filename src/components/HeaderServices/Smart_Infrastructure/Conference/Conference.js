import {
  Section,
  ContainerTwo,
  HiddenTitle,
  SubTitle,
  SubTitle2,
  SubTitleSolo,
  Discription,
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
  BackEvo,
  BackEvoM,
  BackCustom,
  BackCustomDef,
  Len,
  LenTitle,
  LenDis,
  DivEvo,
  DivLen,
  DivHalf,
  DivBecome,
  CentralDiv,
  GlobalBoxTwo,
  LeftLine,
  LeftLinePart,
  CentrLine,
  CentrLinePart,
  LeftHow,
  RightHow,
  LeftAdv,
  RightAdv,
  CentrAdv,
  Products,
  ProductsM,
  LinkCustom,
  Arrow  
} from './Conference.styled';

import { DivSlide, DivSlideB, DivSlideC } from '../../Slide.style';
import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';

import BestEx from 'image/Customer_Section/BestEx.png';
import Gear from 'image/Customer_Section/GearHost.png';
import Lyon from 'image/Customer_Section/Lyon.png';
import Acteno from 'image/Customer_Section/acteno.png';
import Israel from 'image/Customer_Section/Israel_electric_co.png';
import SKD from 'image/Customer_Section/SK.png';

import arrow from 'image/conference/arrow.svg';
import Evo from 'image/conference/Rectangle 177.svg';
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';
import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';
import centrLine from 'image/BGlines/centrLine.svg';
import centrLinePart from 'image/BGlines/centerLinePart.svg';
import leftHow from 'image/BGlines/leftLineHow.svg';
import rightHow from 'image/BGlines/rightLineHow.svg';
import Smart from 'image/Smart_Infrastructure/Product.svg';
import SmartM from 'image/Smart_Infrastructure/ProductMobile.svg';

import Paper from 'image/Smart_Infrastructure/papers.svg';
import Partner from 'image/Smart_Infrastructure/partner_Smart.svg';
import Server from 'image/Smart_Infrastructure/server.svg';
import Clock from 'image/Smart_Infrastructure/clock_Smart.svg';
import House from 'image/Smart_Infrastructure/build.svg';

import MediaQuery from 'components/MediaQuery';
import Accordion from "../../../Accordion/Accordion";





const Conference = () => {

  const accordionItems = [
    {
      title: 'Smart Server Infrastructure',
      number: '01',
      content: 'We help you build, optimize, and manage your entire IT infrastructure so you can focus on your business`s strategic and management aspects. From cloud, hybrid, or on-premise environments, our subject matter experts understand what it takes to derive business value from any type of infrastructure.'
    },
    {
      title: 'Smart Networking',
      number: '02',
      content: 'Our networking & communication solutions span across on-premise network architecture and optimization to fully hosted, cloud-powered collaboration suites for maximum performance, greater bandwidth, and security.'
    },
    {
      title: 'Data Center Services',
      number: '03',
      content: ['Cloudvoid helps you elevate your operation capabilities by providing top-notch hardware and software implementation and management services. Our data center services include the following:',
      <ul style={{listStyle:'inside', paddingTop: '15px', paddingLeft: '5px'}}>
      <li>Data Center Migration</li>
      <li>Data Center Operations</li>
      <li>Workload Migration</li>
      <li>Data Center Security Services</li>
      <li>Data Center Optimization & Consolidation</li>
      <li>Data Center Transformation</li>
    </ul>]
                
    },
    {
      title: 'Infrastructure Security',
      number: '04',
      content:['Secure all your IT assets by integrating compliance and security into every aspect of your environment. We help you protect your business against data breaches to maintain your customers` trust while avoiding the high cost of cyberattacks by implementing:',
      <ul style={{listStyle:'inside', paddingTop: '15px', paddingLeft: '5px'}}>
      <li>Security Operations (SecOps)</li>
      <li>Endpoint Security and Compliance</li>
      <li>Network and Server Security</li>
      <li>Identity and Access Management</li>
    </ul>]
    },
    {
      title: 'Smart VDI and Modern Workplace',
      number: '05',
      content: 'We help you capitalize on the power of digital workplaces for improved employee productivity and increased business value. From user device virtualization and configuration management to implementing and maintaining collaboration and communication platforms, we provide everything required to create a satisfying workplace.'
    },
    {
      title: 'Smart Business Continuity',
      number: '06',
      content: 'Make your business resilient by implementing effective solutions such as site recovery, cold and warm backup, archiving, clustering, and high availability.'
    }
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
                    Overview
                      </SubTitle2>
                    <Discription style={{width:'75%'}}>
                    Today's business landscape requires systems that can evolve rapidly to meet technology requirements. Increased customer expectations demand your services be available 24/7/365, secure, and have omnichannel support.
                    </Discription>
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
                Overview
                </SubTitle2>
                <Discription style={{width:'85%'}}>
                Today's business landscape requires systems that can evolve rapidly to meet technology requirements. Increased customer expectations demand your services be available 24/7/365, secure, and have omnichannel support.
                </Discription>
                </DivEvo>
              </GlobalBox>
            </MediaQuery>
            <GlobalBox>
              <DivBecome>
              <SubTitle></SubTitle>
              <Discription style={{position: 'relative'}}>
              <CentrLine preserveAspectRatio="none" src={centrLine} alt="build" />
              <CentrLinePart preserveAspectRatio="none" src={centrLinePart} alt="build" />
              These expectations are difficult for business owners without access to experienced in-house IT teams or low budgets to fulfill. We help businesses offload IT Infrastructure Operations and Management to teams of seasoned experts on demand.
              </Discription>
              <Discription>
              We act as your partner, guiding you through every step of the process. We are your on-demand team of experienced IT experts taking care of your infrastructure while you focus on your vital business tasks.
              </Discription>
              </DivBecome>
            </GlobalBox>
          </ConferenceItem>


          <MediaQuery device={'desktop'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Smart Infrastructure Capabilities </Title>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>

      </Container>




{/*ACCORDION*/}
          <MediaQuery device={'defaultOnly'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Smart Infrastructure Capabilities </Title>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
{/*ACCORDION*/}
{/*ACCORDION*/}
          <MediaQuery device={'tablet'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Smart Infrastructure Capabilities </Title>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
{/*ACCORDION*/}
{/*ACCORDION*/}
          <MediaQuery device={'mobile'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Smart Infrastructure Capabilities </Title>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
{/*ACCORDION*/}



        <ContainerTwo style={{position:'relative'}}>
          <ConferenceColumn>
            <SubTitleSolo>Smart Infrastructure Benefits</SubTitleSolo>
            <RowBox>
              <CentralDiv>
                <TitleDes style={{position: 'relative'}}>
                <LeftHow preserveAspectRatio="none" src={leftHow} alt="build" /> 
                <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                Instant ROI
                  </TitleDes>
                <DiscriptionWithMargin>
                Eliminate unnecessary hardware equipment purchases, maintenance costs, downtime, and in-house IT personnel compensation. You also spend money on resources your company needs.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <TitleDes style={{position: 'relative'}}>
                <RightHow src={rightHow} alt="build" />
                <LeftHow preserveAspectRatio="none" src={leftHow} alt="build" /> 
                <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                Boost Productivity
                  </TitleDes>
                <DiscriptionWithMargin>
                We take the responsibility of managing your IT infrastructure from your employees' shoulders so they can focus on valuable business tasks.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
            <RowBox>
              <CentralDiv >
              <TitleDes style={{position: 'relative'}}>
              <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
              Business Continuity
                 </TitleDes>
              <DiscriptionWithMargin>
              Be prepared for the worst-case scenario. With over a decade of experience in business continuity planning, we will ensure that your operations are resilient and can quickly recover from unexpected disruptions.
              </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <TitleDes style={{position: 'relative'}}>
              <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
              Scalability
                </TitleDes>
              <DiscriptionWithMargin>
              We will ensure that your infrastructure is flexible enough to meet your goals at every iteration of your business. We have the expertise and industry experience to advise and implement the correct infrastructure changes.
              </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>


{/*Product*/}
              
              <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
                <Title> Smart Infrastructure Products We Support</Title>
                <MediaQuery device={'mobile'}>
                <ProductsM src={SmartM} alt="smart" />
                </MediaQuery>
                <MediaQuery device={'tabletUp'}>
                <Products src={Smart} alt="smart" />
                </MediaQuery>
              </ConferenceItemCenter>
              
{/*Product*/}


          <ConferenceColumn>
            <SubTitleSolo>The Cloudvoid Advantage</SubTitleSolo>
            <RowBox>
              <CentralDiv>
              <LeftAdv src={Paper}  alt="evo"></LeftAdv>
                <DiscriptionWithMargin>
                Our subject matter experts have a wide array of industry certifications from Microsoft, VMWare, The Linux Foundation, Red Hat, Cisco, and other leading business technology providers.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <CentrAdv src={Partner}  alt="evo"></CentrAdv>
                <DiscriptionWithMargin>
                Robust partner ecosystem (Microsoft, Cisco, and RedHat) to ensure no solution is out of bounds.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <RightAdv src={Server}  alt="evo"></RightAdv>
                <DiscriptionWithMargin>
                We have a proven track record of delivering robust, scalable, and secure infrastructures for businesses across many industries.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
            <RowBox>
              <CentralDiv>
              <LeftAdv src={Clock}  alt="evo"></LeftAdv>
                <DiscriptionWithMargin>
                Our experienced and dedicated support teams are available in any timezone, 24/7/365.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <CentrAdv src={House}  alt="evo"></CentrAdv>
                <DiscriptionWithMargin>
                We are infrastructure SMEs, providing unparalleled enterprise experience and expertise.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>



          
{/*PARNERS*/}
<ConferenceItem style={{position: 'relative', zIndex: '1'}}>
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
                <DivSlide >
                  <a className='first' target="_blank" href='https://bestexresearch.com/1' >
                    <Image src={BestEx} style={{margin:'0 auto'}} alt=" "/>
                  </a>
                  <a className='second' target="_blank" href='https://www.gearhost.com/' >
                    <Image src={Gear} style={{margin:'0 auto'}} alt=" "/>
                  </a>
                </DivSlide>
                <DivSlideB>
                <a  className='first' target="_blank" href='https://lyonstahl.com/' >
                  <Image src={Lyon} style={{margin:'0 auto'}} alt=" "/>
                  </a>
                <a  className='second' target="_blank" href='https://www.acteno.de/ecms/de/' >
                  <Image src={Acteno} style={{margin:'0 auto'}} alt=" "/>
                  </a>
                </DivSlideB>

                <DivSlideC>
                <a className='first' target="_blank" href='https://www.iec.co.il/en/home' >
                  <Image src={Israel} style={{margin:'0 auto'}} alt=" "/>
                  </a>
                <a className='second' target="_blank" href='https://www.skdiamonds.com/' >
                  <Image src={SKD} style={{margin:'0 auto'}} alt=" "/>
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
