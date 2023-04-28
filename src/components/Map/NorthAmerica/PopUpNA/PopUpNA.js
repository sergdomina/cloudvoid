import { PopLink, Link, PopButton, PopupBox } from './PopUp.styled';
import { Popup } from 'semantic-ui-react';
import { Title } from 'components/HeaderServices/Ready.styled';
import NorthAmerica from '../NorthAmerica';


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

const PopupNA = () => (
  <Popup
    content={
      <PopupBox>
            <Title>North America</Title>
            <div>
                <ul>
                     <li >
                        <img src={Bestex} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={Bavelle} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={SCS} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={LyonStahl} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={GearHost} style={{height: '60%'}} />
                     </li>
                     <li >
                        <img src={Comsol} style={{height: '50%'}} />
                     </li>
                     <li >
                        <img src={Csquared} style={{height: '60%'}} />
                     </li>
                     <li >
                        <img src={Lerner} style={{height: '50%'}} />
                     </li>
                     <li >
                        <img src={Apollo} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={Aspiris} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={AKBN} style={{height: '60%'}} />
                     </li>
                     <li >
                        <img src={SK} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={Metalink} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={Ryther} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={AmericaSea} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={Gemean} style={{height: '50%'}} />
                     </li>
                     <li >
                        <img src={DorCom} style={{height: '70%'}} />
                     </li>
                     <li >
                        <img src={Lenovo} style={{height: '32px'}} />
                     </li>
                     <li >
                        <img src={McLane} style={{height: '60%'}} />
                     </li>
                  </ul>
            </div>
      </PopupBox>
    }
    on={['focus', 'hover']}
    position="bottom center"
    pinned
    hoverable
    style={{ zIndex: '2' }}
    trigger={<PopButton><NorthAmerica/></PopButton>}
  />
);

export default PopupNA;

