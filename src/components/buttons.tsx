import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { Link } from "gatsby"

/* wrap shoelace button */
/*customElements.define("sl-button", SlButton)*/

type ButtonProps = {
  label: string
  url: string
  slSize: string
  className: string
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
      <button size={slSize} class={className}>
        {label}
      </button>
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
      <button size={slSize} class={className}>
        {label}
      </button>
    </OutboundLink>
  </div>
)
