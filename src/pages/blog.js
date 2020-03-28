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
            }
          }
        }
      }`);

    const { edges } = data.allMarkdownRemark;

      console.log(data);

    return (
        <Layout>
            <h1>My Blog</h1>
            <p>This is the blog page</p>
            <hr/>
            <ol>
                {
                    edges.map(item => (
                        <li><p>{item.node.frontmatter.title} <br/> <small>{item.node.frontmatter.date}</small></p></li>
                    ))
                }
            </ol>
        </Layout>
    )
}

export default Blog;