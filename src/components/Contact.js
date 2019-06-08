import React from "react";
import { Flex, Box } from "rebass";
import styled from "styled-components";

const links = [
  {
    id: "github",
    href: "https://github.com/dlbnco",
  },
  {
    id: "twitter",
    href: "https://twitter.com/dlbnco",
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/dlbnco",
  },
  {
    id: "medium",
    href: "https://medium.com/@dlbnco",
  },
  {
    id: "instagram",
    href: "https://instagram.com/dlbnco",
  },
];

const Icon = styled.img`
  filter: invert(1);
`;

const Contact = () => {
  return (
    <div>
      <Flex mx={-3} mb={3}>
        {links.map((item) => (
          <Box px={3} key={item.id}>
            <a href={item.href}>
              <Icon width="16" src={`https://simpleicons.org/icons/${item.id}.svg`} />
            </a>
          </Box>
        ))}
      </Flex>
      <p>mateus@dlbn.co</p>
    </div>
  );
};

export default Contact;
