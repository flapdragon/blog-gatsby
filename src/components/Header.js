import React from "react"
import { Link } from "gatsby"
import { headerTitle } from "./Header.module.scss"

const Header = () => {
  return (
    <div>
      <h1 className={headerTitle}>Header</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/existnot">Doesn't Exist</Link>
    </div>
  )
}

export default Header