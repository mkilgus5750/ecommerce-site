import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout.js'

export default function Index({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  return (
    <Layout>
      <title>Auto Parts Consolidator - Buy and sell Aftermarket auto parts</title>
      <div className="bg-gray-100">
          <h1 className="index-title">{frontmatter.title}</h1>
          <div
            className="index"
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        title
      }
    }
  }
`
