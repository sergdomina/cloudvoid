import {
  Section,
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
  LeftAdv,
  CentrAdv,
  RightAdv,
  OurProcess,
  LinkCustom,
  Arrow  
} from './Conference.styled';

import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import GlobalImage from '../../../GlobalImage';
import Realize from 'image/Migration/realize.svg';
import arrow from 'image/conference/arrow.svg';
import Evo from 'image/conference/Rectangle 177.svg';
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';

import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';

//Customer
import USA from 'image/Customer_Section/USA.png';
import Acteno from 'image/Customer_Section/acteno.png';
import Aspiris from 'image/Customer_Section/aspiris.png';

import centrLine from 'image/BGlines/centrLine.svg';
import centrLinePart from 'image/BGlines/centerLinePart.svg';

import Procces from 'image/Migration/OurProcess.svg';
import ProccesM from 'image/Migration/OurProcessM.svg';
import Clock from 'image/Migration/clock.svg';
import Partners from 'image/Migration/partner.svg';
import Cloud from 'image/Migration/cloud.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion from "../../../Accordion/Accordion";
import {useEffect, useState} from "react";
import axios from "axios";
import {DivSlide, DivSlideA, DivSlideB, DivSlideC} from "../../Slide.style";






const Conference = () => {

  const accordionItems = [
    {
      title: 'Infrastructure Migration',
      number: '01',
      content: 'Minimize on-premise hardware presence, remove the need for pesky maintenance contracts and costly equipment. Start a worry-free practice by leaving all of that responsibility to the cloud.'
    },
    {
      title: 'Application Migration & Modernization',
      number: '02',
      content: 'Gain a competitive advantage by migrating your applications and adopting best-in-class services. Whether it`s just shifting your applications to the cloud or adopting a SaaS solution, we`ve got you covered!'
    },
    {
      title: 'Data Migration',
      number: '03',
      content: 'From file servers to SharePoint, databases, and big data solutions, we will help ensure you benefit from the integrity, availability, accessibility, and security of the cloud.'
    },
    {
      title: 'Enterprise Platform Migration',
      number: '04',
      content: 'Shift your legacy platform portfolio to modern solutions with improved resiliency, always-on availability, built-in continuity, scalability, and agility. We`re your partner of Subject Matter Experts in asset management, identity management, operations, financial platforms, and more.'
    },
    {
      title: 'Cloud Monitoring & Reporting',
      number: '05',
      content: 'Avert downtime and identify issues before they affect your production environment by having complete visibility, advanced analytics, automation, and monitoring capabilities natively in the cloud, where being proactive is seamless.'
    }
  ];

  const searchTerm = 'Migration'
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

  return (<>
    <Section >
      <BackEvoM src={Evo}  alt="evo"/>
      <Container style={{position:'relative'}}>
        <ul>
          <ConferenceItem>
            <GlobalImage>
              <MediaQuery device={'mobile'}><Image src={Realize} style={{marginBottom:'50px', width: '80%'}} alt="build" /></MediaQuery >
              <MediaQuery device={'tabletUp'}><Image src={Realize} style={{marginLeft:'10%', width: '80%'}} alt="build" /></MediaQuery >
            </GlobalImage>
            <GlobalBox>
              <div style={{display: 'block', margin:'0 auto'}}>
              <SubTitle> Realize More Business Value In The Cloud </SubTitle>
              <Discription>
              The cloud is no longer driven by business requirements, but it has become an essential growth need.
              </Discription>
              <Discription>
              Many businesses have realized this and have started migrating their business infrastructure and operations to the cloud.
              </Discription>
              </div>
            </GlobalBox>
          </ConferenceItem>

          <ConferenceItem>
            <MediaQuery device={'mobile'}>
                <GlobalBox>
                    
                    <DivEvo>
                    <SubTitle2 style={{position: 'relative'}}>
                    <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                    <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                      $100 billion will be lost in migration spending.
                      </SubTitle2>
                    <Discription style={{width:'75%'}}>
                    Unfortunately, most companies are losing money because of flawed cloud migration frameworks. In fact, over the next three years, approximately $100 billion will be lost in migration spending. 
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
              Migration requirements such as security, compliance risks, and legacy infrastructure make the process seem complex! Are you stuck in this cloud migration journey and looking to accelerate the process? Don't worry; we've got you!
              </Discription>
              <Discription>
              Our proven approach has been curated to help your business navigate these challenges and get faster returns from your cloud investment. It spans critical areas such as strategy & planning, execution, governance, and security to ensure that your business and technology needs are aligned with your goals.
              </Discription>
              </DivBecome>
            </GlobalBox>
            <MediaQuery device={'tabletUp'}>
              <GlobalBox>
                    <BackEvo src={Evo}  alt="evo"></BackEvo>
                    <DivEvo>
                    <SubTitle2 style={{position: 'relative'}}>
                    <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                    <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                      $100 billion will be lost in migration spending.
                      </SubTitle2>
                    <Discription style={{width:'75%'}}>
                    Unfortunately, most companies are losing money because of flawed cloud migration frameworks. In fact, over the next three years, approximately $100 billion will be lost in migration spending. 
                    </Discription>
                    </DivEvo>
              </GlobalBox>
            </MediaQuery>
          </ConferenceItem>

          <MediaQuery device={'desktop'}>
            <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
              <Title> Cloud Migration Services </Title>
              <DiscriptionCenter>
              Our End-To-End cloud migration services ensure a seamless experience. Our proven approach guides you in every phase of your journey.
              </DiscriptionCenter>
              <Accordion items={accordionItems} />
            </ConferenceItemCenter>
          </MediaQuery >
          </ul>
          </Container>

{/*ACCORDION*/}
          <MediaQuery device={'mobileDefault'}>
            <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
              <Title> Cloud Migration Services </Title>
              <DiscriptionCenter>
              Our End-To-End cloud migration services ensure a seamless experience. Our proven approach guides you in every phase of your journey.
              </DiscriptionCenter>
              <Accordion items={accordionItems} />
            </ConferenceItemCenter>
          </MediaQuery >


          <Container>
            <ul>
          <ConferenceColumn>
            <SubTitleSolo>The Cloudvoid Advantage</SubTitleSolo>
            <RowBox>
              <CentralDiv>
              <LeftAdv src={Clock}  alt="evo"></LeftAdv>
                <DiscriptionWithMargin>
                Our intercontinental team of Subject Matter Experts is doing migrations 24/7.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <CentrAdv src={Partners}  alt="evo"></CentrAdv>
                <DiscriptionWithMargin>
                Close partnerships with Microsoft, Amazon, Google, and IBM.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <RightAdv src={Cloud}  alt="evo"></RightAdv>
                <DiscriptionWithMargin>
                  Proven track record with thousands of hours spent on successful migrations.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
            <SubTitleSolo>Our Process</SubTitleSolo>
            <RowBox>
              <MediaQuery device={'mobile'}>
                <OurProcess src={ProccesM}  alt="evo"></OurProcess>
              </MediaQuery>
              <MediaQuery device={'tablet'}>
                <OurProcess src={Procces}  alt="evo"></OurProcess>
              </MediaQuery>
              <MediaQuery device={'default'}>
                <OurProcess src={Procces}  alt="evo"></OurProcess>
              </MediaQuery>
              
            </RowBox>
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
          </ul>
          </Container>
    </Section>
    </>)
};
export default Conference;
