import React, { Fragment } from "react";
import { Container} from "react-bootstrap";
import { Slider } from "./../components/Slider.component";
import { makeStyles } from "@material-ui/styles";
import { PostList } from './../components/post-list.component';
import { Subscribe } from "../components/subscribe.component";

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.container}>
        <Slider />
      </Container>
      <Container>
        <PostList />
      </Container>
      <Subscribe />
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
  h2Heading:{
    color: '#1d86b8',
    letterSpacing: 2,
    fontSize: 22,
  },
  leftCol:{
    
  }
}));
