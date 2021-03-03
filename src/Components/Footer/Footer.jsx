import React from 'react';
import styles from './Footer.module.css';
import image from './rs_school_js.svg';
import image1 from './github.svg';


const Footer = () => {
    return (
        <div className={styles.footer}>
           <div>
            <a href = "https://rs.school/js/" ><img src={image} alt="RSSLogo" className={styles.linksize}/></a>
            <a href = "https://github.com/Gurnick013" ><img src={image1} alt="GIT" className={styles.linksize}/></a>
            </div>
        </div>
    )
}

export default Footer;