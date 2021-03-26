import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Slider } from "./../components/Slider.component";
import { makeStyles } from "@material-ui/styles";
import { PostList } from "./../components/post-list.component";
import { Subscribe } from "../components/subscribe.component";
import { Footer } from "../components/footer.component";
import { MetaTags } from "react-meta-tags";
export const HomePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <MetaTags>
        <title>Shivam Singh's Blog | A fullstack javacript developer from Bengaluru,India</title>
        <meta name="description" content="Fullstack Developer and Blogger based in Bengaluru India, currently focusing on Angular, React, Vue, Node and .NET Technologies" />
        <meta
          property="og:title"
          content="Shivam Singh's Blog | A fullstack javacript developer from Bengaluru,India"
        />
        <meta property="og:image" content='/logo.png' />
      </MetaTags>
      <Container className={classes.container}>
        <Slider />
      </Container>
      <Container>
        <PostList />
      </Container>
      <Subscribe />
      <Footer />
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 15,
  },
  h2Heading: {
    color: "#1d86b8",
    letterSpacing: 2,
    fontSize: 22,
  },
  leftCol: {},
}));
