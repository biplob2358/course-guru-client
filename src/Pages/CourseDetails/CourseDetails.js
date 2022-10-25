import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  return (
    <div>
      <h2>{courseDetails.name}</h2>
    </div>
  );
};

export default CourseDetails;
