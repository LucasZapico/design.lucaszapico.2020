import React from 'react'
import Img from 'gatsby-image'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'gatsby-plugin-transition-link/AniLink'

const Card = ({ post, progress }) => {
  console.log('test', post.frontmatter.type)
  console.log('test', post.frontmatter.featured)
  return (
    <div className={`post card `}>
      {post.frontmatter.featured_gif === null ? undefined : (
        <div className="post__img">
          <img src={post.frontmatter.featured_gif} alt="mark gif" />
        </div>
      )}
      {post.frontmatter.featured_img === null ? undefined : (
        <div className="post__img">
          <Img
            fluid={
              post.frontmatter.featured_img.childImageSharp.fluid
            }
            objectFit="contain"
          />
        </div>
      )}

      <div className="post__content">
        <div className="post__header">
          <h4 className="post__title h6">{post.frontmatter.title}</h4>
        </div>
        <div className="post__body flex justify__between items__center">
          <div className="container categories flex justify__start ">
            {post.frontmatter.categories.map((c, i) => (
              <div
                key={i + c.replace(' ', '-')}
                className="tag tag__category body"
              >
                {c},
              </div>
            ))}
          </div>
          {/* <Link to="/">
            Creaters Thoughts <IoIosArrowForward />
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Card
