"use client";

import Image from "next/image";
import { PhoneIcon } from "@shared/ui/PhoneIcon";
import { SITE } from "@shared/config";
import styles from "./Contacts.module.css";
import { ContactForm } from "@features/ContactForm";

export function Contacts() {
  return (
    <section id="book" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h2>Запись на шиномонтаж</h2>
            <p style={{ color: "#94a3b8", marginBottom: "32px" }}>
              Оставьте заявку — перезвоним в течение 5 минут и подтвердим время.
            </p>
            <ContactForm />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div className={styles.infoBlock}>
              <Image src="/svg/pin.svg" alt="" width={24} height={24} />
              <div>
                <p className={styles.infoLabel}>Адрес</p>
                <p className={styles.infoValue}>{SITE.address}</p>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <PhoneIcon color="#d97706" size={24} />
              <div>
                <p className={styles.infoLabel}>Телефон</p>
                <p className={styles.infoValue}>
                  <a href={`tel:${SITE.phone.replace(/\D/g, "")}`}>
                    {SITE.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <Image src="/svg/clock.svg" alt="" width={24} height={24} />
              <div>
                <p className={styles.infoLabel}>Режим работы</p>
                <p className={styles.infoValue}>{SITE.workTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
