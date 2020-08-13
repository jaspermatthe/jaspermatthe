import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import indexStyles from "./index.module.css"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="This is my home page" />
      <div className={indexStyles.herotext}>
        <h1>Home page</h1>
        <p>My name is Jasper.
          Welcome to my website!
        </p>
      </div>
    </Layout>
  )
}

export default Index