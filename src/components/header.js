import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { space, fontSize } from "styled-system";

const Wrapper = styled.header`
  ${space}
`;

const Title = styled.h1.attrs(() => ({
  fontSize: 5,
  px: 2,
  py: 1,
}))`
  ${fontSize}
  ${space}
  background: black;
  display: inline;
  border: 2px solid white;
`;

const Header = ({ siteTitle, ...props }) => (
  <Wrapper {...props}>
    <Title>{siteTitle}</Title>
  </Wrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
