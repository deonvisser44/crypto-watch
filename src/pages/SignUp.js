import React, { useRef, useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { AuthContext } from "../store/auth-context";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useContext(AuthContext);
  const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      // setIsLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/crypto-watch");
    } catch {
      setError("Failed to create an account, try again");
    }
    // setIsLoading(false);
  }

  return (
    <div className={classes.wrapper}>
    <div className={classes.signupPage}>
      {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" ref={passwordRef} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="text" id="confirmPassword" ref={passwordConfirmRef} />
        <button>Sign Up</button>
      </form>

      <div>
        <p>
          Already have an acount?<Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
