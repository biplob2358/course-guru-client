import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const GoogleGitLogin = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };
  const handleGithubsignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="d-block w-50 mx-auto btn btn-light border border-primary mb-2"
      >
        <FcGoogle></FcGoogle>
        <span className="ms-2">Continue With Google</span>
      </button>
      <button
        onClick={handleGithubsignIn}
        className="d-block w-50 mx-auto btn btn-dark border border-warning mb-2"
      >
        <FiGithub></FiGithub>
        <span className="ms-2">Continue With Github</span>
      </button>
    </div>
  );
};

export default GoogleGitLogin;
