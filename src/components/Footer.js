import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
                <li><a target="blank" href="https://www.facebook.com/jermm.dev" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li> */}
                {/* <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li> */}
                <li><a target="blank" href="https://www.linkedin.com/in/jerry-morris-7b1a1289/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; JermmDev</li>
                <li>Web Toys</li>
            </ul>
        </div>
    </footer>
)

export default Footer
