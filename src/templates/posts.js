import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Posts = ({pageContext: {posts}}) => {
  return (
    <Layout>
      <h1>Posts</h1>
      {/* <p>{JSON.stringify(posts)}</p> */}
      { posts.map(post => 
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      )}
    </Layout>
  )
}

export default Posts