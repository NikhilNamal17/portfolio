import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'rebass'
import Paragraph from '../components/Paragraph'
import Header from '../components/Header'
// import Stats from '../components/Stats'
import { useSiteMetadata } from '../utils/hooks'

const AboutPage = () => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <title>About • {title}</title>
      </Helmet>

      <article>
        <Header>
          <Header.Title>Self-Doxxing</Header.Title>
        </Header>

        <main>
          <Paragraph mt={5} mb={3}>
            &ldquo;I&rsquo;m a full stack developer. I like dabbling in various
            parts of development and like to learn about new technologies, make
            memes or simply play games in my free time.&ldquo;
          </Paragraph>

          <Paragraph mb={3}>
            The Web is exciting and has a really enthusiastic developer
            community. A little more than a year ago I started learning about it
            because I wanted to build something that is future orientated and
            easily accessible. Since then I have been developing web apps and
            have been continually teaching myself about it.
          </Paragraph>

          <Paragraph mb={3}>
            That&rsquo;s what the intro on{' '}
            <Link href="https://bit.ly/nikhil-namal-resume">
              my r&eacute;sum&eacute;
            </Link>{' '}
            says. Kind of boring, huh? Well, it&rsquo;s a r&eacute;sum&eacute;.
            They&rsquo;re supposed to be boring. (Don&rsquo;t be such
            a&nbsp;nitpicker.)
          </Paragraph>

          <Paragraph>
            If you have any questions, I&rsquo;m happy to send you a non
            sequitur and/or fully-serious response if you{' '}
            <Link href="mailto:nikhilnamal16@gmail.com">email&nbsp;me</Link>.
          </Paragraph>

          {/* <Stats mt={[4, 5]} /> */}
        </main>
      </article>
    </>
  )
}

export default AboutPage
