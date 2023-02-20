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
  DivHalf,
  DivBecome,
  CentralDiv,
  GlobalBoxTwo,
  LeftLine,
  LeftLinePart,
  LeftHow,
  RightHow,
  LinkCustom,
  Arrow  
} from './Conference.styled';

import { DivLen } from 'components/HeaderServices/Slide.style';
import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import GlobalImage from '../../../GlobalImage';
import arrow from 'image/conference/arrow.svg';
import Quad from 'image/Governance/RedQuad.svg';
import Person from 'image/Governance/person.svg';
import Dollar from 'image/Governance/dollar.svg';
import Config from 'image/Governance/config.svg';
import Evo from 'image/conference/Rectangle 177.svg';

import Insfocus from 'image/Customer_Section/insfocus.svg';
import Bestex from 'image/Customer_Section/BestEx.png';
import Doc from 'image/Customer_Section/docStribute.svg';

import Gain from 'image/Governance/gain.svg';
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';
import Lenovo from 'image/conference/lenovo.svg';
import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion, { AccordionHorizontal } from "../../../Accordion/Accordion";




const Conference = () => {

  const accordionItems = [
    {
      title: 'Assess Cloud Environment',
      number: '01',
      content: 'We assess and document the state of your cloud environment, discuss pain points, and organizational vision, and perform an in-depth analysis of the company to understand its operation mechanism.'
    },
    {
      title: 'Define Requirements',
      number: '02',
      content: 'Once we have relevant insights, we align people, technology, and processes to create a theoretical framework for your future cloud. This is the phase where we architect the blueprints and policies to be implemented.'
    },
    {
      title: 'Implement',
      number: '03',
      content: 'This stage involves implementing the suggested framework. We will closely work with all relevant teams and members to bring your organizational vision to fruition.'
    },
    {
      title: 'Measure & Assess',
      number: '04',
      content: 'We monitor and optimize the implemented cloud governance framework to ensure that everyone in your organization is empowered to succeed.'
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
                    The 2022 State Of Cloud Cost Intelligence Report shows that a whopping 70% of companies are unaware of their cloud budget spending.
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
                The 2022 State Of Cloud Cost Intelligence Report shows that a whopping 70% of companies are unaware of their cloud budget spending.
                </SubTitle2>
                </DivEvo>
              </GlobalBox>
            </MediaQuery>
            <GlobalBox>
              <DivBecome>
              <SubTitle>
              Overview
              </SubTitle>
              <Discription style={{position: 'relative'}}>
              Cloud computing remains the most significant driver of highly competitive businesses. Most enterprises have consequently shifted their digital assets to the cloud to control costs and operate efficiently.
              </Discription>
              <Discription>
              But, as more employees and entire departments operate in the cloud, privileged access management, cloud spending transparency, and configuration shifts become challenging. The 2022 State Of Cloud Cost Intelligence Report shows that a whopping 70% of companies are unaware of their cloud budget spending.
              </Discription>
              <Discription>
              Cloud Governance becomes a viable solution to help enterprises mitigate these challenges and regain control of their environments.
              </Discription>
              </DivBecome>
            </GlobalBox> 
          </ConferenceItem>


          <ConferenceItem>
            <GlobalImage>
            <Image src={Gain} style={{}} alt="gain" />
            </GlobalImage>
            <GlobalBox>
              <div style={{display: 'block', margin:'0 auto'}}>
              <SubTitle> 
                Gain Full Visibility Into Your Cloud Environments
              </SubTitle>
              <ul style={{marginLeft: '30px'}}>
                <li>
                  <Discription>
                  <Image src={Quad} style={{position: 'absolute', left: '-30px'}} alt="quad" />
                  Cloudvoid takes a pragmatic approach to ensure that we integrate
                   governance frameworks based on the state of your business. 
                   If you're experiencing unsustainable cloud spending,
                    we start by integrating cost management policies to alleviate this 
                    problem. If you lack operational transparency, we help you create 
                    air-tight compliance and access management policies to mitigate risks.
                  </Discription>
                </li>
                <li>
                  <Discription>
                  <Image src={Quad} style={{position: 'absolute', left: '-30px'}} alt="quad" />
                  We use blueprints, configuration policies, and privileged identity 
                  management to ensure total cloud resource allocation and management 
                  accountability.
                  </Discription>
                </li>
                <li>
                  <Discription>
                  <Image src={Quad} style={{position: 'absolute', left: '-30px'}} alt="quad" />
                  We also make automation the pivot of our governance efforts 
                  because we understand 
                  the dynamic nature of the cloud and the need to be agile in our approach.
                  </Discription>
                </li>
              </ul>
              
              </div>
            </GlobalBox>
          </ConferenceItem>


          <ConferenceColumn>
            <SubTitleSolo>Cloud Governance Services</SubTitleSolo>
            <RowBox>
              <CentralDiv>
              <Image src={Person} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Privileged Identity Management
                  </TitleDes>
                <DiscriptionWithMargin>
                This service enables you to manage, control and monitor access to essential resources by granting Just-In-Time access to privileged users and overseeing what those users do with their access.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Image src={Dollar} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Cost Control Management
                  </TitleDes>
                <DiscriptionWithMargin>
                Cloudvoid enables you to track resource costs, increase accountability by using cloud budgets and cost allocation, and make decisions based on financial insights derived from advanced reporting and monitoring.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <Image src={Config} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Configuration Shift Control
                  </TitleDes>
                <DiscriptionWithMargin>
                Using blueprints, IaC, and compliance policies, we ensure that resources adhere to specific requirements, standards, and desired state configurations.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>



          <MediaQuery device={'tabletUp'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Cloudvoid's Governance Approach </Title>
            <AccordionHorizontal items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
      </Container>




{/*ACCORDION*/}
          <MediaQuery device={'mobile'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Cloudvoid's Governance Approach</Title>
           
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>



          <ContainerTwo style={{position:'relative'}}>

{/*PARNERS*/}
          <ConferenceItem style={{position: 'relative'}}>  
            <MediaQuery device={'tabletUp'}>
              <GlobalBox style={{position: 'relative'}}>
                <DivLen>
                  <a href='https://www.insfocus.com'>
                  <Image src={Insfocus} alt="evo"/>
                  </a>
                </DivLen>
                <DivLen>
                  <a href='https://bestexresearch.com'>
                  <Image src={Bestex} alt="evo"/>
                  </a>
                </DivLen>
                <DivLen>
                  <a href='https://www.docstribute.com'>
                  <Image src={Doc} alt="evo"/>
                  </a>
                </DivLen>
              </GlobalBox>
            </MediaQuery >
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
            <MediaQuery device={'mobile'}>
              <GlobalBox style={{position: 'relative', paddingTop: '100px'}}>
                <DivLen>
                  <a target="_blank" href='https://www.insfocus.com'>
                  <Image src={Insfocus} alt="evo"/>
                  </a>
                </DivLen>
                <DivLen>
                  <a target="_blank" href='https://bestexresearch.com'>
                  <Image src={Bestex} alt="evo"/>
                  </a>
                </DivLen>
                <DivLen>
                  <a target="_blank" href='https://www.docstribute.com'>
                  <Image src={Doc} alt="evo"/>
                  </a>
                </DivLen>
              </GlobalBox>
            </MediaQuery >
          </ConferenceItem>

          </ContainerTwo>
        </ul>
      
    </Section>
  )
};
export default Conference;
