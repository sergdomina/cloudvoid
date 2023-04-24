import {
  Section,
  Title,
  DiscriptionCenter,
  Region,
  Container,
  RegionNA,
  RegionSA,
  RegionE,
  RegionAsia,
  RegionME,
  RegionAfrica,
  RegionAu
} from './Conference.styled';
import { Image} from '@chakra-ui/react';
import NorthAmerica from '../Map/NorthAmerica/NorthAmerica';
import SouthAmerica from 'components/Map/SouthAmerica/SouthAmerica';
import Europe from 'components/Map/Europe/Europe';
import Asia from 'components/Map/Asia/Asia';
import MiddleEast from 'components/Map/MiddleEaste/MiddleEast';
import Africa from 'components/Map/Africa/Africa';
import Australia from 'components/Map/Australia/Australia';
import MediaQuery from 'components/MediaQuery/MediaQuery';
import Bestex from 'image/Customer_Section/BestEx.png'
import Bavelle from 'image/Customer_Section/Bavelle.png'
import SCS from 'image/Customer_Section/SCS.png'
import LyonStahl from 'image/Customer_Section/Lyon.svg'
import GearHost from 'image/Customer_Section/GearHost.svg'

const Conference = () => {
 
  return (
    <Section >
      <Container >
      <Title>Our Clients</Title>
          <DiscriptionCenter>
          Click on the area of the world to see the clients
          </DiscriptionCenter>
          <MediaQuery device={"mobile"}>
            <div>
            <Title>North America</Title>
               <ul>
                  <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  borderBottom: '1px solid #3E3D4A',
                  height:'48px',
                  padding: '5px'}}>
                     <p style={{fontSize:'14px'}}>Bestex</p>
                     <img src={Bestex} style={{height: '32px'}} />
                  </li>
                  <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  borderBottom: '1px solid #3E3D4A',
                  height:'48px',
                  padding: '5px'}}>
                     <p style={{fontSize:'14px'}}>Bevelle</p>
                     <img src={Bavelle} style={{height: '32px'}} />
                  </li>
                  <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  borderBottom: '1px solid #3E3D4A',
                  height:'48px',
                  padding: '5px'}}>
                     <p style={{fontSize:'14px'}}>SCS</p>
                     <img src={SCS} style={{height: '32px'}} />
                  </li>
                  <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  borderBottom: '1px solid #3E3D4A',
                  height:'48px',
                  padding: '5px'}}>
                     <p style={{fontSize:'14px'}}>LyonStahl</p>
                     <img src={LyonStahl} style={{height: '32px'}} />
                  </li>
                  <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  borderBottom: '1px solid #3E3D4A',
                  height:'48px',
                  padding: '5px'}}>
                     <p style={{fontSize:'14px'}}>GearHost</p>
                     <img src={GearHost} style={{height: '32px'}} />
                  </li>
                  <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  borderBottom: '1px solid #3E3D4A',
                  height:'48px',
                  padding: '5px'}}>
                     <p style={{fontSize:'14px'}}>GearHost</p>
                     <img src={GearHost} style={{height: '32px'}} />
                  </li>
               </ul>
            </div>
          </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <div style={{position:'relative', margin: '0 auto'}}>
             
             <RegionNA href='./'>
                <NorthAmerica/>
             </RegionNA>
             <RegionSA>
                <SouthAmerica/>
             </RegionSA>
             <RegionE>
                <Europe/>
             </RegionE>
             <RegionAsia>
                <Asia/>
             </RegionAsia>
             <RegionME>
                <MiddleEast/>
             </RegionME>
             <RegionAfrica>
                <Africa/>
             </RegionAfrica>
             <RegionAu>
                <Australia/>
             </RegionAu>
          </div>
   
       </MediaQuery>
      </Container>
    </Section>
  )
};
export default Conference;
