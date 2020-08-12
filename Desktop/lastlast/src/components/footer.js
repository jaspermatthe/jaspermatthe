import React from "react"
import footerStyles from "./footer.module.css"
import { useStaticQuery, graphql } from "gatsby"


const Footer = () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                author
              }
            }
          }
        `
      )
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.socialcontainer}>
      <div className={footerStyles.social}>
              <a href="https://www.facebook.com/matthejasper" target="_blank" rel="noreferrer noopener" className={footerStyles.facebook}>
                <i className="fab fa-facebook-square fa-4x" />
              </a>
      </div>
      <div className={footerStyles.social}>
              <a href="https://www.instagram.com/jasper.matthe/" target="_blank" rel="noreferrer noopener" className={footerStyles.facebook}>
                <i className="fab fa-instagram fa-4x" />
              </a>
      </div>
      <div className={footerStyles.social}>
              <a href="https://www.linkedin.com/in/jasper-matth%C3%A9-451396152/" target="_blank" rel="noreferrer noopener" className={footerStyles.facebook}>
                <i className="fab fa-linkedin fa-4x" />
              </a>
      </div>
      </div>
      <div className={footerStyles.container}>
        <p>
        Site developed by {data.site.siteMetadata.author} &copy;{" "}
          {new Date().getFullYear().toString()}{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer