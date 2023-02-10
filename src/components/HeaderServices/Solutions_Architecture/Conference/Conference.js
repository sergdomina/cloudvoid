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
  DivBecome,
  CentralDiv,
  CentralDivLogo,
  GlobalBoxTwo,
  LeftLine,
  LeftLinePart,
  CentrLine,
  CentrLinePart,
  Adv,
  LeftHow,
  RightHow,
  LinkCustom,
  Arrow,  
  Arrow2,
  LinkWeDo, 
  TitleWeDo
} from './Conference.styled';

import { Image} from '@chakra-ui/react';
import Container from '../../../Container';
import GlobalBox from '../../../GlobalBox';
import GlobalImage from '../../../GlobalImage';
import arrow from 'image/conference/arrow.svg';

import Google from 'image/Solutions_Architecture/google.png';
import Aws from 'image/Solutions_Architecture/AWS.png';
import Azure1 from 'image/Solutions_Architecture/Azure.png';
import Azure2 from 'image/Solutions_Architecture/Microsoft.png';
import IBM from 'image/Solutions_Architecture/IBM.png';
import MCSE from 'image/Solutions_Architecture/MCSE.png';

import Future from 'image/Solutions_Architecture/future.svg';
import Save from 'image/Solutions_Architecture/save.svg';
import Secure from 'image/Solutions_Architecture/secure.svg';

import Paper from 'image/Smart_Infrastructure/papers.svg';
import Partner from 'image/Smart_Infrastructure/partner_Smart.svg';
import Server from 'image/Smart_Infrastructure/server.svg';
import Clock from 'image/Smart_Infrastructure/clock_Smart.svg';
import Cloud from 'image/Solutions_Architecture/cloud.svg';

import Evo from 'image/conference/Rectangle 177.svg';
<<<<<<< Updated upstream

import McLane from 'image/Customer_Section/McLane.png';
import Elementor from 'image/Customer_Section/Elementor.png';
import Amnis from 'image/Customer_Section/Amnis.png';

=======
import Tools from 'image/Smart_DevOps/DevOpsTools.svg';
>>>>>>> Stashed changes
import Custom from 'image/conference/Group 291.svg';
import CustomDef from 'image/conference/customDef.svg';
import CustomMobile from 'image/conference/CustomMobile.svg';
import Lenovo from 'image/conference/lenovo.svg';
import leftLine from 'image/BGlines/leftLine.svg';
import leftLinePart from 'image/BGlines/leftLinePart.svg';
import centrLine from 'image/BGlines/centrLine.svg';
import centrLinePart from 'image/BGlines/centerLinePart.svg';
import leftHow from 'image/BGlines/leftLineHow.svg';
import rightHow from 'image/BGlines/rightLineHow.svg';
import MediaQuery from 'components/MediaQuery';
import Accordion, { AccordionHorizontal } from "../../../Accordion/Accordion";




