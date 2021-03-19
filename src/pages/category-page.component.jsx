/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import { PostItem } from "../components/post-item.component";
import { useCommonStyles } from './../styles/common.styles';
import { Subscribe } from "../components/subscribe.component";
import { Footer } from "../components/footer.component";

export const CategoryPage = () => {
  const classes = useStyles();
  const genClasses = useCommonStyles();
  const { tag } = useParams();
  const [slicedPosts, setSlicedPosts] = useState([]);
  const [sliceCounter, setSliceCounter] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const showMoreHandler = () => {
    const slice = allPosts.slice(sliceCounter, sliceCounter + 10);
    setSlicedPosts([...slicedPosts, ...slice]);
    setSliceCounter(sliceCounter + slice.length);
    if (slice.length + slicedPosts.length === allPosts.length) {
      setShowMore(false);
    }
  };
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_ENDPOINT_URL + "/posts/tag/" + tag)
      .then((response) => {
        setAllPosts(response.data.posts);
        if (response.data.posts.length > 10) {
          initializeSlicedPost(response.data.posts, 10);
          setShowMore(true);
        } else {
          setSlicedPosts(response.data.posts);
          setSliceCounter(response.data.posts.length);
        }
      });
  }, []);

  const initializeSlicedPost = (posts, size) => {
    setSlicedPosts(posts.slice(0, size));
    setSliceCounter(size);
  };
  return (
    <Fragment>
      <div>
        <Container className={classes.container}>
          <h1 className={classes.pageHeading}>
            Posts on <span>{tag}</span>
          </h1>
          <Row>
            {slicedPosts &&
              slicedPosts.map((post) => <PostItem key={post.id} data={post} />)}
          </Row>
          {showMore && (
            <div className={classes.footer}>
              <button
                onClick={showMoreHandler}
                className={genClasses.btnPrimary}
              >
                Show More
              </button>
            </div>
          )}
        </Container>
      </div>
      <Subscribe />
      <Footer />
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 30,
  },
  pageHeading: {
    color: "#1d86b8",
    "& span": {
      textTransform: "capitalize",
    },
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
    marginTop: 35,
  },
}));
