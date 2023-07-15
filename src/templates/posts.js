import React from "react"
import Layout from "../components/Layout"

const Posts = ({pageContext: {testingData}}) => {
  return (
    <Layout>
      <h1>Posts</h1>
      <p>{testingData}</p>
    </Layout>
  )
}

export default Posts