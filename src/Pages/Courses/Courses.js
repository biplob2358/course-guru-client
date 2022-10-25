import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>This is all courses:{courses.length}</h2>
      <div className="row row-cols-md-2 mt-4 g-4">
        {courses.map((course) => (
          <AllCourse key={course.id} course={course}></AllCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
