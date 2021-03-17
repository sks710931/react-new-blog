import React from "react";
import { Row } from "react-bootstrap";
import { PostItem } from "./post-item.component";
import { makeStyles } from '@material-ui/styles';
import { useCommonStyles } from './../styles/common.styles';

export const PostList = () => {
  const classes = useStyles();
  const genClasses = useCommonStyles();
  return (
    <div>
      <Row >
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Row>
      <div className={classes.footer}>
        <button className={genClasses.btnPrimary}>Show More</button>
      </div>
    </div>
  );
};

const useStyles = makeStyles(()=> ({
  footer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
    marginTop: 35,
  },
}));