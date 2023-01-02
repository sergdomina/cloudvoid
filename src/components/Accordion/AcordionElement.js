import {
  ChakraProvider,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import React from 'react';
// import GlobalImage from '../GlobalImage';
import Container from '../Container/Container.styled';
import { Questions, Answer, PartnersDiv, PartnersUl, PartnersLi, Section, DivAcord} from './Accordion.styled';

function Acord() {
  return (

    
      <ChakraProvider>
        <Box >
          <DivAcord>
          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderTop="1px solid #3E3D4A"
              backgroundColor="transparent">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',
                      boxShadow: 'none'
                    }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Cloud Ops</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>


          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderTop="1px solid #3E3D4A"
              backgroundColor="transparent">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>SecOps</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderTop="1px solid #3E3D4A"
              backgroundColor="transparent">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>FinOps</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderTop="1px solid #3E3D4A"
              backgroundColor="transparent">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Smart DevOps</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
            borderTop="1px solid #3E3D4A"
              backgroundColor="transparent">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Cloud Solutions Architecture</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
            borderTop="1px solid #3E3D4A"
            borderBottom="1px solid #3E3D4A"
              backgroundColor="transparent">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>SysOps</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Cloudvoid takes care of your day-day cloud operations so you can focus on running your business. We manage your workloads and IT services in the cloud to deliver on-demand scalability, security, resiliency, and accelerated automation.
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          </DivAcord>
        </Box>
      </ChakraProvider>

  );
}
export default Acord;
