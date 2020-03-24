import React from 'react'
import { Link } from 'rebass'
import { Link as GatsbyLink } from 'gatsby'
// import Image from "../MarkdownContent/components/Image"

// src\components\MarkdownContent\components\Image.jsx
const mystyle = {
  color: 'white',
  backgroundColor: 'orange',
  padding: '5px',
  fontFamily: 'monospace',
  fontWeight: '600',
  fontSize: '15px',
}
const Logo = () => (
  <>
    {/* <Link
      as={GatsbyLink}
      to="/"
      tabIndex="-1"
      aria-hidden="true"
      color="orange"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 281 241"
        width="25"
        height="21"
        preserveAspectRatio="xMinYMid"
      >
        <title>Go to homepage</title>

      </svg>
    </Link> */}

    <Link
      variant="unstyled-link"
      as={GatsbyLink}
      to="/"
      tabIndex="-1"
      aria-hidden="true"
      sx={{
        display: ['none', 'inline'],
        color: 'black',
      }}
    >
      <p style={mystyle}> {'<nikhil.n />'}</p>
      <title>Go to homepage</title>
    </Link>
  </>
)

export default Logo
