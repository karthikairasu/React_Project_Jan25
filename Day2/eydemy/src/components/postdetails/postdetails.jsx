import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data));
  }, []);
  return (
    <>
      <header>
        <h2>Post details for post id - {id}</h2>
      </header>
      <div>
        <h3>User Id : {post.userId}</h3>
        <h3> Id : {post.id}</h3>
        <h3>Title : {post.title}</h3>
        <h3>Body : {post.body}</h3>
      </div>
    </>
  );
}
