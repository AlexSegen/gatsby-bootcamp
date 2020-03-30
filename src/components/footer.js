import React from 'react';
import {  graphql, useStaticQuery } from 'gatsby';

import styles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return ( 
        <div className={styles.footer}>
            Created by {data.site.siteMetadata.author}, &copy; 2020
        </div>
     );
}
 
export default Footer;