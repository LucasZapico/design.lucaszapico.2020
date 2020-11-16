import React, { useState } from 'react'
import Mark from '../assets/images/mark.svg'
import MarkLight from '../assets/images/mark-light.svg'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { useThemeValue } from '../context/index'
import { Link } from 'gatsby'
import { useSpring, animated as a } from 'react-spring'

const PrimaryMenu = () => (
  <div className="pri-menu">
    <ul className="pri-menu__items">
      <div>
        <li className="pri-menu__item h3">
          <Link to="/">Home</Link>
        </li>
        <li className="pri-menu__item h3">
          <Link to="/about">About</Link>
        </li>
      </div>
      <div>
        {/* <li className="nav--item h3">
            <Link swipe to="/all-cases">
              Cases
            </Link>
          </li> */}
      </div>
    </ul>
    {/* <MarkLight className="pri-menu__mark" /> */}
  </div>
)

const PrimaryNav = () => {
  //   const width = useCurrentWidth()
  const width = 900
  const [showMenu, setShowMenu] = useState(false)
  const [playSt, setPlaySt] = useState('stop')
  const { theme, setTheme } = useThemeValue()

  return (
    <>
      <div className="nav__container">
        <nav className="nav ">
          <div className="mark">
            <Link to="/">
              <Mark />
            </Link>
          </div>
          {width > 800 ? (
            <Link to="/">
              <div className="nav__header h4 ns">
                Deisgn.LucasZapico
              </div>
            </Link>
          ) : undefined}
          <>
            <div className="nav__items flex items__center">
              <div
                className={
                  theme && theme.isDark
                    ? `theme dark toggle`
                    : `theme light toggle`
                }
                onClick={() => setTheme({ isDark: !theme.isDark })}
              >
                <div></div>
                {theme && theme.isDark ? (
                  <div>Dark</div>
                ) : (
                  <div>Light</div>
                )}
              </div>
              <div className="sidenav__toggle margin__left">
                {!showMenu ? (
                  <IoIosMenu
                    onClick={() => {
                      setShowMenu(!showMenu)
                    }}
                  />
                ) : (
                  <IoIosClose
                    onClick={() => {
                      setShowMenu(!showMenu)
                    }}
                  />
                )}
              </div>
            </div>
          </>
        </nav>
      </div>
      {showMenu ? (
        <div className="sidenav__primary">
          <PrimaryMenu width={width} />
        </div>
      ) : undefined}
    </>
  )
}

export default PrimaryNav
