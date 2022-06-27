import React from 'react';
import { DiFirebase, DiReact, DiNetbeans } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
     <SectionDivider />
     <br />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>
       I've worked with a wide range of technologies in the IT and Web development eco system.
       Front and Backend, Smart Contracts and Dapps. 
     </SectionText>
     <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Bootstrap, HTML, Tailwind CSS <br />
            JavaScript, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            MySQL, PHP, <br />
            Node.js, Mongo DB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNetbeans size="3rem" />
        <ListContainer>
          <ListTitle>Block-Chain</ListTitle>
          <ListParagraph>
            Solidity, Motoko, <br />
            Hardhat, Ganache 
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
  </Section>
);

export default Technologies;
