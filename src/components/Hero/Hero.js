import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi!, I'm Chris, Welcome To <br />
        My Portfolio Page
      </SectionTitle>
      <SectionText>
        I'm an experianced technologist in IT, System Intergration and Web2-3.0 
      </SectionText>
      <Button onClick={() => window.location ='https://cjwilliamstech.com'}>Learn More</Button>
    </LeftSection>
  </section>
 
);

export default Hero;