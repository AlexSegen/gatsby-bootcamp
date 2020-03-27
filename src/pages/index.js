import React from "react";
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <div>
            Hello, I'm <strong>Alejandro</strong>.
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
            <p><Link to="/about">About Me</Link></p>
            <p><Link to="/blog">My Blog</Link></p>
        </div>
    )
}

export default IndexPage;