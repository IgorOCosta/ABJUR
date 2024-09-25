"use client";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>ABJUR</h1>
        <p className={styles.subtitle}>Associação Brasileira Dos Jurados</p>
      </div>
    </section>
  );
}
