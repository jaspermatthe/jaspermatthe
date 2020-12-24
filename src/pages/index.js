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

        <h2>A little about me...</h2>
        <p>
          <ul>I'm a seventeen-year-old student at Semiahmoo Secondary School in South Surrey, British Columbia...</ul>
          <ul>I'm enrolled in the International Baccalaureate Program...</ul>
          <ul>I play soccer and I love it...</ul>
          <ul>I love to travel...</ul>
          <ul>I want to be an architect...</ul>
          <ul>I hope to share all my interests with the world through this website...</ul>
          <ul>Have a browse to learn a bit more about me!</ul>


        </p>
      </div>
    </Layout>
  )
}

export default Index