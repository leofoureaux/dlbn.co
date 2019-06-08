import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { space, fontSize } from "styled-system"

const Wrapper = styled.header`
  ${space}
`

const Title = styled.h1.attrs(() => ({
  fontSize: 5,
}))`
  ${fontSize}
`

const Header = ({ siteTitle, ...props }) => (
  <Wrapper {...props}>
    <Title>{siteTitle}</Title>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
