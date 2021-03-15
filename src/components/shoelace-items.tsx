import "@shoelace-style/shoelace/dist/shoelace/shoelace.css"
import wrapCustomElement from "@shoelace-style/react-wrapper"
/*import { SlButton } from "@shoelace-style/shoelace"*/
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { Link } from "gatsby"

/* wrap shoelace button */
/*customElements.define("sl-button", SlButton)*/

type ButtonProps = {
  label: string;
  url: string;
  slSize: string;
  className: string;
}

/*const ShoelaceButton = wrapCustomElement("sl-button")*/

export const InternalShoelaceButton = ({
  label,
  url,
  slSize,
  className,
}: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <Link to={url}>
      <sl-button size={slSize} class={className}>
        {label}
      </sl-button>
    </Link>
  </div>
)

export const OutboundShoelaceButton = ({
  label,
  url,
  slSize,
  className,
}: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <OutboundLink href={url}>
      <sl-button size={slSize} class={className}>
        {label}
      </sl-button>
    </OutboundLink>
  </div>
)
