import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GetPostById() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      // set the post data
      setPost(res.data);
    })();
  }, [postId]);

  return (
    <div>
      <label htmlFor="txtPostId">Post id : </label>{" "}
      <input
        type="text"
        id="txtPostId"
        onInput={e => setPostId(e.target.value)}
      />
      <p>{post.title}</p>
    </div>
  );
}
