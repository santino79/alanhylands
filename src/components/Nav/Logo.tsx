/** @jsx jsx */
import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'

const Logo: React.FC = () => (
  <GatsbyLink
    to="/"
    tabIndex={-1}
    sx={{ display: 'inline', color: 'primary', textDecoration: 'none' }}
  >
<h2>Alan Hylands</h2>
  </GatsbyLink>
)

export default Logo
