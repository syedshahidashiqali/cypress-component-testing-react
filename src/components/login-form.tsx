import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import styles from "./login-form.module.css";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    login();
  }

  const login = async () => {
    if (username && password) {
      const res = await fetch("/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.status === 401) {
        setErrorMessage("Bad username or password");
      } else {
        setErrorMessage("");
      }
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Log In</legend>
        <Input
          label="Login"
          type="text"
          name="username"
          errorMessage="Login is required"
          submitted={false}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          errorMessage="Password is required"
          submitted={false}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" />
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        <div className={styles.success}>Welcome username!</div>
      </fieldset>
    </form>
  );
}
