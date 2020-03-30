import React from 'react';
import Layout from '../components/layout';

import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './blog.module.scss';

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
            <ol className={styles.posts}>
                {
                    edges.map((item, index) => (
                        <li className={styles.post} key={index}>
                          <Link to={`/blog/${item.node.fields.slug}`}>
                            <h2>{item.node.frontmatter.title}</h2>
                            <p>{item.node.frontmatter.date}</p>
                          </Link>
                        </li>
                    ))
                }
            </ol>
        </Layout>
    )
}

export default Blog;