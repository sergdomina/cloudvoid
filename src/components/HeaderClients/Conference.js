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
  RegionAu,
  DivListMobile
} from './Conference.styled';

import NorthAmerica from '../Map/NorthAmerica/NorthAmerica';
import SouthAmerica from 'components/Map/SouthAmerica/SouthAmerica';
import Europe from 'components/Map/Europe/Europe';
import Asia from 'components/Map/Asia/Asia';
import MiddleEast from 'components/Map/MiddleEaste/MiddleEast';
import Africa from 'components/Map/Africa/Africa';
import Australia from 'components/Map/Australia/Australia';
import MediaQuery from 'components/MediaQuery/MediaQuery';

import PopupNA from 'components/Map/NorthAmerica/PopUpNA/PopUpNA';

import Acteno from 'image/Customer_Section/ActenoCarusel.png';
import Amnis from 'image/Customer_Section/AmnisCarusel.png';
import Ingram from 'image/Customer_Section/IngramCarusel.png';
import Lenovo from 'image/Customer_Section//LenovoCarusel.png';
import Insfocus from 'image/Customer_Section/insfocus.svg';
import TelAviv from 'image/Customer_Section/TelavivUn.png';
import Metalink from 'image/Customer_Section/MetalinkCarusel.png';
import Israel from 'image/Customer_Section/Israel_electric_co_carusel.png';
import Bavelle from 'image/Customer_Section/BavelleCarusel.png';
import Ryther from 'image/Customer_Section/RytherCarusel.png';
import Elementor from 'image/Customer_Section/Elementor.png';
import Bestex from 'image/Customer_Section/BestEx.png';
import AKBN from 'image/Customer_Section/AKBN.png';
import SK from 'image/Customer_Section/SK.png';
import SCS from 'image/Customer_Section/SCS.png';
import Aspiris from 'image/Customer_Section/Aspiris-logo 4.png';
import Sasa from 'image/Customer_Section/SasaSOftware.png';
import AmericaSea from 'image/Customer_Section/AmericanSeaFood.png';
import McLane from 'image/Customer_Section/McLane.png';
import Gemean from 'image/Customer_Section/GEMEAN.png';
import Apollo from 'image/Customer_Section/Apollo.png';
import TechNet from 'image/Customer_Section/TechNet.png';
import DocStribute from 'image/Customer_Section/DocStribute.png';
import DorCom from 'image/Customer_Section/DORCOM.png';
import Lerner from 'image/Customer_Section/Lerner.png';
import LyonStahl from 'image/Customer_Section/Lyon.png';
import GearHost from 'image/Customer_Section/GearHost.svg';
import Csquared from 'image/Customer_Section/c-squared.png';
import Comsol from 'image/Customer_Section/Comsol.png';

const Conference = () => {
 
  return (
    <Section >
      <Container >
      <Title>Our Clients</Title>
          <DiscriptionCenter>
          Click on the area of the world to see the clients
          </DiscriptionCenter>
          <MediaQuery device={"mobile"}>
            <DivListMobile>
              <div>
                  <Title>North America</Title>
                  <ul>
                     <li >
                        <p style={{fontSize:'14px'}}>Bestex</p>
                        <img src={Bestex} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Bevelle</p>
                        <img src={Bavelle} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>SCS</p>
                        <img src={SCS} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>LyonStahl</p>
                        <img src={LyonStahl} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>GearHost</p>
                        <img src={GearHost} style={{height: '60%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Comsol</p>
                        <img src={Comsol} style={{height: '50%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Csquared</p>
                        <img src={Csquared} style={{height: '60%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Lerner Solutions</p>
                        <img src={Lerner} style={{height: '50%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Apollo Fintech</p>
                        <img src={Apollo} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Aspiris</p>
                        <img src={Aspiris} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>AKBNET</p>
                        <img src={AKBN} style={{height: '60%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>SK Diamonds</p>
                        <img src={SK} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Metalink</p>
                        <img src={Metalink} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Ryther</p>
                        <img src={Ryther} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>US SeaFoods</p>
                        <img src={AmericaSea} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Gemean</p>
                        <img src={Gemean} style={{height: '50%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Dorcom</p>
                        <img src={DorCom} style={{height: '70%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Lenovo</p>
                        <img src={Lenovo} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>McLane Intel</p>
                        <img src={McLane} style={{height: '60%'}} />
                     </li>
                  </ul>
              </div>
              <div>
                  <Title>Europe</Title>
                  <ul>
                     <li >
                        <p style={{fontSize:'14px'}}>TechNet</p>
                        <img src={TechNet} style={{height: '60%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Amnis</p>
                        <img src={Amnis} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Acteno Energy</p>
                        <img src={Acteno} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Docstribute</p>
                        <img src={DocStribute} style={{height: '32px'}} />
                     </li>
                  </ul>
              </div>
              <div>
                  <Title>Middle East</Title>
                  <ul>
                     <li >
                        <p style={{fontSize:'14px'}}>Tel-Aviv University</p>
                        <img src={TelAviv} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>IEC</p>
                        <img src={Israel} style={{height: '32px'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>InsFocus</p>
                        <img src={Insfocus} style={{height: '50%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>Dorcom</p>
                        <img src={DorCom} style={{height: '60%'}} />
                     </li>
                     <li >
                        <p style={{fontSize:'14px'}}>SasaSOftware</p>
                        <img src={Sasa} style={{height: '32px'}} />
                     </li>
                  </ul>
              </div>
            </DivListMobile>
          </MediaQuery>
       <MediaQuery device={'tabletUp'}>
          <div style={{position:'relative', margin: '0 auto'}}>
             
             <RegionNA>
                <PopupNA/>
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
