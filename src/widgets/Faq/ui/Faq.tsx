import { FAQ } from "@shared/config";
import { AccordionList } from "@shared/ui/AccordionList";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Частые вопросы</h2>
        <AccordionList items={FAQ} />
      </div>
    </section>
  );
}
