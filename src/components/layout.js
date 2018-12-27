import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Header = () => (
  <div
    style={{
      background: "black",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Willie Doherty
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/work"
            >
              Work
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </h1>
    </div>
  </div>
);

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Willie Doherty"
      meta={[
        { name: "description", content: "Willie Doherty" },
        { name: "keywords", content: "Artist, Ireland, Northern Ireland, Photography" },
        { name: "author", content: "Willie Doherty" },
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
