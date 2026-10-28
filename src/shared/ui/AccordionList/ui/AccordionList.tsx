"use client";

import Image from "next/image";
import { useAccordion } from "@shared/hooks/useAccordion";
import styles from "./AccordionList.module.css";
import { FAQItem } from "@shared/config";

export interface AccordionListProps {
  items: FAQItem[];
  defaultOpen?: number | number[];
  multiple?: boolean;
  className?: string;
}

export function AccordionList({
  items,
  defaultOpen,
  multiple = false,
  className = "",
}: AccordionListProps) {
  const { isOpen, toggle } = useAccordion({ defaultOpen, multiple });

  return (
    <div className={`${styles.list} ${className}`}>
      {items.map((item, index) => {
        const open = isOpen(index);
        return (
          <div key={index} className={styles.item}>
            <button
              onClick={() => toggle(index)}
              aria-expanded={open}
              className={styles.button}
            >
              <span className={styles.questionText}>{item.question}</span>
              <span
                className={`${styles.icon} ${open ? styles.iconOpen : ""}`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`${styles.contentWrapper} ${open ? styles.contentWrapperOpen : ""}`}
            >
              <div className={styles.contentInner}>
                <div className={styles.contentText}>{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
