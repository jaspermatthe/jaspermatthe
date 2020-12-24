import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Metadata from "../components/metadata"


const NotFound = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check my latest blog posts</Link>
      </p>
    </Layout>
  )
}

export default NotFound