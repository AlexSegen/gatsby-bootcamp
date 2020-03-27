import React from 'react';
import { Link } from 'gatsby';
const Header = () => {
    return ( 
        <header>
            <h1>Alex Site</h1>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
            </nav>
        </header>
     );
}
 
export default Header;