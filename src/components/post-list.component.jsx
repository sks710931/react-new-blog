import React, {useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import { PostItem } from "./post-item.component";
import { makeStyles } from '@material-ui/styles';
import { useCommonStyles } from './../styles/common.styles';
import axios from "axios";

export const PostList = () => {

  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_ENDPOINT_URL + '/posts').then(response => {
      setAllPosts(response.data);
    })
  }, []);
  const classes = useStyles();
  const genClasses = useCommonStyles();
  return (
    <div>
      <Row >
        {
          allPosts.map(post => (<PostItem key={post.id} data={post}/>))
        }
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