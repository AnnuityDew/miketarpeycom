import React from "react"
import { Link } from "gatsby"
import useNavMetadata from "../hooks/use-nav-metadata"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const StyledListLink = styled(Link)`
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

const ListLink = props => (
  <StyledListLink to={props.to}>{props.children}</StyledListLink>
)

const TopRightNav = styled.nav`
  place-self: center end;
  ${breakpoints("display", "", [{ 0: "none" }, { 800: "block" }])}
`

const NavList = styled.ul`
  display: flex;
  flex-direction: columns;
  padding: 20px 25px;
`

const NavItem = styled.ul`
  font-weight: 700;
  display: flex;
  flex-direction: columns;
  margin: 0 0 0 25px;
`

const Navigation = () => {
  const { navMetadata } = useNavMetadata()

  return (
    <TopRightNav>
      <NavList>
        {navMetadata.map(navItem => (
          <NavItem key={navItem.slug}>
            <ListLink to={navItem.slug}>{navItem.name}</ListLink>
          </NavItem>
        ))}
      </NavList>
    </TopRightNav>
  )
}

export default Navigation
