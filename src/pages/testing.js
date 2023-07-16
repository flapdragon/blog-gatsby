import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"

const TestingPage = ({data}) => {
  const posts = data.allPost.nodes

  return (
    <Layout>
      <h1>Posts</h1>
      { posts.map(post => 
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )}
    </Layout>
  )
}

const query = graphql`
  query AllPost {
    allPost {
      nodes {
        id
        title
        body
      }
    }
  }
`

export default TestingPage
export { query }