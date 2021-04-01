import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"
import { gridBreakpoints } from "../utils/breakpoints"

interface HeaderProps {
  h1text: string
}

const StyledHeaderDiv = styled.div`
  display: grid;
  ${gridBreakpoints("grid-template-columns", [
    { 0: "1fr" },
    { 800: "1fr 1fr" },
  ])}
  background-color: #FFFFFF;
`

const GradientText = styled.h1`
  background: conic-gradient(
    from 225deg at -100px -100px,
    #20b2aa,
    #135da5,
    #0d0895,
    #4b0082,
    #4b0082,
    #0d0895,
    #135da5,
    #20b2aa
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NewHeader = ({ h1text }: HeaderProps) => {
  return (
    <header>
      <StyledHeaderDiv>
        <GradientText>{h1text}</GradientText>
        <Navigation />
      </StyledHeaderDiv>
    </header>
  )
}

export default NewHeader
