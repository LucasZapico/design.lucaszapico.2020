/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useThemeValue } from '../context/index'

import '../assets/sass/_style.scss'

const LayoutLite = ({ children }) => {
  const { theme } = useThemeValue()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        className={
          theme.isDark ? `container dark` : ' container light'
        }
      >
        {children}
      </div>
      {/* add script tags that need to be at the bottom of body */}
    </>
  )
}

LayoutLite.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutLite
