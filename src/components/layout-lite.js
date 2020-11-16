/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useThemeValue, ThemeContext } from '../context/index'

import '../assets/sass/_style.scss'

const LayoutLite = ({ children }) => {
  const { theme, setTheme } = useThemeValue()

  console.log('theme', theme)
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
          theme && theme.isLight
            ? ' container light'
            : `container dark`
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
