import * as React from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
import { Text, Heading, Link, Container } from 'theme-ui'
import Layout from '../components/Layout'
// import getStats, { Book } from '../utils/getStats'
//import pluralize from '../utils/pluralize'

const AboutPage: React.FC = () => {

  return (
    <Layout>
      <Container>
        <Text variant="section-heading" mb={3}>
          About
        </Text>
        <img
                style={{
                  maxWidth: 240,
                  borderRadius: '50%',
                }}
                src="/alan-tuscany.jpg" alt="Alan Hylands in Tuscany, July 2017"
              />

        {/* The `Text` wrapper makes sure spaces are consistently sized */}
        <Text sx={{ display: 'contents' }}>
          <Text as="p">
              <h2>Who I am.</h2>
          My name is Alan Hylands and I am a data analyst and writer from Northern Ireland.

        <h2>What I've done.</h2>
          I've worked in tech, data and analytics for nearly 20 years - building, reporting, analysing, managing and mentoring.

                <h2>I have:</h2>
                
                <ul>
                    <li>Helped nurses provide better care for their patients by more accurately recording and reporting their treatments.</li>
                    <li>Allowed small local businesses to successfully sell their goods to all four corners of the globe from the comfort of their own homes.</li>
                    <li>Kept the savings of hundreds of thousands of ordinary people safe when the dark clouds of the financial crash loomed over us all.</li>
                    <li>Built Customer Lifetime Value models to segment customer bases and get to know the best customers better.</li>
                    <li>And much, much more (that I'm not allowed to tell about. Good old corporate NDAs.)</li>
                </ul>

                <h2>A little more background.</h2>

                I studied Accounting at university and planned for a future in finance.
                <br /><br />
                Then I found the internet, programming and databases.
                <br /><br />
                I started my first e-commerce development agency in 2003. Since then I have worked on a number of small business start-ups in e-commerce, analytics, marketing, online research and content marketing.
                <br /><br />    
                I started a successful football website which gave me the opportunity to write professionally for the New York Times Company.
                <br /><br /> 
                Quite unexpectedly, I was seduced into the corporate world of banking and financial services in the boom-time mid-noughties.
                <br /><br /> 
                I spent over twelve years running Data and Analytics projects for a large UK and Ireland banking group. I worked my way up through the ranks from senior data analyst to senior analytics manager to Head of Retail Commercial Excellence.
                <br /><br /> 
                We operated as a small, highly skilled mini-consultancy, helping guide the business on getting most value out of their commercial data driven projects and programmes.
                <br /><br /> 
                In my own consulting work at Santinotech, I brought all of my technical, analytical and entrepreneurial experience to the table to get results for customers.
                <h2>What I'm doing now.</h2> 
                In early 2020, I joined <Link href="https://zapier.com">Zapier</Link> as a Senior Decision Scientist.
                <br /><br /> 
                I am also Technical Director at Cura Fitness, our family boutique fitness studio based in County Down, Northern Ireland.

                <h2>Where you can find me.</h2>
                I live in the same small town I grew up in with my beautiful and very talented wife and our two equally beautiful and talented daughters.
                <br /><br />
                You can contact or follow me on the links below.
          </Text>
        </Text>
      </Container>
    </Layout>
  )
  }

export default AboutPage