const Conference = () => {

  const accordionItems = [
    {
      title: 'Cloud Strategy Consulting',
      number: '01',
      content: 'Maximize the value of your cloud technology and support your business growth with our tailored cloud architecture strategy service. We`ll help you create a cloud blueprint that aligns your technology roadmap with your current and future business needs and identifies opportunities for modernization and innovation.'
    },
    {
      title: 'Cloud Architecture Design',
      number: '02',
      content: 'Our team of cloud veterans has designed and implemented high-performance cloud architectures for various enterprises. We will help you design architectures built upon robust technologies and optimized to reduce operating costs, improve application performance and resiliency, and elevate security.'
    },
    {
      title: 'Cloud Resiliency Architecture',
      number: '03',
      content: 'Stay ahead of potential downtime and security issues with our cloud resiliency architecture. We`ll design your architecture to ensure peak availability and alignment with your business objectives on a regional and global scale.'
    },
    {
      title: 'Cloud Cost Architecture',
      number: '04',
      content: 'We help your organization take control of its cloud computing costs and drive operational efficiency with a tailored design for resource utilization and data residency.'
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
                    Overview
                    </SubTitle2>
                    <Discription style={{position: 'relative'}}>
                      The cloud is quickly becoming the go-to solution for software, automation, and infrastructure services, and the future is moving away from legacy ecosystems. With the rise of public, private, and hybrid clouds, navigating this paradigm shift on your own can be overwhelming. That's where we come in.
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
                <Discription style={{position: 'relative'}}>
                The cloud is quickly becoming the go-to solution for software, automation, and infrastructure services, and the future is moving away from legacy ecosystems. With the rise of public, private, and hybrid clouds, navigating this paradigm shift on your own can be overwhelming. That's where we come in.
                </Discription>
                </DivEvo>
              </GlobalBox>
            </MediaQuery>
            <GlobalBox>
              <DivBecome>
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

          <MediaQuery device={'tabletUp'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Our Capabilities</Title>
            <DiscriptionCenter>
            Cloudvoid provides enterprise-grade cloud architecture solutions that help you realize the value of your investments while minimizing business disruption. Our experts develop tailored solutions to meet your needs.
            </DiscriptionCenter>
            <AccordionHorizontal items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>
      </Container>




{/*ACCORDION*/}
          <MediaQuery device={'mobile'}>
          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> Our Capabilities</Title>
            <DiscriptionCenter>
            Cloudvoid provides enterprise-grade cloud architecture solutions that help you realize the value of your investments while minimizing business disruption. Our experts develop tailored solutions to meet your needs.
            </DiscriptionCenter>
            <Accordion items={accordionItems} />
          </ConferenceItemCenter>
          </MediaQuery>



    <ContainerTwo style={{position:'relative'}}>        
          
          <ConferenceColumn>
            <SubTitleSolo>Smart DevOps Benefits</SubTitleSolo>
            <RowBox>
              <CentralDiv>
              <Image src={Future} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Future-Proof Your Business
                  </TitleDes>
                <DiscriptionWithMargin>
                Stay ahead of the competition by providing agile solutions for adopting new cloud capabilities. With cloud-native architecture, improved mobility, automation, AI, and hyper scalability, you can quickly and easily stay ahead of the competition
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Image src={Save} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Save Costs and Measure Impact
                  </TitleDes>
                <DiscriptionWithMargin>
                Pay for only the resources you use, cutting down on unnecessary upfront and maintenance costs of physical infrastructure. We also provide tools and expertise for measuring the impact of your cloud investments, allowing you to track key performance indicators, cloud productivity rates, and CAPEX vs. OPEX costs.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
                <Image src={Secure} style={{}} alt="quad" />
                <TitleDes style={{position: 'relative'}}>
                Elevate Your Security
                  </TitleDes>
                <DiscriptionWithMargin>
                Keep your digital assets safe and secure across hybrid and multi-cloud environments. We provide built-in compliance features to help you avoid paying costly fines and ensure that your business stays compliant.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>

          <ConferenceColumn>
            <SubTitleSolo>Companies That Entrust Us With Their DevOps</SubTitleSolo>
            <DiscriptionCenter>
            Cloudvoid provides enterprise-grade cloud architecture solutions that help you realize the value of your investments while minimizing business disruption. Our experts develop tailored solutions to meet your needs.
            </DiscriptionCenter>
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
            <SubTitle2 style={{marginBottom: '40px'}}>Cloud Solutions Architecture: Unique Advantage</SubTitle2>
            <RowBox>
              <CentralDiv>
              <Adv src={Paper}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                Our subject matter experts have a wide array of industry certifications from Microsoft, VMWare, The Linux Foundation, Red Hat, Cisco, and other leading business technology providers.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Adv src={Partner}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                Robust partner ecosystem (Microsoft, Cisco, and RedHat) to ensure no solution is out of bounds.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Adv src={Server}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                We have a proven track record of delivering robust, scalable, and secure infrastructures for businesses across many industries.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
            <RowBox>
              <CentralDiv>
              <Adv src={Clock}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                Our experienced and dedicated support teams are available in any timezone, 24/7/365.
                </DiscriptionWithMargin>
              </CentralDiv>
              <CentralDiv>
              <Adv src={Cloud}  alt="evo"/>
                <DiscriptionWithMargin style={{ textAlign:'center'}}>
                We are infrastructure SMEs, providing unparalleled enterprise experience and expertise.
                </DiscriptionWithMargin>
              </CentralDiv>
            </RowBox>
          </ConferenceColumn>

          


<<<<<<< Updated upstream
{/*PARNERS*/}
          <ConferenceItem style={{position: 'relative', zIndex: '0'}}>
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
              <SubTitle style={{ marginBottom: '7%'}} >Customer Success Stories And Case Studies</SubTitle>
=======
          <ConferenceItem style={{position: 'relative'}}>
            <GlobalBoxTwo style={{alignItems: 'center'}}>
              <div>
              <SubTitle>Customer Success Stories And Case Studies</SubTitle>
>>>>>>> Stashed changes
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
            <GlobalBox style={{position: 'relative'}}>
<<<<<<< Updated upstream

              <DivLen>
                <a href='https://elementor.com/'>
                <Image  src={Elementor} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
              </DivLen>
              <DivLen>
                <a href='https://amnistreasury.com'>
                <Image src={Amnis} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
              </DivLen>
              <DivLen>
                <a href='https://mclaneintel.com/'>
                <Image src={McLane} style={{margin:'0 auto'}}  alt="evo"/>
                </a>
              </DivLen>

            </GlobalBox>
          </ConferenceItem>

          <ConferenceColumn>
            <SubTitle2 style={{marginBottom: '40px'}}>We Don't Just Architect it; <br/>We Also Build It.</SubTitle2>
            <MediaQuery device={'mobile'}>
            <RowBox style={{justifyContent:'center',
             display: 'flex',
              flexWrap: 'wrap'}}>
    
              <table>
                <tbody>
                  <tr>
                    <td>
                      <LinkWeDo style={{ }}>
                      <TitleWeDo style={{padding: '0'}}>Cloud Evolve</TitleWeDo>
                      <Arrow2  src={arrow} alt='arrow'/>
                      </LinkWeDo>
                    </td>
                  </tr>
                  <tr>
                  <td> <LinkWeDo style={{ }}>
                      <TitleWeDo style={{padding: '0'}}>Smart DevOps</TitleWeDo>
                      <Arrow2  src={arrow} alt='arrow'/>
                      </LinkWeDo>
                    </td>
                  </tr>
                  <tr>
                    <td> 
                      <LinkWeDo style={{ }}>
                      <TitleWeDo style={{padding: '0'}}>Cloud AI & Analytics</TitleWeDo>
                      <Arrow2  src={arrow} alt='arrow'/>
                      </LinkWeDo>
                    </td>                   
                  </tr>
                  
                  <tr>
                    <td><LinkWeDo style={{ }}>
                        <TitleWeDo style={{padding: '0'}}>Cloud Migration</TitleWeDo>
                        <Arrow2  src={arrow} alt='arrow'/>
                        </LinkWeDo>
                    </td>
                  </tr>
                </tbody>
              </table>
            </RowBox>
            </MediaQuery>
            <MediaQuery device={'tabletUp'}>
            <RowBox style={{justifyContent:'center',
             display: 'flex',
              flexWrap: 'wrap'}}>
    
              <table>
                <tbody>
                  <tr>
                    <td>
                      <LinkWeDo style={{ }}>
                      <TitleWeDo style={{padding: '0'}}>Cloud Evolve</TitleWeDo>
                      <Arrow2  src={arrow} alt='arrow'/>
                      </LinkWeDo>
                    </td>
                    <td> <LinkWeDo style={{ }}>
                      <TitleWeDo style={{padding: '0'}}>Smart DevOps</TitleWeDo>
                      <Arrow2  src={arrow} alt='arrow'/>
                      </LinkWeDo>
                    </td>
                    </tr>
                    <tr>
                    <td> 
                      <LinkWeDo style={{ }}>
                      <TitleWeDo style={{padding: '0'}}>Cloud AI & Analytics</TitleWeDo>
                      <Arrow2  src={arrow} alt='arrow'/>
                      </LinkWeDo>
                    </td>
                    <td><LinkWeDo style={{ }}>
                        <TitleWeDo style={{padding: '0'}}>Cloud Migration</TitleWeDo>
                        <Arrow2  src={arrow} alt='arrow'/>
                        </LinkWeDo></td>
                  </tr>
                </tbody>
              </table>
            </RowBox>
            </MediaQuery>
          </ConferenceColumn>

=======
              <MediaQuery device={'desktop'}>
              <BackCustom src={Custom} alt="evo"></BackCustom>
              </MediaQuery>
              <MediaQuery device={'mobile'}>
              <BackCustomDef src={CustomMobile} alt="evo"></BackCustomDef>
              </MediaQuery>
              <MediaQuery device={'tablet'}>
              <BackCustomDef src={CustomDef} alt="evo"></BackCustomDef>
              </MediaQuery>
              <MediaQuery device={'defaultOnly'}>
              <BackCustomDef src={CustomDef} alt="evo"></BackCustomDef>
              </MediaQuery>

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
>>>>>>> Stashed changes
          </ContainerTwo>
        </ul>
      
    </Section>
  )
};
export default Conference;
