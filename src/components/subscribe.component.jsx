/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Row, Col } from "react-bootstrap";
import { TextBox } from "./input/text-box.component";
import { useCommonStyles } from "./../styles/common.styles";
import Icon from "@material-ui/core/Icon";
import axios from "axios";

export const Subscribe = () => {
  const classes = useStyles();
  const genClasses = useCommonStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const handleFormSubmit = () => {
    axios
      .post(process.env.REACT_APP_ENDPOINT_URL + "/posts/subscriber/add", {
        name,
        email,
        areaOfInterest: subject,
      })
      .then((response) => {
        if (response.data) {
          alert("Subscribed Sucessfully!");
          setName("");
          setEmail("");
          setSubject("");
        }
      });
  };
  return (
    <div className={classes.parent}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <span className={classes.smallText}>
              Sign Up for our top notch newsletter
            </span>
            <p className={classes.megaText}>The Deep Dive</p>
            <p className={classes.text}>
              Get the latest coverage of <b>advanced</b> web development
              straight into your inbox. Twice a month.
            </p>
            <p className={`${classes.smallText} ${classes.noMargin}`}>
              Follow Us
            </p>
            <div className={classes.inputRow}>
              <a target="_blank" href="https://www.linkedin.com/in/sks71093/">
                <Icon className={`fab fa-linkedin ${classes.icon}`} />
              </a>

              <a target="_blank" href="https://github.com/sks710931">
                <Icon className={`fab fa-github ${classes.icon}`} />
              </a>
              <a target="_blank" href="https://twitter.com/sks71093">
                <Icon className={`fab fa-twitter ${classes.icon}`} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCgn9Vr0m5hRHCJd6IReuhzw"
              >
                <Icon className={`fab fa-youtube ${classes.icon}`} />
              </a>
              <a target="_blank" href="https://www.instagram.com/sks71093/">
                <Icon className={`fab fa-instagram ${classes.icon}`} />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ width: "100%" }}>
              <div className={classes.inputRow}>
                <TextBox
                  label="Name"
                  name="name"
                  decorationColor="orange"
                  placeholder="Enter Your Name"
                  faIcon="far fa-user"
                  displayType="flex"
                  paddingType="paddingRight"
                  spacing={10}
                  value={name}
                  onTextChange={(text) => setName(text)}
                />
                <TextBox
                  label="Email"
                  name="email"
                  decorationColor="orange"
                  placeholder="Enter Your E-mail"
                  faIcon="far fa-envelope"
                  displayType="flex"
                  paddingType="paddingLeft"
                  spacing={10}
                  value={email}
                  onTextChange={(text) => setEmail(text)}
                />
              </div>
              <div className={classes.inputRow}>
                <TextBox
                  label="What are you interested in?"
                  name="interest"
                  decorationColor="orange"
                  placeholder="E.g. Javascript, Angular, React.."
                  displayType="flex"
                  value={subject}
                  onTextChange={(text) => setSubject(text)}
                />
              </div>
              <div className={classes.inputRow}>
                <button
                  onClick={handleFormSubmit}
                  className={genClasses.btnSecondary}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  parent: {
    backgroundColor: "#1d86b8",
    width: "100%",
    paddingTop: 50,
    paddingBottom: 50,
  },
  smallText: {
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: 400,
  },
  megaText: {
    color: "white",
    fontSize: 50,
    letterSpacing: 3,
    fontWeight: 800,
  },
  text: {
    color: "white",
    "& b": {
      color: "orange",
    },
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  icon: {
    marginRight: 5,
    marginTop: 5,
    color: "#12597b",
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  noMargin: {
    margin: 0,
  },
}));
