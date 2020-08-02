import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Flex, Grid, Text, Container, Heading, Link } from 'theme-ui'
import Layout from '../components/Layout'
//import Inline from '../components/Inline'
import { Header, HeaderName, HeaderTitle } from '../components/Header'

interface NowInter {
  title: string
  description?: string
}

const NowPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allNowJson {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  `)

  const nowData = data.allNowJson.edges

  return (
    <Layout>
      <Helmet>
        <title>Now</title>
      </Helmet>

      <Header>
        <HeaderName>/now</HeaderName>

        <HeaderTitle>What I’m doing now, inspired by Derek Sivers.</HeaderTitle>
      </Header>

      <Container as="main" mt={5}>
        <Grid columns={[null, 2]} gap={5}>
          {nowData.map(({ node }: { node: NowInter }) => {
            const { title, description } = node
            return (
              <Flex
                key={title}
                sx={{ position: 'relative', alignItems: 'baseline' }}
              >
                <Text
                  aria-hidden
                  variant="heading"
                  sx={{
                    position: [null, null, 'absolute'],
                    right: '100%',
                    marginRight: 3,
                    color: 'muted-text',
                    userSelect: 'none',
                  }}
                >
                  
                </Text>

                <Box>
                  <Heading>
                    <Link variant="ui">
                      {title}
                    </Link>
                  </Heading>

                  {description && (
                    <Text as="p" sx={{ maxWidth: 'measure', marginTop: 2 }}>
                      {description}
                    </Text>
                  )}

                </Box>
              </Flex>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default NowPage
