import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";

import Post from './Post/Post'
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts); // read data from the store
  const classes = useStyles();

  console.log(posts);
  return (
    !posts.length ? <CircularProgess /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3} >
        {
          
        }
      </Grid>
    )
    
  );
}

export default Posts;