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
  RegionME
} from './Conference.styled';
import { Image} from '@chakra-ui/react';
import NorthAmerica from '../Map/NorthAmerica/NorthAmerica';
import SouthAmerica from 'components/Map/SouthAmerica/SouthAmerica';
import Europe from 'components/Map/Europe/Europe';
import Asia from 'components/Map/Asia/Asia';
import MiddleEast from 'components/Map/MiddleEaste/MiddleEast';



const Conference = () => {
 
  return (
    <Section >
      <Container >
        
       <div style={{position:'relative'}}>
          <Title>Our Clients</Title>
          <DiscriptionCenter>
          Click on the area of the world to see the clients
          </DiscriptionCenter>
          <RegionNA>
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
       </div>

      </Container>
    </Section>
  )
};
export default Conference;
