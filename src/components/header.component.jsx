/* eslint-disable react/jsx-no-target-blank */
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Container, Jumbotron, Media } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import headerImg from "../assets/circle-cropped.png";

export const Header = (props) => {
  const classes = useStyles();
  return (
    <Jumbotron className={classes.jumbotron}>
      <Container>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={headerImg}
            alt="Generic placeholder"
          />
          <Media.Body>
            <h3 className={classes.heading}>Shivam Singh</h3>
            <p className={classes.text}>
              A Fullstack Engineer from Bengaluru, India
            </p>
            <a target="_blank" href="https://www.linkedin.com/in/sks71093/">
              <Icon className={`fab fa-linkedin ${classes.icon}`} />
            </a>

            <a target="_blank" href="https://github.com/sks710931">
              <Icon className={`fab fa-github ${classes.icon}`} />
            </a>
            <a target="_blank" href="https://twitter.com/sks71093">
              <Icon className={`fab fa-twitter ${classes.icon}`} />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCgn9Vr0m5hRHCJd6IReuhzw">
              <Icon className={`fab fa-youtube ${classes.icon}`} />
            </a>
            <a target="_blank" href="https://www.instagram.com/sks71093/">
              <Icon className={`fab fa-instagram ${classes.icon}`} />
            </a>
          </Media.Body>
        </Media>
      </Container>
    </Jumbotron>
  );
};

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    padding: 15,
    backgroundColor: "#1d86b8",
    borderRadius: 0,
    marginBottom: 0,
  },
  heading: {
    color: "white",
    fontSize: 20,
    letterSpacing: 2,
  },
  text: {
    color: "white",
    fontSize: 13,
    marginBottom: "0px",
    letterSpacing: 2,
  },
  icon: {
    marginRight: 5,
    marginTop: 5,
    color: "#12597b",
    "&:hover": {
      color: "orange",
      cursor: "pointer",
    },
  },
}));
