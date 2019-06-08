import React from "react"
import { Flex, Box } from "rebass"
import styled from "styled-components"
import { fontSize, space } from "styled-system"
import messages from "../messages"

const Title = styled.h2`
  ${fontSize}
  ${space}
  display: inline-flex;
`

const Projects = () => {
  return (
    <Flex as="ul" flexDirection="column" m={-3}>
      {messages.projects.map(project => (
        <Box as="li" p={3} key={project.title}>
          <a href={project.url}>
            <Title mb={2} fontSize={4}>
              {project.title}
            </Title>
          </a>
          <p>{project.description}</p>
        </Box>
      ))}
    </Flex>
  )
}

export default Projects
