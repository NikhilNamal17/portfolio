import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Box, Flex, Text, Heading, Link } from 'rebass'
import Header from '../components/Header'
import { useSiteMetadata } from '../utils/hooks'
import { dependencies } from '../../package-lock.json'

const SectionTitle = ({ children, ...props }) => (
  <Heading fontSize={[3, 4]} {...props}>
    {children}
  </Heading>
)

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

const Dep = ({ children, ...props }) => (
  <Flex as="p" alignItems="baseline" mt={3} mb={0} {...props}>
    {children}
  </Flex>
)

Dep.propTypes = {
  children: PropTypes.node.isRequired,
}

const DepLink = ({ children, ...props }) => (
  <Link variant="ui-link" fontSize={[2, 3]} fontWeight="semi-bold" {...props}>
    {children}
  </Link>
)

DepLink.propTypes = {
  children: PropTypes.string.isRequired,
}

const DepVer = ({ children, ...props }) => (
  <Text as="span" ml={3} fontFamily="monospace" {...props}>
    {children}
  </Text>
)

DepVer.propTypes = {
  children: PropTypes.string.isRequired,
}

const SanityCheck = ({ children, ...props }) => (
  <Text
    as="p"
    mt={3}
    mb={0}
    fontSize={[2, 3]}
    fontWeight="semi-bold"
    {...props}
  >
    {children}
  </Text>
)

SanityCheck.propTypes = {
  children: PropTypes.string.isRequired,
}

const ColophonPage = () => {
  const { title } = useSiteMetadata()

  const {
    preact: { version: preact },
    gatsby: { version: gatsby },
    '@mdx-js/mdx': { version: mdx },
    'sanitize.css': { version: sanitize },
    '@emotion/core': { version: emotion },
    rebass: { version: rebass },
    husky: { version: husky },
    'lint-staged': { version: lintStaged },
    eslint: { version: eslint },
    prettier: { version: prettier },
  } = dependencies

  return (
    <>
      <Helmet>
        <title>Colophon • {title}</title>
      </Helmet>

      <article>
        <Header>
          <Header.Title>Building Blocks</Header.Title>
        </Header>

        <Flex as="main" flexDirection={['column', 'column', 'row']}>
          <Box as="section" mr={[0, 0, 6]}>
            <SectionTitle>Functionality</SectionTitle>

            <Dep mt={4}>
              <DepLink href="https://preactjs.com">Preact</DepLink>{' '}
              <DepVer>{preact}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://gatsbyjs.org">Gatsby</DepLink>{' '}
              <DepVer>{gatsby}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://mdxjs.com/">MDX</DepLink>{' '}
              <DepVer>{mdx}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://csstools.github.io/sanitize.css/">
                sanitize.css
              </DepLink>{' '}
              <DepVer>{sanitize}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://emotion.sh/">emotion</DepLink>{' '}
              <DepVer>{emotion}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://rebassjs.org/">Rebass</DepLink>{' '}
              <DepVer>{rebass}</DepVer>
            </Dep>
          </Box>

          <Box as="section" mt={[5, 5, 0]} mr={[0, 0, 6]}>
            <SectionTitle>Infrastructure</SectionTitle>

            <Dep mt={4}>
              <DepLink href="https://netlify.com">Netlify</DepLink>
            </Dep>

            <Dep>
              <DepLink href="https://github.com">GitHub</DepLink>
            </Dep>

            <Dep>
              <DepLink href="https://github.com/typicode/husky">husky</DepLink>{' '}
              <DepVer>{husky}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://github.com/okonet/lint-staged">
                lint-staged
              </DepLink>{' '}
              <DepVer>{lintStaged}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://eslint.org/">ESLint</DepLink>{' '}
              <DepVer>{eslint}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://prettier.io/">Prettier</DepLink>{' '}
              <DepVer>{prettier}</DepVer>
            </Dep>
          </Box>

          <Box as="section" mt={[5, 5, 0]}>
            <SectionTitle>Sanity</SectionTitle>

            <SanityCheck mt={4}>Music</SanityCheck>

            <SanityCheck>Coffee</SanityCheck>

            <SanityCheck>Beer</SanityCheck>

            <SanityCheck>Mexican Food</SanityCheck>

            <SanityCheck>Skateboarding</SanityCheck>

            <SanityCheck>Basketball</SanityCheck>
          </Box>
        </Flex>
      </article>
    </>
  )
}

export default ColophonPage
