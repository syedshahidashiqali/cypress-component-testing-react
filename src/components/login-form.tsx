import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import styles from "./login-form.module.css";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
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
        <div className={styles.error}>Bad username or password</div>
        <div className={styles.success}>Welcome username!</div>
      </fieldset>
    </form>
  );
}
