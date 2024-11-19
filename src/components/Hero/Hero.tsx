import type { ReactElement } from "react";

import { ActionLink } from "@/src/components/ActionLink";

import styles from "./styles.module.css";

export function Hero(): ReactElement {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Victoria Bianchini</h1>
        <ActionLink url="#" text="See More Content" lg />
      </div>
      <div className={styles.imgBox}>
        <img className={styles.img} src="/hero.jpeg" alt="Victoria Bianchini" />
      </div>
    </section>
  );
}
