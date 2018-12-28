import React from "react";
import Link from "gatsby-link";

const AboutMenu = () => (
  <div>
  <p style={{ display: "flex", textAlign: "center", fontSize: "20px" }}>
  <Link style={{ color: "black"}} to="/about">Biography</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Link style={{ color: "black"}} to="/about/exhibitions">Exhibitions</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Link style={{ color: "black"}} to="/about/essays">Essays</Link>
  </p>
  </div>
)

export default AboutMenu
