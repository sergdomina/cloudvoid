import {
  Section,
  Discription,
  ConferenceItem,
} from './Conference.styled';


import Container from '../../Container';
import GlobalBox from '../../GlobalBox';


const Conference = () => {

  return (
    <Section >
      <>
      <Container>
        <ul>
          
        <ConferenceItem style={{position: 'relative'}}>
              <GlobalBox>
                <Discription style={{position: 'relative'}}>
                The modern-day Internet is no different. It would have never happened without the hundreds of thousands of miles of cables spanned across oceans, mountains and continents.
                </Discription>
                <Discription>
                New York City is one of the biggest marvels of modern infrastructure. It has an underground city of pipes, tunnels and rail systems connecting a population of over 8 million, making it a global center for business, arts and innovation.
                </Discription>
                <Discription>
                Information Technology Infrastructure follows the same paradigm.
                </Discription>
              </GlobalBox>
              <GlobalBox>
                <Discription style={{position: 'relative'}}>
                Cloudvoid was founded by Sabrin Freedman-Alexander, a 14-year Information Technology veteran that has helped more than 400 institutions, ranging from startups to energy, healthcare, and government enterprises, overcome complex projects and technical burdens. 
                </Discription>
                <Discription>
                After spending thousands of hours being the trusted advisor of such enterprises, the time had come for him to scale his reach and vision for a more unified and innovative global infrastructure by creating his own company, training and advising a distributed team of experts in global level best practices and innovative infrastructure architectures.
                </Discription>
              </GlobalBox>
        </ConferenceItem>
        </ul>
      </Container>
      </>
</Section>
  )};

  
  export default Conference;
