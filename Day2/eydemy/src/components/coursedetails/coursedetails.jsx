import React, { useEffect, useState } from "react";
import Rating from "../molecules/rating/rating";
import { useNavigate, useParams } from "react-router-dom";

export default function CourseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [theCourse, settheCourse] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3500/courses/${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(course => settheCourse(course));
  }, []);
  return (
    <div className="mt-1">
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theCourse.imageUrl}
              className="card-img-top"
              alt={theCourse.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3 border-start">
            <h2>{theCourse.title}</h2>
            <Rating noofstars={theCourse.rating} />
            <button className="btn btn-primary">
              {theCourse.likes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <p className="card-text">₹.{theCourse.price}</p>

            <div>{theCourse.description}</div>

            <button
              className="btn btn-outline-success"
              onClick={() => navigate("/")}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
