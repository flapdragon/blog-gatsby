import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const About = ({data}) => {
  debugger
  return (
    <Layout>
      <h2>{data.site.siteMetadata.title}</h2>
      <h2>{data.site.siteMetadata.body.content}</h2>
    </Layout>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        body {
          content
        }
      }
    }
  }
`

export default About
export { query }