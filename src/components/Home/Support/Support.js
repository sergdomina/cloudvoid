import {
  SupportSection,
  SupportContainer,
  Title,
  Box,
  BoxIMG,
  SupportLi,
  SupportUl,
} from './Support.styled';
import MediaQuery from 'components/MediaQuery';
import { Image } from '@chakra-ui/react';
import AppleStore from 'image/support/App_store_footer.svg';
import GooglePlay from 'image/support/Google_play_footer.svg';
import MacOS from 'image/support/MacOS_footer.svg';
import Windows from 'image/support/Windows_footer.svg';

const Support = () => {
  return (
    <SupportSection>
      <SupportContainer>
        <MediaQuery device={'mobile'}>
        <BoxIMG>
          <SupportUl>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={GooglePlay} htmlWidth="150px" alt="GooglePlay" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={AppleStore} htmlWidth="150px" alt="AppleStore" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
          </SupportUl>
        </BoxIMG>
        </MediaQuery>
        <MediaQuery device={'tablet'}>
        <Box>
          <Title>Please download SEEYOU here</Title>
        </Box>
        <BoxIMG>
          <SupportUl>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={Windows} htmlWidth="150px" alt="Windows" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={MacOS} htmlWidth="150px" alt="MacOS" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={GooglePlay} htmlWidth="150px" alt="GooglePlay" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={AppleStore} htmlWidth="150px" alt="AppleStore" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
          </SupportUl>
        </BoxIMG>
        </MediaQuery>
        <MediaQuery device={'default'}>
        <Box>
          <Title>Please download SEEYOU here</Title>
        </Box>
        <BoxIMG>
          <SupportUl>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={Windows} htmlWidth="150px" alt="Windows" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={MacOS} htmlWidth="150px" alt="MacOS" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={GooglePlay} htmlWidth="150px" alt="GooglePlay" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
            <SupportLi>
              <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <Image src={AppleStore} htmlWidth="150px" alt="AppleStore" />
              </a>
              {/* <Play src={PlayImg} /> */}
            </SupportLi>
          </SupportUl>
        </BoxIMG>
        </MediaQuery>
      </SupportContainer>
      {/*
      <Container>
          <Discriptionltd>
          SEEYOU LLC, The CHQ Building, Custom House Quay, Dublin 1, D01 Y6H7 Ireland
          </Discriptionltd>
      </Container>
      */}
    </SupportSection>
  );
};
export default Support;
