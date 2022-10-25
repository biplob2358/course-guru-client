import { createBrowserRouter } from "react-router-dom";
import CoursesMain from "../../layout/CoursesMain";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <CoursesMain></CoursesMain>,
        children: [
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () => fetch("http://localhost:5000/courses"),
          },
          {
            path: "/courses/:id",
            element: <CourseDetails></CourseDetails>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/courses/${params.id}`),
          },
        ],
      },
    ],
  },
]);
