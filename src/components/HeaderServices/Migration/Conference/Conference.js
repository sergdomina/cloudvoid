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
  BackCustom,
  BackCustomDef,
  Len,
  LenTitle,
  LenDis,
  DivEvo,
  DivLen,
  DivBecome,
  CentralDiv,
  GlobalBoxTwo,
  LeftLine,
  CentrLine,
  LeftHow,
  RightHow,
  LinkCustom,
  Arrow  
} from './Conference.styled';

import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import GlobalImage from '../../../GlobalImage';
import Build from 'image/conference/build.svg';
import arrow from 'image/conference/arrow.svg';
import Evo from 'image/conference/Rectangle 177.svg';
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import Lenovo from 'image/conference/lenovo.svg';
import leftLine from 'image/BGlines/leftLineWhat.svg';
import centrLine from 'image/BGlines/centrLine.svg';
import leftHow from 'image/BGlines/leftHow.svg';
import rightHow from 'image/BGlines/rightHow.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion from "../../../Accordion/Accordion";




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
      content: 'Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.'
    },
    {
      title: 'FinOps',
      number: '03',
      content: 'Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.'
    },
    {
      title: 'Smart DevOps',
      number: '04',
      content: 'Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.'
    },
    {
      title: 'Cloud Solutions Architecture',
      number: '05',
      content: 'Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.'
    },
    {
      title: 'SysOps',
      number: '06',
      content: 'Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.'
    }
  ];

  return (
    <Section >
      <Container style={{position:'relative'}}>

        
        <ul>
          <ConferenceItem>
            <GlobalImage>
            <Image src={Build} style={{marginLeft:'10%', width: '80%'}} alt="build" />
            </GlobalImage>
            <GlobalBox>
              <div style={{display: 'block', margin:'0 auto'}}>
              <SubTitle> Realize More Business Value In The Cloud </SubTitle>
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


          <ConferenceItem>
            <MediaQuery device={'mobile'}>
                <GlobalBox>
                    <BackEvo src={Evo}  alt="evo"></BackEvo>
                    <DivEvo>
                    <SubTitle2>What is Cloud Evolve?</SubTitle2>
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
              <CentrLine src={centrLine} alt="build" />
              Cloudvoid becomes an extension of your team. Prefer to use chat? That is how we engage. Have your own Project Management software? We integrate with that. 
              </Discription>
              <Discription>
              We become your trusted advisor guiding every step of your cloud journey. Our most significant value is that we understand what drives your company. That is what guides us when we manage your cloud environment. Your critical moments are our critical moments too.
              </Discription>
              </DivBecome>
            </GlobalBox>
            <MediaQuery device={'tablet'}>
              <GlobalBox>
                <BackEvo src={Evo}  alt="evo"></BackEvo>
                <DivEvo>
                <SubTitle2>What is Cloud Evolve?</SubTitle2>
                <Discription style={{width:'75%'}}>
                It's a spectrum of services, solutions, 
                frameworks, principles, and technologies crafted to help 
                businesses derive value from the cloud. We guide you through the entire cloud journey.
                </Discription>
                </DivEvo>
              </GlobalBox>
            </MediaQuery>
            <MediaQuery device={'default'}>
              <GlobalBox>
                <BackEvo src={Evo}  alt="evo"></BackEvo>
                <DivEvo>
                <SubTitle2  style={{position:'relative'}}>
                <LeftLine src={leftLine} alt="build" />
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
          </ConferenceItem>

{/*ACCORDION*/}
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>

            <Title> The Cloud Evolve Suite </Title>
            <DiscriptionCenter>
              Whether you are just starting your cloud journey or already have a mature IT environment, Cloud Evolve guides you on increasing your ROI and getting faster business results.
            </DiscriptionCenter>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>



          <ConferenceColumn>
            <SubTitleSolo>How Do We Make Cloud <br/> Evolve Possible?</SubTitleSolo>
            <RowBox>
              <CentralDiv>
                <TitleDes style={{position: 'relative'}}>
                <LeftHow src={leftHow} alt="build" /> 
                  Experienced & Dedicated Teams
                  </TitleDes>
                <DiscriptionWithMargin>
                  Our team draws years of industry experience, a rare combination of skill sets, and a burning passion for technology.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <TitleDes style={{position: 'relative'}}>
                <RightHow src={rightHow} alt="build" />
                  Diverse Technology Stack
                  </TitleDes>
                <DiscriptionWithMargin>
                  Cloud Evolve covers all cloud technologies, services, and solutions. We utilize industry best practices to ensure your business operations run efficiently.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
            <RowBox>
              <CentralDiv >
              <TitleDes>
                 Powerful Ecosystem Partners
                 </TitleDes>
              <DiscriptionWithMargin>
              Partnering with the world's most innovative leaders, such as Microsoft, Google, and Amazon, enables us to find solutions for the toughest challenges.
              </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <TitleDes>Proven Track Record</TitleDes>
              <DiscriptionWithMargin>
              We have collaborated with numerous businesses across all industries, which validates our standing as subject matter experts.
              </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>


          <ConferenceItem>
            <GlobalBoxTwo style={{alignItems: 'center'}}>
              <div>
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
              </div>
            </GlobalBoxTwo>
            <GlobalBox>
              <MediaQuery device={'desktop'}>
              <BackCustom src={Custom} alt="evo"></BackCustom>
              </MediaQuery>
              
              <BackCustomDef src={CustomDef} alt="evo"></BackCustomDef>
              
              

{/*PARNERS*/}
              <DivLen>
              <Len src={Lenovo} alt="evo"></Len>
              <div style={{display:'flex'}}>
                <div style={{marginRight:'10%'}}>
                <LenTitle >+12%</LenTitle>
                <LenDis>
                Lorem ipsum stat to show
                </LenDis>
                </div>
                <div>
                <LenTitle>X2</LenTitle>
                <LenDis>
                Lorem ipsum stat to show
                </LenDis>
                </div>
              </div>
              <DiscriptionWithMargin style={{margin:'0'}}>
              Our team draws years of industry experience, a rare combination of skill sets, and a burning passion for technology.
              </DiscriptionWithMargin>
              </DivLen>
            </GlobalBox>
          </ConferenceItem>

        </ul>
      </Container>
    </Section>
  )
};
export default Conference;
