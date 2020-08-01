import * as React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { Box, Grid, Text, Container, Link } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface LinkProps {
  to?: string
  href?: string
}

const FooterLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const WrapperComponent = to ? GatsbyLink : 'a'

  return (
    <WrapperComponent to={to} {...props}>
      <Link as="span" variant="ui">
        {children}
      </Link>
    </WrapperComponent>
  )
}

const Footer: React.FC<ThemeUIProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
        edges {
          node {
            frontmatter {
              title
              description
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
    <Box as="footer" bg="muted" py={5} {...props}>
      <Container>
        <Grid
          gap={[4, 3]}
          columns={['repeat(2, minmax(max-content, 8rem))', '1fr 1fr 3fr']}
          sx={{ justifyContent: ['center', 'start'] }}
        >
          <Box>
            <Text variant="section-heading" mb={3}>
              Site
            </Text>

            <Box as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
              <li>
                <FooterLink to="/now">/now</FooterLink>
              </li>

              <li>
                <FooterLink to="/projects">Projects</FooterLink>
              </li>

              <li>
                <FooterLink to="/about">About</FooterLink>
              </li>

              <li>
                <FooterLink to="/articles">Articles</FooterLink>
              </li>

            </Box>
          </Box>

          <Box>
            <Text variant="section-heading" mb={3}>
              Links
            </Text>

            <Box as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
              <li>
                <FooterLink href="https://github.com/santino79">
                  GitHub
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://twitter.com/alanhylands">
                  Twitter
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://linkedin.com/in/alanhylands">
                  LinkedIn
                </FooterLink>
              </li>

              <li>
                <FooterLink href="mailto:alan@alanhylands.com">
                  Email
                </FooterLink>
              </li>
            </Box>
          </Box>

          <Box sx={{ display: ['none', 'block'] }}>
            <Text variant="section-heading" mb={3}>
              Latest Post
            </Text>

            <GatsbyLink to={post.fields.slug}>
              <Link
                as="span"
                variant="ui"
                sx={{
                  fontSize: 5,
                  fontWeight: 'bold',
                  lineHeight: 'heading',
                  textDecoration: 'none',
                }}
              >
                {post.frontmatter.title}
              </Link>
            </GatsbyLink>

            {/* <Text as="p" sx={{ maxWidth: 'measure', marginTop: 1 }}>
              {post.frontmatter.description}
            </Text> */}
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
