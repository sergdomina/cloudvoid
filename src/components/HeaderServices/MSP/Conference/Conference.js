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
  CentrLine,
  CentrLinePart,
  LeftHow,
  RightHow,
  LinkCustom,
  Arrow  
} from './Conference.styled';


import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import arrow from 'image/conference/arrow.svg';

import Evo from 'image/conference/Rectangle 177.svg';
import Tools from 'image/Smart_DevOps/DevOpsTools.svg';
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';
import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';
import centrLine from 'image/BGlines/centrLine.svg';
import centrLinePart from 'image/BGlines/centerLinePart.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion from "../../../Accordion/Accordion";

import CloudTech from "../../../../image/MSP/Cloud_Technologies.svg";
import BI from "../../../../image/MSP/BI_and_Analytics.svg";
import Microsoft from "../../../../image/MSP/Microsoft.svg";
import Linux from "../../../../image/MSP/Linux.svg";
import SQL from "../../../../image/MSP/SQL.svg";
import Virtual from "../../../../image/MSP/Virtual.svg";
import Enterprise from "../../../../image/MSP/Enterprise.svg";
import Modern from "../../../../image/MSP/Modern.svg";
import M365 from "../../../../image/MSP/365.svg";
import MDM from "../../../../image/MSP/MDM.svg";
import MSP from "../../../../image/MSP/MSP.svg";
import Network from "../../../../image/MSP/Network.svg";

import Lenovo from 'image/MSP/Lenovo.png';
import Squared from 'image/Customer_Section/c-squared.png';
import Aspiris from 'image/Customer_Section/aspiris.png'

