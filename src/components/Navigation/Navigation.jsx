import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Flex, Text } from 'rebass'
import List from '../List'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'

const NavText = ({ children, ...props }) => (
  <Text
    sx={{
      '.active &': {
        borderBottom: 3,
        borderColor: 'orange',
      },
    }}
    {...props}
  >
    {children}
  </Text>
)

NavText.propTypes = {
  children: PropTypes.node.isRequired,
}

const NavLink = ({ to, sx, children, ...props }) => {
  // the following props are coming from @reach/router, but ESLint
  // doesn't know that.
  /* eslint-disable react/prop-types */
  const isActive = ({ location, href, isPartiallyCurrent }) => {
    if (location.pathname === '/' && href === '/') {
      return { className: 'active' }
    } else if (isPartiallyCurrent && href !== '/') {
      return { className: 'active' }
    }

    return null
  }
  /* eslint-enable react/prop-types */

  // adding the className to the link with `getProps` overrides the className
  // that styled-components generates. this is massively annoying and i haven't
  // found a good workaround. not for lack of trying. here's what i've tried:
  //
  // 1. still set the class, adjust the css to be `&.active`. this overrides the
  //    css, as mentioned
  // 2. use `getProps` to set an arbitrary `active` prop, and use that to
  //    conditionally set the styles. the first part of this works. but the
  //    styles are never generated.
  // 3. various riffs on the above
  //
  // point is, this is the most i've been able to reduce the markup so far.
  return (
    <List.Item
      sx={{
        display: 'inline-block',

        '& + &': {
          marginLeft: 2,
        },

        a: {
          color: 'inherit',
          textDecoration: 'none',

          '&:hover': {
            color: 'orange',
          },
        },

        ...sx,
      }}
      {...props}
    >
      <Link to={to} getProps={isActive}>
        <NavText as="span" px={1} pb={1}>
          {children}
        </NavText>
      </Link>
    </List.Item>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  sx: PropTypes.object,
  children: PropTypes.string.isRequired,
}

const Navigation = () => (
  <Flex
    as="nav"
    alignItems="center"
    justifyContent="space-between"
    mt={[0, 2, 3]}
    mb={[5, 6]}
    sx={{
      position: 'relative',
    }}
  >
    <SkipNavLink />

    <Flex alignItems="center">
      <Logo />
    </Flex>

    <List fontSize={[0, 1]} fontFamily="monospace">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/projects/">Projects</NavLink>

      <NavLink to="/blog/">Blog</NavLink>

      <NavLink to="/about/">About</NavLink>
    </List>
  </Flex>
)

export default Navigation
