import React, { useContext, useRef, useState } from "react";
import classes from './Login.module.css'
import { AuthContext } from "../store/auth-context";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setIsLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/portfolio");
    } catch {
      setError("Failed to log in");
    }
    setIsLoading(false);
  }
  return (
    <div className={classes.wrapper}>
    <div className={classes.loginPage}>
        {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginEmail">Email</label>
        <input type="text" id="loginEmail" ref={emailRef} />
        <label htmlFor="loginPassword">Password</label>
        <input type="text" id="loginPassword" ref={passwordRef}/>
        <button>Login</button>
      </form>
      <div>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;
