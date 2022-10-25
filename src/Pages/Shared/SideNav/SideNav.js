import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [coursesName, setCourseName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourseName(data));
  }, []);
  return (
    <div>
      <h2>Our Courses</h2>
      <Link className="text-decoration-none" to={"/courses"}>
        All Courses
      </Link>
      <div className="mt-2 ">
        {coursesName.map((courseName) => (
          <p key={courseName.id}>
            <Link
              className="text-decoration-none"
              to={`/courses/${courseName.id}`}
            >
              {courseName.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
