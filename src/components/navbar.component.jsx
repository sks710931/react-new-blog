import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

export const NavigationBar = (props) => {
  const classes = useStyles();
  return (
    <Navbar
      className={classes.navbar}
      sticky="top"
      expand="lg"
      variant="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className={`${classes.navLink} nav-link`} to="/">
              Home
            </Link>
            <Link className={`${classes.navLink} nav-link`} to="/archive">
              Archive
            </Link>
            <Link className={`${classes.navLink} nav-link`} to="">
              About Me
            </Link>
            <Link className={`${classes.navLink} nav-link`} to="/contact">
              Contact
            </Link>
          </Nav>
          {false && (
            <Nav>
              <Nav.Link className={classes.navLinkRight} href="#home">
                Sign In/Sign Up
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const useStyles = makeStyles(() => ({
  navbar: {
    marginBottom: 15,
  },
  navLink: {
    letterSpacing: 2,
    color: "white !important",
    fontSize: 15,
    fontWeight: 400,
    marginRight: 15,
    "&:hover": {
      color: "orange !important",
    },
  },
  navLinkRight: {
    letterSpacing: 2,
    color: "white !important",
    fontSize: 15,
    fontWeight: 400,
    marginLeft: 15,
    "&:hover": {
      color: "orange !important",
    },
  },
}));
