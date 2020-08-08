import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useLocation } from '@reach/router'
import { Box, Flex, Container, NavLink } from 'theme-ui'
import { ThemeUIProps } from '../../types/ThemeUIComponent'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'
import ColorModeToggle from './ColorModeToggle'

const Nav: React.FC<ThemeUIProps> = ({ sx, ...props }) => {
  const location = useLocation()

  return (
    <Box
      as="nav"
      sx={{
        borderTop: 4,
        borderColor: 'primary',
        paddingTop: [4, null, 5],
        ...sx,
      }}
      {...props}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SkipNavLink />

        <Logo />

        <Flex sx={{ alignItems: 'center' }}>
          <Flex as="ul">

            <li>
              <GatsbyLink
                to="/about/"
                data-active={
                  location.pathname.includes('/about') ? true : null
                }
              >
                <NavLink as="span" mr={[1, 2]}>
                  About
                </NavLink>
              </GatsbyLink>
            </li>

            <li>
              <GatsbyLink
                to="/projects/"
                data-active={
                  location.pathname.includes('/projects') ? true : null
                }
              >
                <NavLink as="span" mr={[1, 2]}>
                  Projects
                </NavLink>
              </GatsbyLink>
            </li>

            <li>
              <GatsbyLink
                to="/writing/"
                data-active={location.pathname.includes('/writing') ? true : null}
              >
                <NavLink as="span">Writing</NavLink>
              </GatsbyLink>
            </li>
          </Flex>

          <ColorModeToggle ml={[2, 3]} />
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
