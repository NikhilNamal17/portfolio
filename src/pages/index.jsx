import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Heading } from 'rebass'
import Paragraph from '../components/Paragraph'
import Header from '../components/Header'
import ProjectPreview from '../components/ProjectPreview'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(limit: 1) {
        edges {
          node {
            title
            description
            website
            repo
          }
        }
      }
    }
  `)

  return (
    <article>
      <Header>
        <Header.Title>Hi! I&rsquo;m Nikhil&nbsp;Namal.</Header.Title>

        <Header.Subtitle mb={3}>
          I&rsquo;m a full stack developer
          {/* <Link variant="ui-link" href="https://hiringsolved.com/">
            HiringSolved
          </Link> */}
          .
        </Header.Subtitle>

        <Paragraph fontSize={[2, 3]} mt={3} mb={4} letterSpacing="-0.02em">
          I like dabbling in various parts of development and like to learn
          about new technologies, make memes or simply play games in my free
          time.
        </Paragraph>
      </Header>

      <main>
        <Heading fontSize={[3, 4]} lineHeight="title" mt={5} mb={4}>
          Latest Project
        </Heading>

        <ProjectPreview
          project={data.allProjectsJson.edges[0].node}
          level="h3"
        />
      </main>
    </article>
  )
}

export default IndexPage
