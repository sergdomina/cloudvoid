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
  ConferenceItemAlignTop,
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

import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import GlobalImage from '../../../GlobalImage';
import arrow from 'image/conference/arrow.svg';
import Team from 'image/AI&Analytics/team.svg';
import Server from 'image/AI&Analytics/server.svg';
import Partner from 'image/AI&Analytics/partner_Smart.svg';
import Evo from 'image/conference/Rectangle 177.svg';
import Brain from 'image/AI&Analytics/AI_Brain.svg';
import Tech from 'image/AI&Analytics/tech.svg';

import McLane from 'image/AI&Analytics/McLane.png';
import Gemean from 'image/AI&Analytics/Gemean.png';

import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';
import Lenovo from 'image/conference/lenovo.svg';
import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion, { AccordionHorizontal } from "../../../Accordion/Accordion";
import {useEffect, useState} from "react";
import axios from "axios";
import {DivSlide, DivSlideA, DivSlideB, DivSlideC} from "../../Slide.style";




const Conference = () => {

  const accordionItems = [
    {
      title: 'DataOps',
      number: '01',
      content: 'Having the same mindset as DevOps, we provide a framework of specific tools such as ETL, data curation, and cataloging, as well as log analyzers and system monitors. From IT and Engineering to HR and Advertising departments, DataOps helps them use their data most flexibly and efficiently as possible.'
    },
    {
      title: 'Data Engineering and Computing',
      number: '02',
      content: 'It involves processing large-scale organization information for insights to be used in decision-making, such as Data Warehouses, Dashboards, Data Visualization and Reporting, Data Ingestion, and much more.'
    },
    {
      title: 'Advanced Analytics & AI',
      number: '03',
      content: 'Leverage specialized AI services such as Machine Learning, Cognitive Services, and AI Infrastructure to integrate intelligent analytics across business processes ranging from vision and speech recognition to decision-making and data modeling.'
    },
  ];
  const searchTerm = 'AI & Analytics'
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

          <ConferenceItem>
            <MediaQuery device={'mobile'}>
                <GlobalBox>
                    <DivEvo>
                    <SubTitle2 style={{position: 'relative'}}>
                    <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                    <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                    Studies show that enterprises that utilize advanced analytics see 33% more growth and 12X more profits.
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
                Studies show that enterprises that utilize advanced analytics see 33% more growth and 12X more profits.
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
              Looking to leverage the power of cloud-based AI and analytics to drive growth and profitability for your business? Look no further. Our services make it easy to predict and identify trends, analyze massive data sets, and generate valuable insights.
              </Discription>
              <Discription>            
              With the explosion of data being created and stored in the cloud and at IoT endpoints, now is the time to harness the power of advanced analytics. Studies show that enterprises that utilize advanced analytics see 33% more growth and <span style={{fontWeight: '700'}}>12X more profits.</span>
              </Discription>
              </DivBecome>
            </GlobalBox> 
          </ConferenceItem>

          <ConferenceItem>
            <GlobalImage>
              <Image src={Brain} alt="brain"/>
            </GlobalImage>
            <GlobalBox>
              <Discription>
                But scaling AI across your enterprise and ensuring the success of AI projects can be daunting. Don't worry; we've got you covered.
              </Discription>
              <Discription>
                Our team has the expertise and tools to help you overcome the common challenges that 90% of companies face when scaling AI. We'll work with you to ensure the success of your AI projects, helping you unlock their full potential to drive innovation and growth for your business.
              </Discription>
            </GlobalBox>
          </ConferenceItem>



          <div>
          <Title>What is the Connection between the Cloud, Big data, and AI?</Title>
          <ConferenceItemAlignTop>
            <GlobalBox >
                <Discription style={{position: 'relative'}}>
                <LeftLine preserveAspectRatio="none" src={leftLine} style={{zIndex:'-2'}} alt="build" />
                <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                From determining the suitable datasets to optimize your AI efforts to ensuring data security and proper storage, our team can help you navigate the complex landscape of AI integration and continually train your models to drive maximum value for your business.
                </Discription>
                <Discription>
                  Don't let common and uncommon challenges hold you back. Leverage the power of the cloud, big data, and AI to stay ahead of the curve and drive innovation in your industry.
                </Discription>
            </GlobalBox>
            <GlobalBox>
              <Discription style={{position: 'relative'}}>
              <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
              The cloud is the backbone of modern business, providing limitless storage and processing power for big data and AI. Leading cloud companies like Microsoft, Amazon, and Google have poured billions into building the most advanced AI platforms on the market. We have the expertise to help you tap into their potential.
              </Discription>
            </GlobalBox>
          </ConferenceItemAlignTop>
          </div>



          <MediaQuery device={'tabletUp'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Cloud Analytics & AI Services </Title>
            <AccordionHorizontal items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>

      </Container>




{/*ACCORDION*/}
          <MediaQuery device={'mobile'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Cloud Analytics & AI Services</Title>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>



    <ContainerTwo style={{position:'relative'}}>        
          
          <ConferenceColumn>
            <SubTitleSolo>How We Make Your Data Work For You</SubTitleSolo>
            <RowBox>
              <CentralDiv>
                <Image src={Team} style={{}} alt="clock" />
                <TitleDes style={{position: 'relative'}}>
                Experienced & Dedicated Teams
                  </TitleDes>
                <DiscriptionWithMargin>
                Our team draws years of industry experience, a rare combination of skill sets, and a burning passion for technology.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Image src={Server} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Diverse Technology Stack
                  </TitleDes>
                <DiscriptionWithMargin>
                Our Cloud AI & Analytics arsenal features a complex stack of tools and technologies to ensure you get the best insights from your data.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <Image src={Partner} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Powerful Ecosystem Partners
                  </TitleDes>
                <DiscriptionWithMargin>
                Partnering with the world's most innovative leaders, such as Microsoft, Google, and Amazon, provides us with the robust tools required to capitalize on the power of data.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>


          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
                <Title> Our Cloud AI & Analytics Tools and Technologies</Title>
                <Products src={Tech} alt="smart" />
          </ConferenceItemCenter>

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


          </ContainerTwo>
        </ul>
      
    </Section>
  )
};
export default Conference;
