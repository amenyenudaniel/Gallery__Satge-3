import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorP, setErrorP] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        navigate("/gallery");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("This account does not exist. Please create a new account.");
        } else {
          setError(error.message);
        }
      });

    if (password.length < 6) {
      setErrorP("Password must be at least 6 characters long.");
      return;
    }
  };

  return (
    <>
      <section className="section__login">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <p>Please enter your credentials to log in.</p>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">LOGIN</button>
          <small>
            Not registered?{" "}
            <span onClick={() => navigate("/signup")}>Create Account</span>
          </small>

          {error && (
            <p className="error">
              This account does not exist. <br />
              Please create a new account.
            </p>
          )}
          {errorP < 6 && <p className="error">{errorP}</p>}
        </form>
      </section>
    </>
  );
};

export default LogIn;
