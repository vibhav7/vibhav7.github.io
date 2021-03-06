import React, { useState } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import cn from "classnames"
import styles from "../../../LandingPage/index.module.scss"
import useScroll from '../../../../hooks/useScroll'

const rightMenu = [
  {
    label: "About",
    link: "/about"
  },
  {
    label: "Contact",
    link: "/contact"
  },
  {
    label: "portfolio",
    link: "/portfolio"
  },
  {
    label: "skills",
    link: "/skills"
  }
]
export default function Navbar(props) {
  const { isScroll } = useScroll()
  return (
    <div className="h-16" >
      <div className={cn((!isScroll && styles["hero"]), (isScroll && "shadow-xl"), "h-16 bg-white md:px-32 mx-auto items-center justify-between fixed z-10 top-0 left-0 w-full flex")}>
        <div>
          <Logo />
        </div>
        <div className="flex space-x-4">
          {rightMenu.map((item, i) => <Menu key={i} {...item} />)}
        </div>
      </div>
    </div>
  )
}
