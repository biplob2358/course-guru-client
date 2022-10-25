import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="mb-5">
      <h2 className="text-center text-primary mt-4">Our Courses</h2>
      <div className="d-flex text-warning">
        {" "}
        <hr style={{ width: "100%", border: "3px solid rgb(13, 110, 253)" }} />
      </div>
      <div className="row row-cols-md-2 mt-4 g-4">
        {courses.map((course) => (
          <AllCourse key={course.id} course={course}></AllCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
