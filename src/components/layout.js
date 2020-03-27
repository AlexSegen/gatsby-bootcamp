import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/main.scss';

import styles from './layout.module.scss';

const Layout = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
     );
}
 
export default Layout;