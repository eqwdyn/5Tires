import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="#" aria-label="AutoШина — главный">
      <h1 className={styles.title}>
        <span className={styles.icon}>A</span>utoШина
      </h1>
    </Link>
  );
}
