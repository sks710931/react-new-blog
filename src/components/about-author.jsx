import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AboutAuthor = ({ author }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Col className={classes.container} sm={12} md={4}>
        <span className={classes.smallSpan}>About The Author</span>
        <img
          className={classes.image}
          src={author.authorImage}
          alt={author.authorName}
        />
        <h3>
          <Link to={`/author/${author.id}`}>{author.authorName}</Link>
        </h3>
        <div className={classes.desc} >
          <p >
            Siddharth is a FullStack JavaScript Developer currently based out in
            Sydney, Australia. He's a Google Developer Expert in Angular and Web
            Technologies. He speaks about and teaches Angular on Udemy.
          </p>
        </div>
      </Col>
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  smallSpan: {
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: 500,
    color: "#1d86b8",
  },
  container: {
    display: "flex",
    textAlign: "center",
    paddingLeft: 40,
    paddingRight: 40,
    flexDirection: "column",
    alignItems: "center",
    "& h3": {
      "& a": {
        color: "#1d86b8",
        textDecoration: "none",
        "&:hover": {
          color: "orange",
        },
      },
    },
  },
  image: {
    maxHeight: 200,
    maxWidth: 200,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  desc:{
    '& p': {
      textAlign: 'justify',
    }
  }
}));
