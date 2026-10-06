import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          Aziz<span>.</span>
        </a>

        <p>© {new Date().getFullYear()} Aziz Mounassef. All rights reserved.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
