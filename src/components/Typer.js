import React from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import styled from "styled-components"
import { fontSize } from "styled-system"

const Text = styled.div`
  ${fontSize}
  display: inline;
`

const Typer = ({ noun, verbs, things, fontSize }) => {
  return (
    <Typist>
      <Text fontSize={fontSize}>{noun}&nbsp;</Text>
      {things.map((thing, index, arr) => {
        const verb = verbs[thing.verb]
        let previousVerb
        let nextVerb
        if (index === 0) {
          previousVerb = verbs[arr[arr.length - 1].verb]
          nextVerb = verbs[arr[index + 1].verb]
        } else if (index === arr.length - 1) {
          previousVerb = verbs[arr[index - 1].verb]
          nextVerb = verbs[arr[0].verb]
        } else {
          previousVerb = verbs[arr[index - 1].verb]
          nextVerb = verbs[arr[index + 1].verb]
        }
        return (
          <Text fontSize={fontSize} key={index}>
            {verb === previousVerb ? thing.name : `${verb} ${thing.name}`}
            <Typist.Backspace
              count={
                index === arr.length - 1
                  ? 0
                  : verb === nextVerb
                  ? thing.name.length
                  : thing.name.length + verb.length + 1
              }
              delay={768}
            />
          </Text>
        )
      })}
    </Typist>
  )
}

export default Typer
