"use client";

import { useState } from "react";
import cl from "./ContactForm.module.css";
import { submitContact } from "@shared/api/contact.api";

export function ContactForm() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  return (
    <form
      className={cl.form}
      onSubmit={async (e) => {
        e.preventDefault();
        await submitContact({ name, tel });
      }}
    >
      <div>
        <label htmlFor="cf-name">Имя</label>
        <input
          id="cf-name"
          type="text"
          name="name"
          placeholder="Иван Петров"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="cf-tel">Телефон</label>
        <input
          id="cf-tel"
          type="tel"
          name="tel"
          placeholder="+7 (___) ___-__-__"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          required
        />
      </div>
      <button type="submit">Отправить заявку</button>
    </form>
  );
}
