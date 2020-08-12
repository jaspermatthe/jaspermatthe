import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <h1>Home page</h1>
      <p>My name is Jasper.
        Welcome to my website!
      </p>
    </Layout>
  )
}

export default Index