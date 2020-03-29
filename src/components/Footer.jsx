import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, Text, Link } from 'rebass'
import ArrowLink from './ArrowLink'
import List from './List'

const SocialLink = ({ href, sx, children, ...props }) => (
  <List.Item
    sx={{
      display: 'inline-block',

      '& + &': {
        marginLeft: 3,
      },

      ...sx,
    }}
    {...props}
  >
    <Link variant="ui-link" href={href} fontSize={[0, 1]}>
      {children}
    </Link>
  </List.Item>
)

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  sx: PropTypes.object,
  children: PropTypes.string.isRequired,
}

const Footer = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const post = data.allMdx.edges[0].node

  return (
    <Text
      as="footer"
      fontFamily="monospace"
      mt="auto"
      mb={[3, 3, 4]}
      {...props}
    >
      <Flex
        alignItems="center"
        justifyContent={['center', 'center', 'space-between']}
      >
        {/* <Box sx={{ display: ['none', 'none', 'block'] }}>
          <Text as="span" mr={2}>
            From the blog:
          </Text>

          <ArrowLink fontWeight="bold" to={post.fields.slug}>
            {post.frontmatter.title}
          </ArrowLink>
        </Box> */}

        <List>
          <SocialLink href="https://twitter.com/Nikhil17_namal">
            Twitter
          </SocialLink>

          <SocialLink href="https://github.com/NikhilNamal17">
            GitHub
          </SocialLink>

          <SocialLink href="https://www.linkedin.com/in/nikhil-namal17">
            LinkedIn
          </SocialLink>

          <SocialLink href="https://bit.ly/nikhil-namal-resume">
            R&eacute;sum&eacute;
          </SocialLink>
        </List>
      </Flex>
    </Text>
  )
}

export default Footer
