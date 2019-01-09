import React from "react";
import Link from "gatsby-link";

const WorkMenu = () => (
  <div>
  <h4 style={{ display: "flex", textAlign: "center", fontSize: "20px" }}>
  <Link style={{ color: "black"}} to="/work/photography">Photography</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Link style={{ color: "black"}} to="/work/video">Video</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </h4>
  </div>
)

export default WorkMenu
