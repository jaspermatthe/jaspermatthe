import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.css"

const Header = () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `
      )
    return (
      <header className={headerStyles.headercontainer}>
          <div className={headerStyles.overlay}></div>
        <div className={headerStyles.heroContent}>
            <Link to="/" className={headerStyles.brand}>{data.site.siteMetadata.title}</Link>
          <p className={headerStyles.description}>
          {data.site.siteMetadata.description}
          </p>
        </div>
        <nav className={headerStyles.navContainer}>
            <ul className={headerStyles.navList}>
                <li>
                    <Link to="/" activeClassName={headerStyles.activeMenuItem} className={headerStyles.navList}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/blog/" activeClassName={headerStyles.activeMenuItem} className={headerStyles.navList}>
                    Blog
                    </Link>
                </li>
                <li>
                    <Link to="/contact/" activeClassName={headerStyles.activeMenuItem} className={headerStyles.navList}>
                    Contact
                    </Link>
                </li>
                <li>
                    <Link to="/about/" activeClassName={headerStyles.activeMenuItem} className={headerStyles.navList}>
                    About
                    </Link>
                </li>
            </ul>
        </nav>
      </header>
    )
  }

export default Header
