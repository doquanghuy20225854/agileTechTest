import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { login, logout } from "../../api/auth";
import { setToken, removeToken } from "../../utils/token";
import Logo from "../../assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await login({ username });
      setToken(response.accessToken, response.refreshToken);
      navigate("/");
    } catch (err: any) {
      setError("Invalid username");
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await logout();
    removeToken();
    navigate('/login');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className={styles.signInBtn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 