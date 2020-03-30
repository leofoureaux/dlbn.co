import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import Layout from '../components/layout';
import About from '../components/About';
import Contact from '../components/Contact';
import Separator from '../components/Separator';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Meta from '../components/Meta';
import Art from '../components/Art';

const Section = styled.section`
  ${space}
`;

const IndexPage = () => (
  <Layout>
    <Meta title="Mateus Dal Bianco" />
    {/* <Section mb={4}>
      <Avatar />
    </Section> */}
    <Section pt={[3, 4, null, null, 5]}>
      <About />
    </Section>
    <Section>
      <Contact />
    </Section>
    <Separator my={[4, 5]} width={['50%', '25%']} height={24} />
    <Projects />
    <Separator my={[4, 5]} width={['50%', '25%']} height={24} />
    <Section>
      <Articles limit={3} />
    </Section>
    <Separator my={[4, 5]} width={['50%', '25%']} height={24} />
    <Section>
      <Art limit={2} itemWidth={[1, 1 / 2]} />
    </Section>
  </Layout>
);

export default IndexPage;
