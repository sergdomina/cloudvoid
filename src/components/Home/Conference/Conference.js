import {
  Section,
  HiddenTitle,
  SubTitle,
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
  BackEvo,
  BackCustom,
  Len,
  LenTitle,
  LenDis,
  DivEvo,
  DivLen,
  DivBecome,
  CentralDiv,
  GlobalBoxTwo
} from './Conference.styled';

import { Image} from '@chakra-ui/react';
import Acord from '../../Accordion/AcordionElement'
import Container from '../../Container';
import GlobalBox from '../../GlobalBox';
import GlobalImage from '../../GlobalImage';
import Build from 'image/conference/build.svg';
import Evo from 'image/conference/Rectangle 177.svg';
import Custom from 'image/conference/Group 291.svg';
import Lenovo from 'image/conference/lenovo.svg';
const Conference = () => {
  return (
    <Section>
      <Container>
        <HiddenTitle>Conference </HiddenTitle>
        <ul>
          <ConferenceItem>
            <GlobalImage>
            <Image src={Build} style={{marginLeft:'15%'}} alt="build" />
            </GlobalImage>
            <GlobalBox>
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
            </GlobalBox>
          </ConferenceItem>


          <ConferenceItem>
            <GlobalBox>
              <DivBecome>
              <SubTitle></SubTitle>
              <Discription>
              Cloudvoid becomes an extension of your team. Prefer to use chat? That is how we engage. Have your own Project Management software? We integrate with that. 
              </Discription>
              <Discription>
              We become your trusted advisor guiding every step of your cloud journey. Our most significant value is that we understand what drives your company. That is what guides us when we manage your cloud environment. Your critical moments are our critical moments too.
              </Discription>
              </DivBecome>
            </GlobalBox>
            <GlobalBox>
              <BackEvo src={Evo}  alt="evo"></BackEvo>
              <DivEvo>
              <SubTitle>What is Cloud Evolve?</SubTitle>
              <Discription>
              It's a spectrum of services, solutions, 
              frameworks, principles, and technologies crafted to help 
              businesses derive value from the cloud. We guide you through the entire cloud journey.
              </Discription>
              </DivEvo>
            </GlobalBox>
          </ConferenceItem>


          <ConferenceItemCenter style={{ backgroundColor: "#EFEFF0"}}>
            <Title> The Cloud Evolve Suite </Title>
            <DiscriptionCenter>
            Whether you are just starting your cloud journey or already have a mature IT environment, Cloud Evolve guides you on increasing your ROI and getting faster business results.
              </DiscriptionCenter>
              <Acord/>
          </ConferenceItemCenter>

          <ConferenceItemSolo >
            <SubTitleSolo>How Do We Make Cloud <br/> Evolve Possible?</SubTitleSolo>
          </ConferenceItemSolo>


          <ConferenceItem>
            <GlobalBox>
              <CentralDiv>
              <TitleDes> Diverse Technology Stack</TitleDes>
              <DiscriptionWithMargin>
              Cloud Evolve covers all cloud technologies, services, and solutions. We utilize industry best practices to ensure your business operations run efficiently.
              </DiscriptionWithMargin>
              <TitleDes>Proven Track Record</TitleDes>
              <DiscriptionWithMargin>
              We have collaborated with numerous businesses across all industries, which validates our standing as subject matter experts.
              </DiscriptionWithMargin>
              </CentralDiv>
            </GlobalBox>
            <GlobalBox>
              <CentralDiv>
              <TitleDes> Experienced & Dedicated Teams</TitleDes>
              <DiscriptionWithMargin>
              Our team draws years of industry experience, a rare combination of skill sets, and a burning passion for technology.
              </DiscriptionWithMargin>
              <TitleDes> Powerful Ecosystem Partners</TitleDes>
              <DiscriptionWithMargin>
              Partnering with the world's most innovative leaders, such as Microsoft, Google, and Amazon, enables us to find solutions for the toughest challenges.
              </DiscriptionWithMargin>
              </CentralDiv>
            </GlobalBox>
          </ConferenceItem>


          <ConferenceItem>
            <GlobalBoxTwo>
              <div>
              <SubTitle>Customer Success Stories And Case Studies</SubTitle>
              <Discription style={{ width:'auto'}}>
              See how Cloudvoid is helping businesses solve real-world problems in the advent of Industry 4.0.
              </Discription>
              </div>
            </GlobalBoxTwo>
            <GlobalBox>
              <BackCustom src={Custom} alt="evo"></BackCustom>
              
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

              <Discription>
              Our team draws years of industry experience, a rare combination of skill sets, and a burning passion for technology.
              </Discription>
              </DivLen>
            </GlobalBox>
          </ConferenceItem>

        </ul>
      </Container>
    </Section>
  )
};
export default Conference;
