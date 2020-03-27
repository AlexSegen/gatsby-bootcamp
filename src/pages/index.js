import React from "react";
import { Link } from 'gatsby';

import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
    return (
        <div>
            <Header/>
            Hello, I'm <strong>Alejandro</strong>.
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
            <Footer/>
        </div>
    )
}

export default IndexPage;