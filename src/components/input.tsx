import styles from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage: string;
}
export function Input({ label, errorMessage, ...props }: InputProps) {
  return (
    <label className={styles.label}>
      {label}:
      <input
        type="text"
        className={styles.input}
        aria-invalid="true"
        aria-errormessage={`error-${props.name}`}
        {...props}
      />
      <span id={`error-${props.name}`} className={styles.error} role="alert">
        {errorMessage}
      </span>
    </label>
  );
}
