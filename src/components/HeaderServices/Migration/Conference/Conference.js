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

import centrLine from 'image/BGlines/centrLine.svg';
import centrLinePart from 'image/BGlines/centerLinePart.svg';

import Procces from 'image/Migration/OurProcess.svg';
import ProccesM from 'image/Migration/OurProcessM.svg';
import Clock from 'image/Migration/clock.svg';
import Partners from 'image/Migration/partner.svg';
import Cloud from 'image/Migration/cloud.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion from "../../../Accordion/Accordion";

import McLane from 'image/AI&Analytics/McLane.png';
import Lenovo from 'image/MSP/Lenovo.png';
import Lerner from 'image/MSP/Lerner.png';





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
      content: 'Minimize on-premise hardware presence, remove the need for pesky maintenance contracts and costly equipment. Start a worry-free practice by leaving all of that responsibility to the cloud.'
    },
    {
      title: 'Data Migration',
      number: '03',
      content: 'Minimize on-premise hardware presence, remove the need for pesky maintenance contracts and costly equipment. Start a worry-free practice by leaving all of that responsibility to the cloud.'
    },
    {
      title: 'Enterprise Platform Migration',
      number: '04',
      content: 'Minimize on-premise hardware presence, remove the need for pesky maintenance contracts and costly equipment. Start a worry-free practice by leaving all of that responsibility to the cloud.'
    },
    {
      title: 'Cloud Monitoring & Reporting',
      number: '05',
      content: 'Minimize on-premise hardware presence, remove the need for pesky maintenance contracts and costly equipment. Start a worry-free practice by leaving all of that responsibility to the cloud.'
    }
  ];

  return (
    <Section >
      <BackEvoM src={Evo}  alt="evo"/>
      <Container style={{position:'relative'}}>
        <ul>
          <ConferenceItem>
            <GlobalImage>
            <Image src={Realize} style={{marginLeft:'10%', width: '80%'}} alt="build" />
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

{/*ACCORDION*/}
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Cloud Migration Services </Title>
            <DiscriptionCenter>
            Our End-To-End cloud migration services ensure a seamless experience. Our proven approach guides you in every phase of your journey.
            </DiscriptionCenter>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>



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
              <DivLen>
              <Image src={Lenovo} style={{ width: '50%', margin:'0 auto'}}  alt="evo"/>
              </DivLen>
              <DivLen>
              <Image src={Lerner} alt="evo"/>
              </DivLen>
              <DivLen>
              <Image src={McLane} alt="evo"/>
              </DivLen>
            </GlobalBox>
          </ConferenceItem>

        </ul>
      </Container>
    </Section>
  )
};
export default Conference;
