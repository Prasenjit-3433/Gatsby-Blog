import React from "react";
import { graphql } from 'gatsby';
import Laytout from '../components/layout';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Laytout>
            <h1>{ post.frontmatter.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Laytout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`