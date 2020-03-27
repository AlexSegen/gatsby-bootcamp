import React from 'react';
import { Link } from 'gatsby';
const Header = () => {
    return ( 
        <div>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact Me</Link>
        </div>
     );
}
 
export default Header;