import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.scss';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <h1>
                <Link className={styles.title}  to="/">Alex Site</Link>
            </h1>
            <nav className={styles.navList}>
                <li>
                    <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/about">About Me</Link>
                </li>
                <li>
                    <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/contact">Contact Me</Link>
                </li>
            </nav>
        </header>
     );
}
 
export default Header;