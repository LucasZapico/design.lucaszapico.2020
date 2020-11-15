import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { IoIosArrowRoundForward } from 'react-icons/io'
import SEO from '../components/seo'
import Card from '../components/card'

const HomePage = ({ data }) => {
  const edges = data.posts.edges

  return (
    <Layout>
      <SEO title="home" />
      <div className="container home">
        <header className="home header">
          <div className="hero">
            <div className="hero__content content__container margin__left--m">
              <h1 className="h3">A Feed of Design</h1>
            </div>
          </div>
        </header>
        <div className="content home">
          <section className="section">
            <div className="feed__header">
              <div className="content__container">
                {/* <h2 className="h3 margin__left--m">Feed</h2> */}
                <div className="feed__container">
                  {edges.map(edge => (
                    <Card key={edge.node.id} post={edge.node} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { frontmatter: { isdraft: { eq: false } } }
      sort: { order: DESC, fields: [frontmatter___date_created] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            type
            last_modified
            description
            date_created
            categories
            tags
            isdraft
            featured_gif
            featured_img {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
