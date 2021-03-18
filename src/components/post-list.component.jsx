import React, {useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import { PostItem } from "./post-item.component";
import { makeStyles } from '@material-ui/styles';
import { useCommonStyles } from './../styles/common.styles';
import axios from "axios";

export const PostList = () => {

  const [slicedPosts, setSlicedPosts] = useState([]);
  const [sliceCounter, setSliceCounter] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const showMoreHandler = () => {
    const slice = allPosts.slice(sliceCounter, sliceCounter +10);
    setSlicedPosts([...slicedPosts, ...slice]);
    setSliceCounter(sliceCounter + slice.length);
  }
  useEffect(() => {
    axios.get(process.env.REACT_APP_ENDPOINT_URL + '/posts').then(response => {
      setAllPosts(response.data);
      if(response.data.length > 10){
        initializeSlicedPost(response.data, 10)
      } else {
        setSlicedPosts(response.data);
        setSliceCounter(response.data.length)
      }
    })
  }, []);

  const initializeSlicedPost = (posts, size) => {
    setSlicedPosts(posts.slice(0, size));
    setSliceCounter(size);
  }
  const classes = useStyles();
  const genClasses = useCommonStyles();
  return (
    <div>
      <Row >
        {
          slicedPosts.map(post => (<PostItem key={post.id} data={post}/>))
        }
      </Row>
      <div className={classes.footer}>
        <button onClick={showMoreHandler} className={genClasses.btnPrimary}>Show More</button>
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