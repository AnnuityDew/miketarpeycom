/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import {
  InternalShoelaceButton,
  OutboundShoelaceButton,
} from "./buttons"
import styled from 'styled-components'

interface contentDataType {
  labelData: string;
  linkData: string;
  sizeData: string;
}

interface ButtonProps {
  contentSectionHeight: string;
  contentGridTemplateRows: string;
  contentName: string;
  contentInfo: string;
  contentData: Array<contentDataType>;
  imageData: string;
}

interface FrontpageProps {
  contentSectionHeight: string;
  contentGridTemplateRows: string;
  labelData: string;
  subLabelData?: string;
  linkData: string;
  imageData: string;
}

interface CreditCardProps {
  contentName: string;
  contentInfo: string;
  contentData: Array<contentDataType>;
  fontColor: string;
  bgColor: string;
  borderColor: string;
  buttonType: string;
}

const BGSection = styled.section`
  ${props => {
    return `
    background-image: url(${props.imgsrc});
    background-position: center;
    background-size: cover;
    `
  }}
`

export const InternalContentCard = ({
  contentSectionHeight,
  contentGridTemplateRows,
  contentName,
  contentInfo,
  contentData,
  imageData,
}: ButtonProps) => {
  return (
    <div
      sx={{
        section: {
          display: "grid",
          minHeight: contentSectionHeight,
          fontWeight: "400",
          gridTemplateRows: contentGridTemplateRows,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <BGSection imgsrc={imageData}>
        <h2 sx={{ justifySelf: "center", alignSelf: "end" }}>{contentName}</h2>
        <span sx={{ textAlign: "center" }}>{contentInfo}</span>
        {/* loop through array of friend links to add a button for each */}
        <div
          sx={{
            justifySelf: "center",
            alignSelf: "start",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            div: { padding: "10px" },
          }}
        >
          {contentData.map(content => (
            <InternalShoelaceButton
              key={content.labelData}
              label={content.labelData}
              url={content.linkData}
              kind="light"
            />
          ))}
        </div>
      </BGSection>
    </div>
  )
}


export const OutboundContentCard = ({
  contentSectionHeight,
  contentGridTemplateRows,
  contentName,
  contentInfo,
  contentData,
  imageData,
}: ButtonProps) => {
  return (
    <div
      sx={{
        section: {
          display: "grid",
          minHeight: contentSectionHeight,
          fontWeight: "400",
          gridTemplateRows: contentGridTemplateRows,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <BGSection imgsrc={imageData}>
        <h2 sx={{ justifySelf: "center", alignSelf: "end" }}>{contentName}</h2>
        <span sx={{ textAlign: "center" }}>{contentInfo}</span>
        {/* loop through array of friend links to add a button for each */}
        <div
          sx={{
            justifySelf: "center",
            alignSelf: "start",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            div: { padding: "10px" },
          }}
        >
          {contentData.map(content => (
            <OutboundShoelaceButton
              key={content.labelData}
              label={content.labelData}
              url={content.linkData}
              kind="light"
            />
          ))}
        </div>
      </BGSection>
    </div>
  )
}

export const FrontpageInternalCard = ({
  contentSectionHeight,
  labelData,
  linkData,
  imageData,
}: FrontpageProps) => {
  return (
    <div
      sx={{
        section: {
          display: "flex",
          minHeight: contentSectionHeight,
          fontWeight: "400",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Link to={linkData}>
        <BGSection imgsrc={imageData}>
          <h1 className="home-click">{labelData}</h1>
        </BGSection>
      </Link>
    </div>
  )
}

export const FrontpageOutboundCard = ({
  contentSectionHeight,
  labelData,
  subLabelData,
  linkData,
  imageData,
}: FrontpageProps) => {
  return (
    <div
      sx={{
        section: {
          display: "flex",
          minHeight: contentSectionHeight,
          fontWeight: "400",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <OutboundLink href={linkData}>
        <BGSection imgsrc={imageData}>
          <h1 className="home-click">{labelData}</h1>
          <h3 className="home-click">{subLabelData}</h3>
        </BGSection>
      </OutboundLink>
    </div>
  )
}

export const CreditCard = ({
  contentName,
  contentInfo,
  contentData,
  fontColor,
  bgColor,
  borderColor,
  buttonType,
}: CreditCardProps) => {
  const acrossGridTemplate = "1fr / 1fr 2fr 1fr"
  const downGridTemplate = "1fr 1fr 1fr / 1fr"
  return (
    <div
      sx={{
        display: "grid",
        gridTemplate: [
          downGridTemplate,
          downGridTemplate,
          downGridTemplate,
          acrossGridTemplate,
          acrossGridTemplate,
        ],
        fontWeight: "400",
        minHeight: "20vh",
        justifyContent: "center",
        alignItems: "center",
        color: fontColor,
        background: bgColor,
        borderStyle: "none",
        borderColor: borderColor,
      }}
    >
      <h2
        sx={{
          justifySelf: "center",
          alignSelf: ["end", "end", "end", "center", "center"],
        }}
      >
        {contentName}
      </h2>
      <span sx={{ textAlign: "center" }}>{contentInfo}</span>
      {/* loop through array of friend links to add a button for each */}
      <div
        sx={{
          justifySelf: "center",
          alignSelf: ["start", "start", "start", "center", "center"],
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          div: { padding: "10px" },
        }}
      >
        {contentData.map(content => (
          <OutboundShoelaceButton
            key={content.labelData}
            label={content.labelData}
            url={content.linkData}
            kind={buttonType}
          />
        ))}
      </div>
    </div>
  )
}
