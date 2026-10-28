"use client";

import Image from "next/image";
import { PhoneIcon } from "@shared/ui/PhoneIcon";
import { Logo } from "../../Logo";
import { SITE } from "@shared/config";
import styles from "./Footer.module.css";

export function Footer() {
  const curYear = 2026;
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <Logo />
          <p className={styles.desc}>
            Быстрый шиномонтаж в Севастополе. 13-я Радарная, 11.
          </p>
        </div>
        <div className={styles.col}>
          <h3>Услуги</h3>
          <a href="#services">Шиномонтаж</a>
          <a href="#services">Балансировка</a>
          <a href="#book">Запись на сезон</a>
        </div>
        <div className={styles.col}>
          <h3>Контакты</h3>
          <div className={styles.infoRow}>
            <Image src="/svg/pin.svg" alt="" width={18} height={18} />
            {SITE.address}
          </div>
          <div className={styles.infoRow}>
            <PhoneIcon color="#fb923c" size={18} />
            <a href={`tel:${SITE.phone.replace(/\D/g, "")}`}>{SITE.phone}</a>
          </div>
        </div>
        <div className={styles.col}>
          <h3>Режим работы</h3>
          <div className={styles.infoRow}>
            <Image src="/svg/clock.svg" alt="" width={18} height={18} />
            {SITE.workTime}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>&copy; {curYear} 5 Шин</span>
        <span>Демо-лендинг, данные из Яндекс.Карт</span>
      </div>
    </footer>
  );
}
