import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface ButtonProps {
  label: string
  url: string
  kind: string
}

export const StyledButton = styled.button`
  place-items: center;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  padding: 1rem 1rem;
  border-radius: 3px;
  transition: 0.3s;
  background: rgba(0, 0, 0, 0.4);
  &:hover {
    background: rgba(70, 70, 70, 0.8);
  }
  ${props => {
    if (props.kind === "dark") {
      return `
        color: black;
        border: 2px solid black;
      `
    } else {
      return `
        color: white;
        border: 2px solid white;
      `
    }
  }}
`

export const InternalShoelaceButton = ({
  label,
  url,
  kind,
}: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <Link to={url}>
      <StyledButton kind={kind}>
        {label}
      </StyledButton>
    </Link>
  </div>
)

export const OutboundShoelaceButton = ({
  label,
  url,
  kind,
}: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <OutboundLink href={url}>
      <StyledButton kind={kind}>
        {label}
      </StyledButton>
    </OutboundLink>
  </div>
)
