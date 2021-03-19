/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from "../components/footer.component";
import { parseDate } from "./../utils/parse-date";
import { Subscribe } from "./../components/subscribe.component";

export const PostPage = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const [post, setPost] = useState({});
  const [body, setBody] = useState({});

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_ENDPOINT_URL + "/posts/" + slug)
      .then((response) => {
        if (response.status === 200) {
          setPost(response.data);
          axios
            .get(
              process.env.REACT_APP_ENDPOINT_URL +
                "/posts/body/" +
                response.data.id
            )
            .then((response2) => {
              console.log(response2.data);
              setBody(response2.data);
            });
        }
      });
  }, []);
  return (
    <Fragment>
      <div className={classes.postHeader}>
        <Container>
          <Row>
            <Col sm={12} md={7}>
              <h1 className={classes.postTitle}>{post.title}</h1>
              <p className={classes.postSubTitle}>{post.subTitle}</p>
            </Col>
            <Col style={{ paddingLeft: 0, paddingRight: 0 }} sm={12} md={5}>
              <img className={classes.postImage} src={post.postImage} alt="" />
            </Col>
            <Col className={classes.metaContainer} sm={12} md={6}>
              <div className={classes.metaRow}>
                {post &&
                  post.tags &&
                  post.tags.map((tag) => (
                    <span className={classes.tags}>{tag.tagName}</span>
                  ))}
              </div>
              <div className={classes.metaRow}>
                {post && post.publishedAt && (
                  <span className={classes.metaSpan}>
                    {parseDate(post.publishedAt)}
                  </span>
                )}
                <span
                  className={classes.metaSpan}
                >{`${post.readTime} minute read`}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {body.body}
      <Subscribe />
      <Footer />
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  postHeader: {
    backgroundColor: "#1d86b8",
    marginTop: -15,
    paddingTop: 30,
    paddingBottom: 30,
  },
  postImage: {
    maxWidth: "100%",
    minHeight: 300,
    borderRadius: 10,
  },
  postTitle: {
    color: "white",
    fontSize: 50,
    letterSpacing: 2,
  },
  postSubTitle: {
    color: "white",
    fontSize: 20,
  },
  metaContainer: {
    display: "flex",
    flexDirection: "column",
  },
  metaRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  tags: {
    marginRight: 30,
    color: "orange",
    fontWeight: 500,
    letterSpacing: 2,
    border: "2px solid orange",
    padding: "2px 15px 2px 15px",
    borderRadius: 15,
  },
  metaSpan: {
    marginRight: 30,
    color: "orange",
    fontWeight: 500,
  },
}));
