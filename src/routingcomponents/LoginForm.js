import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./styles/LoginForm.module.css";

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setUser({ username, isAdmin: true });
      navigate("/projects");
    } else if (username && password) {
      setUser({ username, isAdmin: false });
      navigate("/portfolio");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      <p className={styles.switch}>
        Not registered? <Link to="/register">Create an account</Link>
      </p>
    </div>
  );
};

export default LoginForm;
