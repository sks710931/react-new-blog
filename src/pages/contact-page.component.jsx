import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";
import { TextBox } from "../components/input/text-box.component";
import { TextArea } from "./../components/input/text-area.component";
import { useCommonStyles } from "./../styles/common.styles";
import { Footer } from "../components/footer.component";
import axios from "axios";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowFrom] = useState(true);
  const classes = useStyles();
  const genClasses = useCommonStyles();
  const handleFormSubmit = () => {
    axios
      .post(process.env.REACT_APP_ENDPOINT_URL + "/posts/contact/add", {
        name,
        email,
        subject,
        message,
      })
      .then((response) => {
        if (response.data) {
          alert("Message Sent");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setShowFrom(false);
        }
      });
  };
  return (
    <Fragment>
      <Container className={classes.container}>
        <Row>
          <Col sm={12} md={6}>
            <div>
              <h1>Contact Me</h1>
              <div
                className={classes.form}
                style={{ display: showForm ? "block" : "none" }}
              >
                <TextBox
                  labelColor="grey"
                  label="Name"
                  displayType="flex"
                  autoComplete="on"
                  maxLength={50}
                  faIcon="far fa-user"
                  paddingType="marginBottom"
                  spacing={15}
                  value={name}
                  onTextChange={(text) => setName(text)}
                />
                <TextBox
                  labelColor="grey"
                  label="Email"
                  displayType="flex"
                  autoComplete="on"
                  maxLength={50}
                  faIcon="far fa-envelope"
                  paddingType="marginBottom"
                  spacing={15}
                  value={email}
                  onTextChange={(text) => setEmail(text)}
                />
                <TextBox
                  labelColor="grey"
                  label="Subject"
                  displayType="flex"
                  autoComplete="off"
                  maxLength={200}
                  paddingType="marginBottom"
                  spacing={15}
                  value={subject}
                  onTextChange={(text) => setSubject(text)}
                />
                <TextArea
                  labelColor="grey"
                  label="Message"
                  displayType="flex"
                  autoComplete="off"
                  maxLength={2000}
                  paddingType="marginBottom"
                  spacing={15}
                  value={message}
                  onTextChange={(text) => setMessage(text)}
                />
                <button
                  onClick={handleFormSubmit}
                  className={`${genClasses.btnPrimary}`}
                >
                  Submit
                </button>
              </div>
              {!showForm && (
                <h5 className={classes.thanks}>Thanks For your message :)</h5>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    minHeight: 647,
  },
  form: {
    width: "100%",
    padding: 15,
  },
  thanks: {
    marginTop: 30,
  },
}));
