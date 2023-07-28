import React from "react";
import "./Footer.css";

function Footer(props) {
  const { children } = props;

  return (
    <footer className="footer-1">
      <p className="x2023-anima-landing-page-ui-kit-1 body-s">{children}</p>
      <div className="social-links-2"></div>
    </footer>
  );
}

export default Footer;
