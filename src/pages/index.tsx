import * as React from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
import { Text, Heading, Link, Container } from 'theme-ui'
import Layout from '../components/Layout'
// import getStats, { Book } from '../utils/getStats'
//import pluralize from '../utils/pluralize'

const IndexPage: React.FC = () => {

  return (
    <Layout>
      <Container>
        <Text variant="section-heading" mb={3}>
          Intro
        </Text>

        {/* The `Text` wrapper makes sure spaces are consistently sized */}
        <Text variant="site-intro" sx={{ display: 'contents' }}>
          <Heading as="h1" variant="site-intro" sx={{ fontWeight: 'bold' }}>
            My name is Alan Hylands. <br />I am a data analyst and writer from Northern Ireland.
          </Heading>{' '}<br /><br />
          <Heading as="h2" variant="site-intro">
            Currently, I&rsquo;m a senior decision scientist at {' '}
            <Link href="https://zapier.com/">Zapier</Link>.
          </Heading>{' '}
          <br />
          <Text as="p" variant="site-intro">
            I also interview data analysts at {' '}<Link href="https://analystsassemble.com/">Analysts Assemble</Link>.
            <br />
            And I help them get started learning SQL with my online {' '}<Link href="https://sqlcrashcourse.com/">SQL Crash Course</Link>.
          </Text>
        </Text>
      </Container>
    </Layout>
  )
  }

export default IndexPage
