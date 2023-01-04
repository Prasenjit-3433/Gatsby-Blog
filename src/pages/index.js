import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
    <div>
      <h1>Prasenjit's Thoughts</h1>
      <h4>Total no of blogs: { data.allMarkdownRemark.totalCount }</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
  </Layout>
  );
  }

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            description
            title
          }
        }
      }
  }
}
`
