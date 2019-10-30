import PropTypes from "prop-types"
import React from "react"

import Logo from "./Logo";
import Navigation from "./Navigation";

import "./styles/header.css";

const Header = ({ siteTitle }) => (
  <header>
	  <Logo />
	  <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