import Lerner from 'image/Customer_Section/Lerner.png';
import SCS from 'image/Customer_Section/SCS.png';
import Tech from 'image/Customer_Section/TechNet.png';
import McLane from 'image/AI&Analytics/McLane.png';
import AKBN from 'image/Customer_Section/AKBN.png';
import {
    DivSlideTree,
    DivSlide,
    DivSlideTreeB,
    DivSlideB,
    DivSlideC,
    DivSlideA
} from 'components/HeaderServices/Slide.style';
import {useEffect, useState} from "react";
import axios from "axios";

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
    const searchTerm = 'MSP'
    const encodedSearchTerm = encodeURIComponent(searchTerm)
    const API_CLIENT = `http://cloudvoid.com.loc/api/clients?case=${encodedSearchTerm}`

    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get(API_CLIENT)
                const animationDelay = 5;
                let splitClients = splitArray(response.data)
                let clientsData = []

                if (typeof splitClients[0] !== 'undefined') {
                    let arrayLength = splitClients[0].length
                    let animationTime = arrayLength * animationDelay
                    let clientsRowData = []

                    for (var i = 0; i < arrayLength; i++) {
                        let client = splitClients[0][i];
                        let delay = animationDelay * i + 1
                        let clientLogo

                        let isAnimate = arrayLength >= 2
                        let percentage = (100 / arrayLength).toFixed(2)

                        clientLogo = createClientComponent(client, isAnimate, animationTime, delay, percentage)

                        clientsRowData.push(clientLogo);
                    }

                    clientsData.push(clientsRowData);
                }
                if (typeof splitClients[1] !== 'undefined') {
                    let arrayLength = splitClients[1].length
                    let animationTime = arrayLength * animationDelay
                    let clientsRowData = []

                    for (var i = 0; i < arrayLength; i++) {
                        let client = splitClients[1][i];
                        let delay = animationDelay * i + 2
                        let clientLogo

                        let isAnimate = arrayLength >= 2
                        let percentage = (100 / arrayLength).toFixed(2)

                        clientLogo = createClientComponent(client, isAnimate, animationTime, delay, percentage)

                        clientsRowData.push(clientLogo);
                    }

                    clientsData.push(clientsRowData);
                }
                if (typeof splitClients[2] !== 'undefined') {
                    let arrayLength = splitClients[2].length
                    let animationTime = arrayLength * animationDelay
                    let clientsRowData = []

                    for (var i = 0; i < arrayLength; i++) {
                        let client = splitClients[2][i];
                        let delay = animationDelay * i + 3
                        let clientLogo

                        let isAnimate = arrayLength >= 2
                        let percentage = (100 / arrayLength).toFixed(2)

                        clientLogo = createClientComponent(client, isAnimate, animationTime, delay, percentage)

                        clientsRowData.push(clientLogo);
                    }

                    clientsData.push(clientsRowData);
                }

                console.log(clientsData)

                setClients(clientsData);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchClients();
    }, []);

    function createClientComponent(client, isAnimate = true, animationTime = 0, delay = 0, percentage = 0) {
        let clientComponent

        if (isAnimate) {
            clientComponent = (
                <DivSlideA key={client.id} percentage={percentage} className='client_logo' style={{ animationDuration: `${animationTime}s`, animationDelay: `${delay}s`}} target="_blank" href={client.link}>
                    <Image src={client.images.product} style={{ margin:'0 auto'}} alt={client.title} />
                </DivSlideA>
            );
        } else {
            clientComponent = (
                <a key={client.id} target="_blank" href={client.link}>
                    <Image src={client.images.product} style={{ margin:'0 auto'}} alt={client.title} />
                </a>
            );
        }
        return clientComponent;
    }

    function splitArray(array) {
        var arrayLength = array.length;
        var chunkSize = Math.ceil(arrayLength / 3); // Округлюємо розмір частини до більшого цілого числа

        var chunks = [];
        for (var i = 0; i < arrayLength; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize)); // Додаємо частину масиву до списку частин
        }

        return chunks;
    }

  return (
    <Section >
      <BackEvoM src={Evo}  alt="evo" />
        <ul>
        <Container style={{position:'relative'}}>

          <ConferenceItem style={{marginTop:'100px'}}>
            <MediaQuery device={'mobile'}>
                <GlobalBox>
                    <DivEvo>
                    <SubTitle2 style={{position: 'relative'}}>
                    <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                    <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                    Subject Matter Experts On-Demand
                      </SubTitle2>
                      <Discription>
                      Did you ever have a project you had to turn down because you didn’t have the expertise on staff? Do you have support issues that linger for days or weeks because they’re too hard to solve?
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
                Subject Matter Experts On-Demand
                </SubTitle2>
                <Discription>
                      Did you ever have a project you had to turn down because you didn’t have the expertise on staff? Do you have support issues that linger for days or weeks because they’re too hard to solve?
                </Discription>
                </DivEvo>
              </GlobalBox>
            </MediaQuery>
            <GlobalBox>
              <DivBecome>
              <Discription style={{marginBottom:'30px'}}>
            
              </Discription>
              <Discription style={{position: 'relative'}}>
              <CentrLine preserveAspectRatio="none" src={centrLine} alt="build" />
              <CentrLinePart preserveAspectRatio="none" src={centrLinePart} alt="build" />
              Imagine having a team of SMEs ready to tackle any problem you encounter or fulfill any requests your clients have that you don't know how to do. Our team becomes an extension of your team. We represent ourselves as a member of your staff to bring value to your business and not the other way around. We break that “no, we don't do that" loop by giving you quick and seamless access to resources specifically experienced in the technology you’re looking for.
              </Discription>
              <Discription>
              We have SLAs and a high level of customer service that will maintain the trust in your partnerships with your clients.
              </Discription>
              </DivBecome>
            </GlobalBox> 
          </ConferenceItem>
          <ConferenceColumn>
            <SubTitleSolo>Our Technology Stack</SubTitleSolo>
            <DiscriptionCenter>
            Cloudvoid supports a spectrum of technology stacks such as:
            </DiscriptionCenter>
            <RowBoxLogo>
              <CentralDivLogo>
                 <LogoPartners src={CloudTech} style={{marginBottom: '32px'}}  />
                  <DiscriptionBold>
                  Cloud Technologies
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={BI} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  BI and Analytics
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={Microsoft} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  Microsoft Server <br/> Infrastructure
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={Linux} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  All Linux flavors
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                 <LogoPartners src={SQL} style={{marginBottom: '32px'}}  />
                  <DiscriptionBold>
                  SQL and NoSQL <br/> Platforms
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={Virtual} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  Virtualization
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={Enterprise} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  Enterprise and SMB <br/> Storage 
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={Modern} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  Modern Desktop
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                 <LogoPartners src={M365} style={{marginBottom: '32px'}}  />
                  <DiscriptionBold>
                  Microsoft 365
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={MDM} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  MDM and MAM
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={MSP} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  MSP Tools
                  </DiscriptionBold>
              </CentralDivLogo>
              <CentralDivLogo>
                  <LogoPartners src={Network} style={{marginBottom: '32px'}} />
                  <DiscriptionBold>
                  Network Technologies
                  </DiscriptionBold>
              </CentralDivLogo>
            </RowBoxLogo>
          </ConferenceColumn>

{/*PARNERS*/}
            <ConferenceItem style={{position: 'relative'}}>
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
                  {clients[0] !== undefined && clients[0].map((client) => (
                      client
                  ))}
              </DivSlide>

              <DivSlideB>
                  {clients[1] !== undefined && clients[1].map((client) => (
                      client
                  ))}
              </DivSlideB>

              <DivSlideC>
                  {clients[2] !== undefined && clients[2].map((client) => (
                      client
                  ))}
              </DivSlideC>
            </GlobalBox>
          </ConferenceItem>
 
          </Container>
        </ul>
      
    </Section>
  )
};
export default Conference;
