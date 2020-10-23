import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';

const links = [
  {
    id: 'github',
    href: 'https://github.com/dlbnco',
  },
  {
    id: 'stackoverflow',
    href: 'https://stackoverflow.com/users/4432910/mateus-ferreira',
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/dlbnco',
  },
  {
    id: 'soundcloud',
    href: 'https://soundcloud.com/dlbnco/likes',
  },
  {
    id: 'strava',
    href: 'https://www.strava.com/athletes/17408874',
  },
];

const Icon = styled.img`
  filter: invert(1);
`;

const InvisibleInput = styled.input`
  background: none;
  font-family: inherit;
  color: inherit;
  border: 0;
`;

const Contact = () => {
  return (
    <div>
      <Flex alignItems="center" mx={[-3, null, -2]} mb={3}>
        {links.map(item => (
          <Box px={[3, null, 2]} key={item.id}>
            <a href={item.href}>
              <Icon
                width="16"
                src={`https://simpleicons.org/icons/${item.id}.svg`}
              />
            </a>
          </Box>
        ))}
      </Flex>
      <p>
        <span role="img" aria-label="love-letter">
          💌
        </span>{' '}
        <InvisibleInput value="mateus@dlbn.co" />
      </p>
    </div>
  );
};

export default Contact;
