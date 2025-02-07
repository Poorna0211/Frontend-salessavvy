import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./assets/index.css";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);  // Set loading to true when submitting the form
    try {
      const response = await fetch("http://localhost:9090/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      // const data = await response.json();
      // console.log(data);
      
      if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login Failed!");
      }
      const data = await response.json();
      console.log(data.message || "Login successful!");
      alert("Login successful!");     
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went Wrong. Try again.");
    }
  };
  return (
    <>
    <div className="page-background"></div>

    <div className="login-container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username" className="login-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <a href="register">New User.? ISGN IN</a>
      </form>
      {error && <p className="login-error">{error}</p>}
    </div>
    </>
  );
}

export default Login;