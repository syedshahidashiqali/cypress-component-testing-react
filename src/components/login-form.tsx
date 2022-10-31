import { Button } from "./button";
import { Input } from "./input";
import styles from "./login-form.module.css";

export function LoginForm() {
  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Log In</legend>
        <Input
          label="Login"
          type="text"
          name="username"
          errorMessage="Login is required"
          submitted={false}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          errorMessage="Password is required"
          submitted={false}
        />
        <Button text="Login" />
        <div className={styles.error}>errorMessage</div>
        <div className={styles.success}>Welcome username!</div>
      </fieldset>
    </form>
  );
}
