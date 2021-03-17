import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";

export const NavigationBar = (props) => {
  const classes = useStyles();
  return (
    <Navbar className={classes.navbar} sticky="top" expand="lg" variant="dark" bg="dark">
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={classes.navLink} href="#home">Home</Nav.Link>
            <Nav.Link className={classes.navLink} href="#videos">Videos</Nav.Link>
            <Nav.Link className={classes.navLink} href="#videos">About</Nav.Link>
            <Nav.Link className={classes.navLink} href="#videos">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className={classes.navLinkRight} href="#home">Sign In/Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const useStyles = makeStyles(() => ({
  navbar: {
    marginBottom: 15,
  },
  navLink:{
    letterSpacing: 2,
    color: 'white !important',
    fontSize: 15,
    fontWeight: 400,
    marginRight: 15,
    '&:hover': {
      color: '#1d86b8 !important',
    }
  },
  navLinkRight:{
    letterSpacing: 2,
    color: 'white !important',
    fontSize: 15,
    fontWeight: 400,
    marginLeft: 15,
    '&:hover': {
      color: '#1d86b8 !important',
    }
  }
}));
