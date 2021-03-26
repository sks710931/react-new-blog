import React from "react";
import "holderjs";
import { Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { parseDate } from "./../utils/parse-date";

export const PostItem = ({ data }) => {
  const {
    title,
    subTitle,
    author,
    tags,
    slug,
    publishedAt,
    readTime,
    postImage,
  } = data;
  const classes = useStyles();

  return (
    <Col className={classes.postContainer} sm={12} md={6}>
      <div className={classes.postBox}>
        <Link to={`/posts/${slug}`}>
          <img className={classes.thumbnail} src={postImage} alt={title} />
        </Link>
        <div className={classes.body}>
          <div className={classes.heading}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </div>
          <div className={classes.meta}>
            <div className={`${classes.flexChild} ${classes.author}`}>
              <Link to={`/about`}>
                <img
                  className={classes.authorImage}
                  src={author.authorImage}
                  alt={author.authorName}
                />
              </Link>
              <Link to={`/about`}><span className={classes.authorName}>{author.authorName}</span></Link>
            </div>
            <div className={`${classes.flexChild}`}>
              <span className={classes.postDate}>{parseDate(publishedAt)}</span>
            </div>
            <div className={`${classes.flexChild} ${classes.readTime}`}>
              <span>{`${readTime} min read`}</span>
            </div>
          </div>
          <div className={classes.description}>
            <span>{subTitle}</span>
          </div>
          <div className={classes.actions}>
            <Link to={`/posts/${slug}`}>
              <span>Read More</span>
              <Icon>arrow_forward</Icon>
            </Link>
          </div>
        </div>
        {tags && (
          <div className={classes.topTag} style={{ backgroundColor: `green` }}>
            <Link to={`/category/${tags[1].tagName}`}>
              <span>{tags[1].tagName}</span>
            </Link>
          </div>
        )}
      </div>
    </Col>
  );
};

const useStyles = makeStyles(() => ({
  postContainer: {
    padding: 15,
  },
  postBox: {
    backgroundColor: "#ffff",
    border: "1px solid #d5d5d5",
    borderRadius: 5,
    padding: 10,
    position: "relative",
  },
  thumbnail: {
    height: 300,
    width: "100%",
  },
  body: {
    padding: 20,
  },
  heading: {
    maxHeight: 70,
    overflow: "hidden",
    whiteSpace: "npwrap",
    textOverflow: "ellipsis",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
    "& h3": {
      color: "#1d86b8",
      "&:hover": {
        cursor: "pointer",
        color: "#8d8b8b",
      },
    },
  },
  description: {
    color: "grey",
    maxHeight: 70,
    overflow: "hidden",
  },
  meta: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 8,
  },
  flexChild: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  author: {
    width: "150%",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
  authorImage: {
    borderRadius: "50%",
    width: 30,
    height: "100%",
  },
  authorName: {
    marginLeft: 8,
    color: "orange",
    fontWeight: 500,
  },
  postDate: {
    fontWeight: 200,
    color: "orange",
  },
  readTime: {
    justifyContent: "flex-end",
    "& span": {
      fontWeight: 200,
      color: "orange",
    },
  },
  actions: {
    marginTop: 8,
    display: "flex",
    justifyContent: "flex-end",
    "& a": {
      all: "unset",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontWeight: 500,
      color: "orange",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  topTag: {
    backgroundColor: "#f84a4a",
    position: "absolute",
    right: 10,
    top: 10,
    padding: 10,
    color: "white",
    borderBottomLeftRadius: 5,
    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
}));
