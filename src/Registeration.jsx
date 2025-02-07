import React, { useState } from "react";
import "./assets/register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault(); 
    setError(null);

    try {
      const response = await fetch("http://localhost:9090/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration Failed!");
      }

      const data = await response.json();
      console.log(data.message || "Registration successful!");
      alert("Registration successful!");     
      navigate("/"); // Redirect to login page
      
    } catch (err) {
      setError(err.message || "Registration failed! Please try again.");
    }
  };

  return (
    <>
    <div className="page-background"></div>
    <div className="page-container">
      <div className="form-container">
        <h1 className="form-title">Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignUp} className="form-content">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="from-group">
          <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="form-input" placeholder="Select role"
            >
              <option>None</option>
              <option value="CUSTOMER">CUSTOMER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <button type="submit" className="form-button">
            Sign Up
          </button>
        </form>
        <p className="form-footer">Already a User?{" "}
          <a href="/" className="form-link">Log In here</a>
        </p>
      </div>
    </div>
      </>    
  );
}

export default Register;