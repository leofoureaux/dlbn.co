import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

import Layout from '../components/layout';
import Avatar from '../components/Avatar';
import About from '../components/About';
import Contact from '../components/Contact';
import Separator from '../components/Separator';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Meta from '../components/Meta';
import { Link } from 'gatsby';
import Text from '../components/Text';

const Section = styled.section`
  ${space}
`;

const IndexPage = () => (
  <Layout>
    <Meta title="Mateus Dal Bianco" />
    <Section mb={4}>
      <Avatar />
    </Section>
    <Section mb={4}>
      <About />
    </Section>
    <Section>
      <Contact />
    </Section>
    <Separator my={4} width={['50%', '25%']} height={24} />
    <Projects />
    <Separator my={4} width={['50%', '25%']} height={24} />
    <Section>
      <Articles />
    </Section>
    <Separator my={4} width={['50%', '25%']} height={24} />
    <Section>
      <Link to="/art" style={{ display: 'inline-block' }}>
        <Text fontSize={[3, 4]}>art 🎨</Text>
      </Link>
    </Section>
  </Layout>
);

export default IndexPage;
