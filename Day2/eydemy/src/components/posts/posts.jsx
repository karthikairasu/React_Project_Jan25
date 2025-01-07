import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     let thePromise = axios.get("https://jsonplaceholder.typicode.com/posts");
  //     thePromise.then(res => setPosts(res.data));
  //   }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setPosts(res.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div>
      <header>
        <h2>All Posts</h2>
      </header>
      {posts.length > 0 ? (
        <ul className="list-group">
          {posts.map(p => (
            <li key={p.id} className="list-group-item">
              <Link to={`/postdetails/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
