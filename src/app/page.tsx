"use client";
import styles from "./page.module.css";
import AnimatedHeader from "@/components/fluid-heading/heading";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AnimatedHeader />
      </main>
      <Footer styles={styles} />
    </div>
  );
}
