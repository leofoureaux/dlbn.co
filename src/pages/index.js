import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import Layout from '../components/layout';
import Avatar from '../components/Avatar';
import About from '../components/About';
import Contact from '../components/Contact';
import Separator from '../components/Separator';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Meta from '../components/Meta';

const Section = styled(Box).attrs(() => ({
  as: 'section',
}))``;

const IndexPage = () => (
  <Layout>
    <Meta title="Mateus Dal Bianco" />
    <Section mb={4}>
      <Avatar />
    </Section>
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
