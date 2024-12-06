import React from 'react';
import twitterImg from '../../Assets/twitter_icon.avif'
import metaImg from '../../Assets/meta_icon.png'
import blogImg from '../../Assets/blog_icon.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="about">
                <h3>About Bail Reckoner</h3>
                <p>Bail Reckoner is a digital solution designed to assist undertrial prisoners, legal aid providers, and judicial authorities in streamlining the bail process.</p>
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <p>Email: support@bailreckoner.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="social-media">
                <a href="#"><img src={twitterImg}/></a> {/* Placeholder for icons */}
                <a href="#"><img src={metaImg}/></a>
                <a href="#"><img src={blogImg}/></a>
            </div>
        </footer>
    );
}

export default Footer;