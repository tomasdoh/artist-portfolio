import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Header = () => (
  <div
    style={{
      display: "flex",
      minHeight: "10vh",
      background: "grey",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1000,
        padding: "0rem",
        paddingTop: "0.5rem"
      }}
    >
      <h1 style={{ margin: 20 }}>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          Willie Doherty
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <li style={{ display: "inline-block", marginRight: "1rem", marginLeft: "0rem" }}>
            <Link
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "x-large",
                hoverColor: "yellow"
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "black",
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
                color: "black",
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
    >
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
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
