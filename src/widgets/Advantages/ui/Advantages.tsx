import { ADVANTAGES } from "@shared/config";
import styles from "./Advantages.module.css";

export function Advantages() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 style={{textAlign:"center", fontSize:"30px", fontWeight:"700", marginBottom:"48px", color:"#0f172a"}}>Почему AutoШина</h2>
        <div className={styles.grid}>
          {ADVANTAGES.map((a, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.badge}>{i + 1}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
