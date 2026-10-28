import Link from "next/link";
import { Logo } from "@widgets/Logo";
import styles from "./Header.module.css";
import { PhoneButton } from "@shared/ui/PhoneButton";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Logo />
          <nav className={styles.nav} aria-label="Навигация">
            <Link href="#services">Услуги</Link>
            <Link href="#book">Запись</Link>
            <PhoneButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
