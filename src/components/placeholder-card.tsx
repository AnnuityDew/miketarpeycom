/** @jsx jsx */
import { jsx } from "theme-ui"
import "@shoelace-style/shoelace/dist/shoelace/shoelace.css"
import BackgroundImage from "gatsby-background-image"
import { OutboundShoelaceButton } from "../components/shoelace-items"

type placeholderDataType = {
  labelData: String
  linkData: String
  sizeData: String
}[]

type ButtonProps = {
  cardSectionHeight: String
  cardGridTemplateRows: String
  cardName: String
  cardInfo: String
  cardData: placeholderDataType
  imageData: Object
}

const PlaceholderCard = ({
  cardGridTemplateRows,
  cardName,
  cardInfo,
  cardData,
  imageData,
}: ButtonProps) => {
  const pluginImage = getImage(imageData);
  return (
    <div
      sx={{
        section: {
          display: "grid",
          minHeight: "100vh",
          fontWeight: "400",
          gridTemplateRows: cardGridTemplateRows,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <BgImage Tag="section" image={pluginImage}>
        <h2 sx={{ justifySelf: "center", alignSelf: "end" }}>{cardName}</h2>
        <span>{cardInfo}</span>
        {/* loop through array of card links to add a button for each */}
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
          {cardData.map(card => (
            <OutboundShoelaceButton
              key={card.labelData}
              label={card.labelData}
              url={card.linkData}
              slSize={card.sizeData}
              className="light-button"
            />
          ))}
        </div>
      </BgImage>
    </div>
  )
}

export default PlaceholderCard
