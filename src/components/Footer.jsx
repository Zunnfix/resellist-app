import React from 'react';
import '../assets/sass/components/Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="links">
          <div className="link">Explore</div>
          <div className="link">Terms</div>
          <div className="link">Privacy</div>
          <div className="link">Help</div>
          <div className="link">Safe Trade Spots</div>
        </div>
        <div className="social">
          <div className="social-link"><i className="fab fa-twitter"></i></div>
          <div className="social-link"><i className="fab fa-facebook-f"></i></div>
          <div className="social-link"><i className="fab fa-instagram"></i></div>
          <div className="social-link"><i className="fab fa-linkedin-in"></i></div>
          <div className="social-link"><i className="fab fa-google-plus-g"></i></div>
          <div className="social-link"><i className="fab fa-pinterest-p"></i></div>
        </div>
        <div className="copyright">© {(new Date().getFullYear())} OfferUp, Inc.</div>
      </div>
    </footer>
  )
}