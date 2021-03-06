import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import blogStyles from "./blog.module.css"
import Metadata from "../components/metadata"

import Layout from "../components/layout"

const Blog = () => {
    const data = useStaticQuery(
        graphql`
            query {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
                edges {
                node {
                    frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                    excerpt
                    featured {
                      childImageSharp {
                        fluid(maxWidth: 750) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    }
                    timeToRead
                    id
                    fields {
                      slug
                    }
                }
                }
            }
            }
        `
        )
  return (
    <Layout>
      <Metadata title="Blog" description="Check out my blog" />
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post} key={edge.node.id}>
              <h2 className={blogStyles.centerall}>
                <Link to={`/blog/${edge.node.fields.slug}/`} className={blogStyles.blognameformat}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div className={blogStyles.meta}>
                <span>
                  Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                  {edge.node.timeToRead} min read
                </span>
              </div>
              {
              edge.node.frontmatter.featured && (
                <Img
                  className={blogStyles.featured}
                  fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
                  alt={edge.node.frontmatter.title}
                />
              )
              }
              <div className={blogStyles.excerpt}>
              <p>{edge.node.frontmatter.excerpt}</p>
              </div>
              <div className={blogStyles.button}>
                <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog