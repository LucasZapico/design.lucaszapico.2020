import React from 'react'
// import Link from "gatsby-plugin-transition-link/AniLink"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { IoIosArrowRoundForward } from 'react-icons/io'
import SEO from '../components/seo'

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className="page container__content char__readable center padding__all">
      <div className="">
        <h1 className="h3">About this project</h1>
        <p>
          I tend to do a fair bit of design during any given project.
          It was frustrating that this effort was not working for me
          in some capacity. This project is a first iteration with the
          objective of showcasing and showing movement in the design
          space.
        </p>
        <p>
          <strong>Why not Instagram, Dribble or Behance?</strong>
        </p>
        <p>
          Each of these platforms has a culture and expectation
          associated with their content where as a website is a clean
          slate. As I wanted this to be a catch all for a breadth of
          content in the design space, I did not want to have to take
          into account the personality of the platform; and whether
          what I was posting met with the audience expectations.
        </p>
        <h3 id="roadmap">Roadmap</h3>
        <ul>
          <li>
            click to lightbox view of any given image -- (multiple
            images??)
          </li>
          <li>sort feature</li>
          <li>enhance with animations</li>
          <li>add related content ux</li>
          <li>add dark/light mode toggle</li>
          <li>add gif pause</li>
        </ul>
        <h4 id="content">Content</h4>
        <ul>
          <li>add articles on reasoning about project decisions</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default AboutPage
