import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import blogStyles from "./contact.module.css"

const Contact = () => {
  return (
    <Layout>
    <Metadata title="Contact" description="Here's how to get in touch with me" />
    <div>
      <h1>Contact Page</h1>
      <p>You can get in touch with me through email <a href = "mailto: matthejasper@gmail.com" className={blogStyles.emaillink}>matthejasper@gmail.com</a>
</p>
    </div>
    </Layout>
  )
}

export default Contact