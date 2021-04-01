import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

interface CardProps {
  internal?: boolean
  label?: string
  children?: React.ReactNode
  imagesrc: ImageDataLike
  imagealt: string
  gridrowcss?: string
}

const IndexGlassDiv = styled.section`
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: ${props => props.gridTemplateRows || "3fr 1fr 2fr 1fr"};
  align-items: stretch;
  min-height: ${props => props.minHeight};
  height: 60vh;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`

/* images that fill container
https://stackoverflow.com/questions/14142378/
how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
*/

const CoverPicDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(31, 38, 135, 0.7),
    -5px 5px 10px rgba(31, 38, 135, 0.7);
`

const CoverGatsbyImage = styled(GatsbyImage)`
  min-width: 100%;
  min-height: 100%;
  opacity: 100%;
`

const Cardh2 = styled.h2`
  place-self: end start;
`

export const NavCard = ({
  internal,
  label,
  children,
  imagesrc,
  imagealt,
  gridrowcss,
}: CardProps) => {
  const image = getImage(imagesrc)
  if (internal === true) {
    return (
      <IndexGlassDiv minHeight="400px" gridTemplateRows={gridrowcss}>
        <CoverPicDiv>
          <CoverGatsbyImage image={image} alt={imagealt} />
        </CoverPicDiv>
        <Cardh2>{label}</Cardh2>
        {children}
      </IndexGlassDiv>
    )
  } else {
    return (
      <IndexGlassDiv minHeight="400px" gridTemplateRows={gridrowcss}>
        <CoverPicDiv>
          <CoverGatsbyImage image={image} alt={imagealt} />
        </CoverPicDiv>
        <Cardh2>{label}</Cardh2>
        {children}
      </IndexGlassDiv>
    )
  }
}

const MeGlassDiv = styled.section`
  padding: 20px;
  min-height: ${props => props.minHeight || "40vh"};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`

const ContactDiv = styled.section`
  display: flex;
  align-items: center;
`

const FullGatsbyImage = styled(GatsbyImage)`
  width: 40%;
  align-self: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

const MarginList = styled.ul`
  margin: 0 10px;
`

export const MeCard = ({ imagesrc, imagealt }: CardProps) => {
  const image = getImage(imagesrc)
  return (
    <MeGlassDiv>
      <ContactDiv>
        <FullGatsbyImage image={image} alt={imagealt} />
        <MarginList>
          <li>
            <b>Mike Tarpey</b>
          </li>
          <li>
            <a href="mailto:mike@tarpey.dev">📧 mike@tarpey.dev</a>
          </li>
        </MarginList>
      </ContactDiv>
      <p>
        In my day-to-day as an Associate Actuary at Genworth Financial, I
        analyze the performance of our long-term care insurance block, manage
        projects, and synthesize many of our team's findings for leadership. I
        also serve as a resource to other internal teams looking to automate or
        modernize their processes with Python.
      </p>
      <p>
        I consider myself a non-traditional actuary at this point in my career.
        After rediscovering a lifelong passion for developing, my goal is to
        push as far as I can into the data / software engineering space and see
        what new ideas I can contribute to the world! To that end, I'll be
        pursuing a graduate degree starting in the fall of 2021.
      </p>
    </MeGlassDiv>
  )
}
