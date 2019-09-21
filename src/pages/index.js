import React from 'react';
import { fontSize } from 'styled-system';
import styled from 'styled-components';
import { Box } from 'rebass';

import Layout from '../components/layout';
import Avatar from '../components/Avatar';
import Typer from '../components/Typer';
import About from '../components/About';
import Contact from '../components/Contact';
import Separator from '../components/Separator';
import Projects from '../components/Projects';
import Articles from '../components/Articles';

const StyledTyper = styled(Typer)`
  ${fontSize}
`;

const Section = styled(Box).attrs(() => ({
  as: 'section',
}))``;

const IndexPage = () => (
  <Layout>
    <Section mb={4}>
      <Avatar />
    </Section>
    <Section mb={4}>{/* <StyledTyper fontSize={[4, 5]} /> */}</Section>
    <Section mb={5}>
      <About />
    </Section>
    <Section>
      <Contact />
    </Section>
    <Separator my={5} width={['50%', '25%']} height={24} />
    <Projects />
    <Separator my={5} width={['50%', '25%']} height={24} />
    <Section>
      <Articles />
    </Section>
  </Layout>
);

export default IndexPage;
