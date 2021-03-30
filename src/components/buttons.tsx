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
  ${props => {
    if (props.kind === "dark") {
      return `
        color: black;
        background: rgba(155, 155, 155, 0.4);
        border: 2px solid black;
        &:hover {
          background: rgba(155, 155, 155, 1);
        }
      `
    } else {
      return `
        color: white;
        background: rgba(0, 0, 0, 0.4);
        border: 2px solid white;
        &:hover {
          background: rgba(70, 70, 70, 1);
        }
      `
    }
  }}
`

export const InternalShoelaceButton = ({ label, url, kind }: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <Link to={url}>
      <StyledButton kind={kind}>{label}</StyledButton>
    </Link>
  </div>
)

export const OutboundShoelaceButton = ({ label, url, kind }: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <OutboundLink href={url}>
      <StyledButton kind={kind}>{label}</StyledButton>
    </OutboundLink>
  </div>
)
