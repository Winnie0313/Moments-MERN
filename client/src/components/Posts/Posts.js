import React from "react";
import { useSelector } from "react-redux";

import Post from './Post/Post'
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts); // read data from the store
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <hi>POSTS</hi>
      <Post />
      <Post />
    </>
    
  );
}

export default Posts;