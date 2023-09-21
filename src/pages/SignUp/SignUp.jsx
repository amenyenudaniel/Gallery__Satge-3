import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorP, setErrorP] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setErrorP("Password must be at least 6 characters long.");
      return;
    }

    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log(userCredentials);
          navigate("/gallery");
        })
        .finally(() => {
          setPassword("");
          setEmail("");
        });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.error("This account already exists. Please log in.");
      } else {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <section className="section__login">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <small>
            Already have an account?{" "}
            <span onClick={() => navigate("/")}>Log In</span>
          </small>
          {error && (
            <p className="error">
              {"Please this account already exist Log In"}
            </p>
          )}

          {password.length < 6 && <p className="error">{errorP}</p>}
        </form>
      </section>
    </>
  );
};

export default SignUp;
