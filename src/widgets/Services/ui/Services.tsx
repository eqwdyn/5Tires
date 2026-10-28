import Image from "next/image";
import { SERVICES } from "@shared/config";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Наши услуги</h2>
          <p>Весь комплекс работ по колёсам и шинам</p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.id} className={styles.card}>
              <div className={styles.icon}>
                <Image src={s.iconUrl} alt={s.title} width={36} height={36} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className={styles.price}>{s.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}