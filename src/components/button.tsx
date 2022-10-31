import styles from "./button.module.css";

export function Button({ text }: { text: string }) {
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  );
}
