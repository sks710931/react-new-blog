/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";
import {
  HtmlEditor,
  Image,
  Link,
  QuickToolbar,
  RichTextEditor,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import { AboutAuthor } from "./about-author";
RichTextEditor.Inject(HtmlEditor, Image, Link, QuickToolbar, Toolbar);

export const PostBody = ({ body, author }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.bodyContainer}>
      <Container className={classes.container}>
        <Row>
          <Col className={classes.bodyColumn} sm={!2} md={8}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Col>
          {
            author && <AboutAuthor author={author}/>
          }
        </Row>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  bodyContainer: {
    backgroundColor: "#f5f5f5",
  },
  container: {
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: '#ffff'
  },
  bodyColumn: {},
}));
