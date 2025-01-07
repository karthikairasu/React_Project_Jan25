import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function NewCourse() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <>
      <header>
        <h1>New Course</h1>
      </header>
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit(async formData => {
            try {
              let courseToBeInserted = { ...formData };

              let response = await fetch("http://localhost:3500/courses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(courseToBeInserted),
              });
              let message = await response.json();
              if (message) {
                toast.success(`${message.title} added successfully !`);
                navigate("/");
              }
            } catch (error) {
              // navigate("/");
            }
          })}
        >
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseId">Id : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtCourseId"
                {...register("id", { required: "Id is required!" })}
              />
              {errors.id && <p className="text-danger">{errors.id.message}</p>}
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseTitle">Title : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtCourseTitle"
                placeholder="Max 20 characters"
                {...register("title", {
                  required: "Title is required!",
                  maxLength: {
                    value: 20,
                    message: "You exceeded max length of 20 chars!",
                  },
                })}
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseRating">Rating : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtCourseRating"
                {...register("rating")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCoursePrice">Price : </label>
            </div>
            <div className="col-md-4">
              <input type="number" id="txtCoursePrice" {...register("price")} />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseLikes">Likes : </label>
            </div>
            <div className="col-md-4">
              <input type="number" id="txtCourseLikes" {...register("likes")} />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseTrainer">Trainer : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtCourseTrainer"
                {...register("trainer")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseImage">Image : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtCourseImage"
                {...register("imageUrl")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseDescription">Description:</label>
            </div>
            <div className="col-md-4">
              <textarea
                id="txtCourseDescription"
                cols="30"
                rows="5"
                {...register("description")}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <button className="btn btn-success">Add New Course</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
