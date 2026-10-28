import Link from "next/link";
import styles from "./Hero.module.css";
import { PhoneButton } from "../../../shared/ui/PhoneButton";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage} />
      <div className={styles.content}>
        {/* <span className={styles.tag}>Акции</span> */}
        <h2 className={styles.title}>
          5 Шин — <span className={styles.accent}>Севастополь</span>
        </h2>
        <p className={styles.subtitle}>
          Шиномонтаж, ремонт дисков, полировка, мотошин. 13-я Радарная, 11.
          Открыто до 20:00.
        </p>
        <div className={styles.ctaRow}>
          <Link href="#book" className={styles.ctaPrimary}>
            Записаться
          </Link>
          {/* <a
            href={`tel:${SITE.phone.replace(/\D/g, "")}`}
            className={styles.ctaSecondary}
          >
            <PhoneIcon color="#fff" size={16} />
            {SITE.phone}
          </a> */}
          <PhoneButton variant="transparrent" />
        </div>
      </div>
    </section>
  );
}
