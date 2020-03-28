import React from 'react';
import Layout from '../components/layout';

import { graphql, useStaticQuery } from 'gatsby'

const Blog =() => {

    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }`);

    const { edges } = data.allMarkdownRemark;

    return (
        <Layout>
            <h1>My Blog</h1>
            <p>This is the blog page</p>
            <hr/>
            <ol>
                {
                    edges.map((item, index) => (
                        <li key={index}><p>{item.node.frontmatter.title} <br/> <small>{item.node.frontmatter.date}</small></p></li>
                    ))
                }
            </ol>
        </Layout>
    )
}

export default Blog;