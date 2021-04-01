import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

interface HelmetProps {
  titleTwo?: string
  description?: string
  url?: string
  urlImage?: string
}

const SEO = ({ titleTwo, description, url, urlImage }: HelmetProps) => {
  const siteMetadata = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt,
    siteUrl,
    siteDescription,
    siteLanguage,
    siteImage,
  } = siteMetadata
  const pageTitle = `mike tarpey${titleTwo}`;
  const pageDescription = description || siteDescription;
  const pageUrl = url || siteUrl;
  const pageUrlImage = urlImage || siteImage;


  return (
    <Helmet>
      <html lang={siteLanguage} />
      <title>{pageTitle}</title>
      <meta name="author" content="Mike Tarpey" />
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7a8cc0" />
      <meta name="msapplication-TileColor" content="#7a8cc0" />
      <meta name="theme-color" content="#7a8cc0" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageUrlImage} />
      <meta name="twitter:image" content={pageUrlImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* this next line is like a subheader on social media cards */}
      <meta property="og:site_name" content={pageUrl} />
    </Helmet>
  )
}

export default SEO
