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
  LinkCustom,
  Arrow  
} from './Conference.styled';

import {DivSlide, DivSlideC, DivSlideB, DivSlideA} from 'components/HeaderServices/Slide.style';
import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import GlobalImage from '../../../GlobalImage';
import Build from 'image/conference/build.svg';
import arrow from 'image/conference/arrow.svg';
import Evo from 'image/conference/Rectangle 177.svg';
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';

import Amnis from 'image/Customer_Section/Amnis.png';
import Lyon from 'image/Customer_Section/Lyon.png';
import BestEx from 'image/Customer_Section/BestEx.png';
import Doc from 'image/Customer_Section/docStribute.svg';
import Metalink from 'image/Customer_Section/metalink.png';
import Gemean from 'image/Customer_Section/Gemean.svg';

import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';

import centrLine from 'image/BGlines/centrLine.svg';
import centrLinePart from 'image/BGlines/centerLinePart.svg';
import leftHow from 'image/BGlines/leftLineHow.svg';
import rightHow from 'image/BGlines/rightLineHow.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion from "../../../Accordion/Accordion";
import {useEffect, useState} from "react";
import axios from "axios";
import {SplideSlide} from "@splidejs/react-splide";
import {CentralDivCarusel, LogoPartners} from "../../../Home/Conference/Conference.styled";

const Conference = () => {

  const accordionItems = [
    {
      title: 'Cloud Ops',
      number: '01',
      content: 'Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.'
    },
    {
      title: 'SecOps',
      number: '02',
      content: 'We create and maintain a safe environment for you to do business. We protect your critical data, monitor threats, and react to events. We guide the team to operate safely. Does compliance drive your behavior? We will build the structure that ensures your technology and operations are compliant.'
    },
    {
      title: 'FinOps',
      number: '03',
      content: 'We help you align finance and technology to create a culture of financial accountability. Cloudvoid helps you improve resource planning and take back control of your cloud spending.'
    },
    {
      title: 'Smart DevOps',
      number: '04',
      content: 'Embrace CI/CD with smart DevOps and accelerate your software development lifecycle. We help you create the cultural and technological environment required to rapidly build, test, and release your software products.'
    },
    {
      title: 'Cloud Solutions Architecture',
      number: '05',
      content: ' Cloudvoid becomes your trusted advisor for translating complex business requirements into practical solutions. We design, develop, and integrate high-performance, secure, scalable, and reliable cloud solutions with minimum risk.'
    },
    {
      title: 'SysOps',
      number: '06',
      content: 'Cloudvoid`s professionals help you adopt hybrid solutions to improve infrastructure efficiency and resiliency. We are experts at administering classic server environments based on UNIX/Linux and Microsoft Server Technologies.'
    }
  ];
  const searchTerm = 'Evolve'
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
            
            <GlobalImage>
            <Image src={Build} style={{marginLeft:'10%', width: '80%'}} alt="build" />
            </GlobalImage>
            <GlobalBox>
              <div style={{display: 'block', margin:'0 auto'}}>
              <SubTitle> Build an Ever-Ready Cloud </SubTitle>
              <Discription>
              The Cloud offers immense potential, 
              but only a few businesses get value from it. 
              Some key reasons for this include the increasing complexity of modern IT systems, 
              security and compliance risks, and the Misalignment between IT and business. 
              Technology also changes by the second, and companies can barely keep up.
              </Discription>
              <DiscriptionBold>
              That is why we built Cloud Evolve.
              </DiscriptionBold>
              </div>
            </GlobalBox>
          </ConferenceItem>


          <ConferenceItem style={{position:'relative'}}>
            <MediaQuery device={'mobile'}>
                <GlobalBox>
                    <DivEvo>
                    <SubTitle2 style={{position: 'relative'}}>
                    <LeftLine preserveAspectRatio="none" src={leftLine} alt="build" />
                    <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                      What is Cloud Evolve?
                      </SubTitle2>
                    <Discription style={{width:'75%'}}>
                    It's a spectrum of services, solutions, 
                    frameworks, principles, and technologies crafted to help 
                    businesses derive value from the cloud. We guide you through the entire cloud journey.
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
              Cloudvoid becomes an extension of your team. Prefer to use chat? That is how we engage. Have your own Project Management software? We integrate with that. 
              </Discription>
              <Discription>
              We become your trusted advisor guiding every step of your cloud journey. Our most significant value is that we understand what drives your company. That is what guides us when we manage your cloud environment. Your critical moments are our critical moments too.
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
                  What is Cloud Evolve?
                </SubTitle2>
                <Discription style={{width:'85%'}}>
                It's a spectrum of services, solutions, 
                frameworks, principles, and technologies crafted to help 
                businesses derive value from the cloud. We guide you through the entire cloud journey.
                </Discription>
                </DivEvo>
              </GlobalBox>
            </MediaQuery>
          </ConferenceItem>
          <MediaQuery device={'desktop'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> The Cloud Evolve Suite </Title>
            <DiscriptionCenter>
              Whether you are just starting your cloud journey or already have a mature IT environment, Cloud Evolve guides you on increasing your ROI and getting faster business results.
            </DiscriptionCenter>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
        </Container>

        {/*ACCORDION*/}
          <MediaQuery device={'mobileDefault'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title style={{ marginLeft: '10%'}}> The Cloud Evolve Suite </Title>
            <DiscriptionCenter>
              Whether you are just starting your cloud journey or already have a mature IT environment, Cloud Evolve guides you on increasing your ROI and getting faster business results.
            </DiscriptionCenter>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
        {/*ACCORDION*/}



          <ContainerTwo style={{position:'relative'}}>
          <ConferenceColumn>
            <SubTitleSolo>How Do We Make Cloud <br/> Evolve Possible?</SubTitleSolo>
            <RowBox>
              <CentralDiv>
                <TitleDes style={{position: 'relative'}}>
                <LeftHow preserveAspectRatio="none" src={leftHow} alt="build" /> 
                <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                  Experienced & Dedicated Teams
                  </TitleDes>
                <DiscriptionWithMargin>
                  Our team draws years of industry experience, a rare combination of skill sets, and a burning passion for technology.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <TitleDes style={{position: 'relative'}}>
                <RightHow src={rightHow} alt="build" />
                <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                  Diverse Technology Stack
                  </TitleDes>
                <DiscriptionWithMargin>
                  Cloud Evolve covers all cloud technologies, services, and solutions. We utilize industry best practices to ensure your business operations run efficiently.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
            <RowBox>
              <CentralDiv >
              <TitleDes style={{position: 'relative'}}>
              <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                 Powerful Ecosystem Partners
                 </TitleDes>
              <DiscriptionWithMargin>
              Partnering with the world's most innovative leaders, such as Microsoft, Google, and Amazon, enables us to find solutions for the toughest challenges.
              </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <TitleDes style={{position: 'relative'}}>
              <LeftLinePart preserveAspectRatio="none" src={leftLinePart} alt="build" />
                Proven Track Record
                </TitleDes>
              <DiscriptionWithMargin>
              We have collaborated with numerous businesses across all industries, which validates our standing as subject matter experts.
              </DiscriptionWithMargin>
              </CentralDiv>
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

          </ContainerTwo>
        </ul>
      
    </Section>
  )
};
export default Conference;
