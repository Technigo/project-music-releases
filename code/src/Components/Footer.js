import React from 'react';

const Footer= () => {
    return (
        <footer className="footer">
            <div className="socialmedia">
                <div className="button">
                    <a href="https://www.facebook.com"  title="Facebook">
                        <i className="fa fa-facebook"></i>
                    </a>
                </div>
                <div className="button">
                    <a href="https://www.instagram.com"  title="Instagram">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
                <div className="button">
                    <a href="https://twitter.com" title="Twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                        
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2021 Katia and Mette</p>
            </div>

        </footer>
    )
}
export default Footer;